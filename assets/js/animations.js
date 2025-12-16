/**
 * PROFESSIONAL ANIMATION SYSTEM
 * For Engineering Portfolio
 * 
 * Principles:
 * - Intentional, not decorative
 * - Subtle, not attention-grabbing
 * - Engineered, not playful
 * - Information coming into focus
 */

class PortfolioAnimations {
    constructor() {
        this.observers = new Map();
        this.animatedElements = new Set();
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.setupScrollObserver();
        this.setupTextAnimations();
        this.setupHoverEffects();
        this.setupExpandableElements();
        
        // Special: Trigger hero decode animation with delay
        setTimeout(() => {
            const heroDecodeElement = document.getElementById('hero-decode');
            if (heroDecodeElement && !this.animatedElements.has(heroDecodeElement)) {
                this.animateElement(heroDecodeElement);
                this.animatedElements.add(heroDecodeElement);
            }
        }, 2000); // Start after 2 seconds delay (increased from 1 second)
        
        // Performance: Clean up observers when page is hidden
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAnimations();
            } else {
                this.resumeAnimations();
            }
        });
    }

    /**
     * SCROLL-BASED ANIMATIONS
     * Uses IntersectionObserver for performance
     */
    setupScrollObserver() {
        if (this.isReducedMotion) return;

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
                    this.animateElement(entry.target);
                    this.animatedElements.add(entry.target);
                }
            });
        }, observerOptions);

        // Observe all elements with animation classes
        const animatableElements = document.querySelectorAll(`
            .animate-on-scroll,
            .section-enter,
            .panel-reveal,
            .text-clarify,
            .text-emphasis,
            .text-phrase-reveal,
            .text-decode,
            .stagger-children,
            .architecture-reveal,
            #cp
        `);

        animatableElements.forEach(el => {
            observer.observe(el);
            el.classList.add('will-animate');
        });

        this.observers.set('scroll', observer);
    }

    /**
     * ANIMATE ELEMENT BASED ON ITS TYPE
     */
    animateElement(element) {
        const animationType = this.getAnimationType(element);
        
        switch (animationType) {
            case 'text-clarify':
                this.animateTextClarify(element);
                break;
            case 'text-emphasis':
                this.animateTextEmphasis(element);
                break;
            case 'text-phrase-reveal':
                this.animateTextPhraseReveal(element);
                break;
            case 'text-decode':
                this.animateTextDecode(element);
                break;
            case 'stagger-children':
                this.animateStaggerChildren(element);
                break;
            case 'architecture-reveal':
                this.animateArchitecture(element);
                break;
            case 'leetcode-section':
                this.animateLeetCodeSection(element);
                break;
            default:
                this.animateDefault(element);
        }

        // Clean up will-change after animation
        setTimeout(() => {
            element.classList.add('animation-complete');
            element.classList.remove('will-animate');
        }, 1000);
    }

    getAnimationType(element) {
        const classes = element.classList;
        if (classes.contains('text-clarify')) return 'text-clarify';
        if (classes.contains('text-emphasis')) return 'text-emphasis';
        if (classes.contains('text-phrase-reveal')) return 'text-phrase-reveal';
        if (classes.contains('text-decode')) return 'text-decode';
        if (classes.contains('stagger-children')) return 'stagger-children';
        if (classes.contains('architecture-reveal')) return 'architecture-reveal';
        if (element.id === 'cp') return 'leetcode-section';
        return 'default';
    }

    /**
     * TEXT ANIMATION METHODS
     */
    animateTextClarify(element) {
        element.classList.add('revealed');
    }

    animateTextEmphasis(element) {
        const emphasisWords = element.querySelectorAll('.emphasis-word');
        emphasisWords.forEach((word, index) => {
            word.style.setProperty('--delay', `${index * 100}ms`);
        });
        element.classList.add('revealed');
    }

    animateTextPhraseReveal(element) {
        const phrases = element.querySelectorAll('.phrase');
        phrases.forEach((phrase, index) => {
            phrase.style.setProperty('--delay', `${index * 150}ms`);
        });
        element.classList.add('revealed');
    }

    animateTextDecode(element) {
        // Start the character-by-character decoding
        this.startCharacterDecode(element);
    }

    startCharacterDecode(element) {
        const originalText = element.textContent;
        // Use compact symbols with similar width to regular characters
        const alienChars = [
            '◦', '◯', '●', '○', '◐', '◑', '◒', '◓',
            '▪', '▫', '■', '□', '▴', '▾', '◂', '▸',
            '◊', '◈', '◇', '◆', '⬢', '⬡', '⬟', '⬠'
        ];

        // Store original height to prevent layout shifts
        const originalHeight = element.offsetHeight;
        element.style.minHeight = originalHeight + 'px';

        // Create character spans
        const chars = originalText.split('');
        const alienText = chars.map(char => {
            if (char.match(/[a-zA-Z0-9]/)) {
                return alienChars[Math.floor(Math.random() * alienChars.length)];
            }
            return char; // Keep spaces and punctuation
        });

        // Replace text with spans for each character, preserving natural spacing
        element.innerHTML = chars.map((char, index) => {
            const alienChar = alienText[index];
            if (char === ' ') {
                return ' '; // Keep spaces as regular spaces, don't wrap in spans
            } else if (char.match(/[a-zA-Z0-9]/)) {
                return `<span class="decode-char" data-original="${char}" data-alien="${alienChar}">${alienChar}</span>`;
            } else {
                return char; // Keep punctuation as regular text, don't wrap in spans
            }
        }).join('');

        // Phase 1: Brief flicker alien symbols (0.8 seconds)
        const charSpans = element.querySelectorAll('.decode-char');
        let flickerCount = 0;
        const flickerInterval = setInterval(() => {
            if (flickerCount < 8) { // Reduced from 15 to 8
                charSpans.forEach(span => {
                    if (span.dataset.original.match(/[a-zA-Z0-9]/)) {
                        const newAlien = alienChars[Math.floor(Math.random() * alienChars.length)];
                        span.textContent = newAlien;
                        span.dataset.alien = newAlien;
                    }
                });
                flickerCount++;
            } else {
                clearInterval(flickerInterval);
                // Phase 2: Start character-by-character transformation
                this.transformCharacters(charSpans);
            }
        }, 100);
    }

    transformCharacters(charSpans) {
        // Use same compact symbols with similar width to regular characters
        const alienChars = [
            '◦', '◯', '●', '○', '◐', '◑', '◒', '◓',
            '▪', '▫', '■', '□', '▴', '▾', '◂', '▸',
            '◊', '◈', '◇', '◆', '⬢', '⬡', '⬟', '⬠'
        ];

        charSpans.forEach((span, index) => {
            // Only transform letters and numbers, leave punctuation as-is
            if (span.dataset.original && span.dataset.original.match(/[a-zA-Z0-9]/)) {
                // Reduced random delay for each character (0-1.2 seconds)
                const delay = Math.random() * 1200;
                
                setTimeout(() => {
                    // Quick flicker through multiple symbols before settling
                    let flickerCount = 0;
                    const quickFlicker = setInterval(() => {
                        if (flickerCount < 3) { // Reduced from 5 to 3
                            const randomAlien = alienChars[Math.floor(Math.random() * alienChars.length)];
                            span.textContent = randomAlien;
                            flickerCount++;
                        } else {
                            clearInterval(quickFlicker);
                            // Final transformation to English
                            span.classList.add('transforming');
                            span.textContent = span.dataset.original;
                            
                            // Remove transformation class after animation
                            setTimeout(() => {
                                span.classList.remove('transforming');
                                span.classList.add('transformed');
                            }, 300);
                        }
                    }, 40); // Slightly faster flicker
                }, delay);
            }
        });
    }

    animateStaggerChildren(element) {
        element.classList.add('revealed');
    }

    animateArchitecture(element) {
        const components = element.querySelectorAll('.architecture-component');
        const connections = element.querySelectorAll('.connection-line');
        
        // Animate components first
        components.forEach((component, index) => {
            component.style.setProperty('--delay', `${index * 100}ms`);
            component.classList.add('revealed');
        });
        
        // Then animate connections
        setTimeout(() => {
            connections.forEach((line, index) => {
                line.style.setProperty('--delay', `${index * 200}ms`);
                line.classList.add('revealed');
            });
        }, 300);
        
        element.classList.add('revealed');
    }

    animateLeetCodeSection(element) {
        // First apply default animation
        element.classList.add('revealed');
        
        // Then trigger number animations after a short delay
        setTimeout(() => {
            this.animateNumbers();
        }, 500);
    }

    animateNumbers() {
        const numbers = document.querySelectorAll('.animate-number');
        
        numbers.forEach(number => {
            const target = parseInt(number.dataset.target || number.textContent);
            const duration = 1500;
            const step = target / (duration / 16);
            let current = 0;
            
            // Start from 0
            number.textContent = '0';
            number.classList.add('counting');
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                    number.classList.remove('counting');
                }
                number.textContent = Math.floor(current);
            }, 16);
        });
    }

    animateDefault(element) {
        element.classList.add('revealed');
    }

    /**
     * TEXT PROCESSING UTILITIES
     */
    setupTextAnimations() {
        // Auto-wrap emphasis words
        this.wrapEmphasisWords();
        this.wrapPhrases();
    }

    wrapEmphasisWords() {
        const emphasisElements = document.querySelectorAll('.text-emphasis');
        emphasisElements.forEach(element => {
            const keywords = [
                'distributed systems', 'compilers', 'AI infrastructure',
                'correctness', 'performance', 'maintainable design',
                'first-principles', 'failure modes', 'observability',
                'consensus algorithms', 'high-performance networking',
                'LLVM-based', 'static analysis', 'code generation',
                'production ML systems', 'computer vision', 'model serving'
            ];
            
            let html = element.innerHTML;
            keywords.forEach(keyword => {
                const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
                html = html.replace(regex, `<span class="emphasis-word">${keyword}</span>`);
            });
            element.innerHTML = html;
        });
    }

    wrapPhrases() {
        const phraseElements = document.querySelectorAll('.text-phrase-reveal');
        phraseElements.forEach(element => {
            const text = element.textContent;
            const sentences = text.split(/(?<=[.!?])\s+/);
            
            element.innerHTML = sentences
                .map(sentence => `<span class="phrase">${sentence}</span>`)
                .join(' ');
        });
    }

    /**
     * HOVER EFFECTS
     */
    setupHoverEffects() {
        // Add hover classes to interactive elements
        const interactiveElements = document.querySelectorAll(`
            .work-item,
            .leetcode-stat-card,
            .methodology-phase,
            a[href^="#"],
            a[href^="http"]
        `);

        interactiveElements.forEach(element => {
            if (!element.classList.contains('hover-lift') && 
                !element.classList.contains('hover-emphasis')) {
                element.classList.add('hover-lift');
            }
        });
    }

    /**
     * EXPANDABLE ELEMENTS
     */
    setupExpandableElements() {
        const expandableElements = document.querySelectorAll('.expandable');
        expandableElements.forEach(element => {
            const content = element.querySelector('.expandable-content');
            if (content) {
                const height = content.scrollHeight;
                element.style.setProperty('--max-height', `${height}px`);
            }
        });
    }

    /**
     * PERFORMANCE MANAGEMENT
     */
    pauseAnimations() {
        this.observers.forEach(observer => observer.disconnect());
    }

    resumeAnimations() {
        this.setupScrollObserver();
    }

    /**
     * PUBLIC API
     */
    
    // Manually trigger animation on element
    animateElementById(id) {
        const element = document.getElementById(id);
        if (element && !this.animatedElements.has(element)) {
            this.animateElement(element);
            this.animatedElements.add(element);
        }
    }

    // Add new element to be observed
    observeElement(element) {
        if (this.observers.has('scroll')) {
            this.observers.get('scroll').observe(element);
            element.classList.add('will-animate');
        }
    }

    // Smooth expand/collapse
    expandElement(element, duration = 300) {
        if (element.classList.contains('expandable')) {
            element.classList.remove('collapsed');
            element.classList.add('expanded');
        }
    }

    collapseElement(element, duration = 300) {
        if (element.classList.contains('expandable')) {
            element.classList.remove('expanded');
            element.classList.add('collapsed');
        }
    }

    // Fade through transition (useful for content updates)
    fadeThrough(element, callback, duration = 250) {
        element.classList.add('fade-through', 'transitioning');
        
        setTimeout(() => {
            if (callback) callback();
            element.classList.remove('transitioning');
        }, duration);
    }
}

// Initialize animations when DOM is ready
const portfolioAnimations = new PortfolioAnimations();

// Export for external use
window.PortfolioAnimations = portfolioAnimations;

/**
 * UTILITY FUNCTIONS FOR MANUAL CONTROL
 */

// Quick access functions
window.animateElement = (id) => portfolioAnimations.animateElementById(id);
window.expandElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) portfolioAnimations.expandElement(element);
};
window.collapseElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) portfolioAnimations.collapseElement(element);
};

/**
 * INTEGRATION WITH EXISTING CODE
 */

// Note: Work item toggle is now handled directly in main.js with scroll prevention
// No override needed here to avoid conflicts