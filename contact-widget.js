
// Contact Widget System
class ContactWidget {
    constructor() {
        this.isOpen = false;
        this.init();
    }

    init() {
        this.createWidget();
        this.setupEventListeners();
    }

    createWidget() {
        // Check if widget already exists
        if (document.getElementById('contactWidget')) return;

        const widget = document.createElement('div');
        widget.id = 'contactWidget';
        widget.className = 'contact-widget';
        
        widget.innerHTML = `
            <button class="contact-widget-toggle" id="contactWidgetToggle" aria-label="Contact Options">
                <i class="fas fa-comments"></i>
                <span class="contact-widget-close-icon" style="display: none;">
                    <i class="fas fa-times"></i>
                </span>
            </button>
            <div class="contact-widget-panel" id="contactWidgetPanel">
                <div class="contact-widget-header">
                    <h3>Get in Touch</h3>
                    <p>Choose your preferred way to contact us</p>
                </div>
                <div class="contact-widget-options">
                    <a href="mailto:info@gulfcontractors.ae" class="contact-option" data-type="email">
                        <div class="contact-option-icon email">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-option-content">
                            <span class="contact-option-label">Email</span>
                            <span class="contact-option-value">info@gulfcontractors.ae</span>
                        </div>
                    </a>
                    <a href="https://wa.me/971501234567" target="_blank" class="contact-option" data-type="whatsapp">
                        <div class="contact-option-icon whatsapp">
                            <i class="fab fa-whatsapp"></i>
                        </div>
                        <div class="contact-option-content">
                            <span class="contact-option-label">WhatsApp</span>
                            <span class="contact-option-value">+971 50 123 4567</span>
                        </div>
                    </a>
                    <a href="tel:+971501234567" class="contact-option" data-type="phone">
                        <div class="contact-option-icon phone">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-option-content">
                            <span class="contact-option-label">Call Us</span>
                            <span class="contact-option-value">+971 50 123 4567</span>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/linxrental" target="_blank" class="contact-option" data-type="instagram">
                        <div class="contact-option-icon instagram">
                            <i class="fab fa-instagram"></i>
                        </div>
                        <div class="contact-option-content">
                            <span class="contact-option-label">Instagram</span>
                            <span class="contact-option-value">@linxrental</span>
                        </div>
                    </a>
                </div>
            </div>
        `;

        document.body.appendChild(widget);
    }

    setupEventListeners() {
        const toggle = document.getElementById('contactWidgetToggle');
        const panel = document.getElementById('contactWidgetPanel');
        const options = document.querySelectorAll('.contact-option');

        if (toggle) {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                this.togglePanel();
            });
        }

        // Close on outside click
        document.addEventListener('click', (e) => {
            const widget = document.getElementById('contactWidget');
            if (widget && !widget.contains(e.target) && this.isOpen) {
                this.closePanel();
            }
        });

        // Close on option click
        options.forEach(option => {
            option.addEventListener('click', () => {
                // Small delay to allow navigation
                setTimeout(() => {
                    this.closePanel();
                }, 100);
            });
        });

        // Prevent panel clicks from closing
        if (panel) {
            panel.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closePanel();
            }
        });
    }

    togglePanel() {
        if (this.isOpen) {
            this.closePanel();
        } else {
            this.openPanel();
        }
    }

    openPanel() {
        const widget = document.getElementById('contactWidget');
        const toggle = document.getElementById('contactWidgetToggle');
        const panel = document.getElementById('contactWidgetPanel');
        const icon = toggle?.querySelector('.fa-comments');
        const closeIcon = toggle?.querySelector('.contact-widget-close-icon');

        if (widget && panel && toggle) {
            widget.classList.add('open');
            panel.style.display = 'block';
            
            // Animate panel
            setTimeout(() => {
                panel.classList.add('active');
            }, 10);

            // Toggle icons
            if (icon) icon.style.display = 'none';
            if (closeIcon) closeIcon.style.display = 'flex';

            this.isOpen = true;
        }
    }

    closePanel() {
        const widget = document.getElementById('contactWidget');
        const toggle = document.getElementById('contactWidgetToggle');
        const panel = document.getElementById('contactWidgetPanel');
        const icon = toggle?.querySelector('.fa-comments');
        const closeIcon = toggle?.querySelector('.contact-widget-close-icon');

        if (widget && panel && toggle) {
            panel.classList.remove('active');
            
            setTimeout(() => {
                panel.style.display = 'none';
                widget.classList.remove('open');
            }, 300);

            // Toggle icons
            if (icon) icon.style.display = 'block';
            if (closeIcon) closeIcon.style.display = 'none';

            this.isOpen = false;
        }
    }
}

// Initialize contact widget when DOM is ready
let contactWidget;
document.addEventListener('DOMContentLoaded', () => {
    contactWidget = new ContactWidget();
});
