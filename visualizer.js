// Singleton pattern for Visualizer
const Visualizer = (function() {
    let instance;

    class VisualizerClass {
        constructor() {
            this.audioContext = null;
            this.source = null;
            this.analyser = null;
            this.animationId = null;
            this.canvas = null;
            this.canvasCtx = null;
            this.isInitialized = false;
        }

        // Initialize basic canvas setup
        initialize() {
            if (this.isInitialized) return;

            this.canvas = document.getElementById('canvas');
            if (!this.canvas) {
                console.error('Canvas element not found');
                return;
            }

            this.canvasCtx = this.canvas.getContext('2d');
            this._setupResizeHandler();
            this._updateCanvasSize();
            this.isInitialized = true;
        }

        // Set up audio context and connections
        async setupAudio() {
            if (!this.audioContext) {
                window.AudioContext = window.AudioContext || window.webkitAudioContext;
                try {
                    this.audioContext = new AudioContext();
                } catch (e) {
                    console.error('Web Audio API is not supported:', e);
                    return;
                }
            }

            // Only set up source once
            if (!this.source && window.audioSource) {
                this.source = this.audioContext.createMediaElementSource(window.audioSource);
                this.analyser = this.audioContext.createAnalyser();
                this.analyser.fftSize = 2048;
                this.source.connect(this.analyser);
                this.analyser.connect(this.audioContext.destination);
                this._startDrawing();
            }
        }

        // Handle canvas resize
        _updateCanvasSize() {
            if (!this.canvas || !this.canvasCtx) return;

            const container = this.canvas.parentElement;
            if (!container) return;

            const rect = container.getBoundingClientRect();

            // Set size 1:1 without device pixel ratio scaling
            this.canvas.width = rect.width;
            this.canvas.height = rect.height;
            this.canvas.style.width = `${rect.width}px`;
            this.canvas.style.height = `${rect.height}px`;

        }

        // Set up window resize handler
        _setupResizeHandler() {
            let resizeTimeout;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => this._updateCanvasSize(), 250);
            });
        }

        // Start the visualization
        _startDrawing() {
            if (!this.analyser || !this.canvasCtx) return;

            const drawVisual = () => {
                this.animationId = requestAnimationFrame(drawVisual);
                
                const bufferLength = this.analyser.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);
                this.analyser.getByteFrequencyData(dataArray);

                const width = this.canvas.width;
                const height = this.canvas.height;
                const barWidth = 4;
                const gap = 1;
                const bars = Math.floor(width / (barWidth + gap));
                const step = Math.floor(bufferLength / bars);

                this.canvasCtx.clearRect(0, 0, width, height);

                // Check if audio is playing
                const isPlaying = dataArray.some(value => value > 0);
                if (!isPlaying) return;

                const gradient = this.canvasCtx.createLinearGradient(0, 0, 0, height);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0.2)');
                gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.7)');

                for (let i = 0; i < bars; i++) {
                    const value = dataArray[i * step];
                    const barHeight = (value / 255) * height;
                    const x = i * (barWidth + gap);
                    const y = height - barHeight;

                    // Draw bar
                    this.canvasCtx.fillStyle = gradient;
                    this.canvasCtx.fillRect(x, y, barWidth, barHeight);

                    // Draw cap
                    this.canvasCtx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                    this.canvasCtx.fillRect(x, y, barWidth, 2);
                }
            };

            drawVisual();
        }

        // Public method to resume audio context
        async resumeContext() {
            if (this.audioContext && this.audioContext.state === 'suspended') {
                await this.audioContext.resume();
            }
        }
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = new VisualizerClass();
            }
            return instance;
        }
    };
})();

// Initialize visualizer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const visualizer = Visualizer.getInstance();
    visualizer.initialize();
});

// Export for use in other files
window.Visualizer = Visualizer;