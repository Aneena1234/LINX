// DOM Elements
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const inquiryBtn = document.getElementById('inquiryBtn');
const inquiryModal = document.getElementById('inquiryModal');
const modalClose = document.getElementById('modalClose');
const quickInquiryForm = document.getElementById('quickInquiryForm');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const ctaQuoteBtn = document.getElementById('ctaQuoteBtn');
const searchSuggestions = document.getElementById('searchSuggestions');
const contactForm = document.getElementById('contactForm');

// Search suggestions data
const searchData = {
    equipment: [
        'Excavators',
        'Bulldozers',
        'Cranes',
        'Loaders',
        'Dump Trucks',
        'Compactors',
        'Backhoe Loaders'
    ],
    materials: [
        'Gutch Sand',
        'Gravel',
        'Aggregates',
        'Road Base Materials',
        'Construction Sand'
    ],
    services: [
        'Equipment Rental',
        'Transportation Services',
        'Materials Supply',
        'Waste Water Transport',
        'Logistics Solutions'
    ],
    brands: [
        'Caterpillar',
        'Komatsu',
        'Volvo',
        'JCB',
        'Liebherr',
        'SANY'
    ]
};

// Category catalog data - UPDATED WITH BETTER FILTER MAPPING
const categoryCatalog = {
    aerial: {
        name: 'Aerial Work Platforms',
        icon: 'fa-up-down-left-right',
        keywords: ['aerial', 'boom lift', 'scissor lift', 'manlift', 'access', 'crane', 'lifting'],
        filter: 'crane'
    },
    earth: {
        name: 'Earth Moving',
        icon: 'fa-mountain',
        keywords: ['earth', 'earth moving', 'earthworks', 'dozer', 'grader', 'excavator', 'bulldozer'],
        filter: 'excavator'
    },
    construction: {
        name: 'Construction Equipment',
        icon: 'fa-helmet-safety',
        keywords: ['construction equipment', 'site plant', 'general construction'],
        filter: 'all'
    },
    concrete: {
        name: 'Concrete & Masonry',
        icon: 'fa-border-all',
        keywords: ['concrete', 'masonry', 'cement', 'mixers', 'compactor'],
        filter: 'compactor'
    },
    power: {
        name: 'Power & HVAC',
        icon: 'fa-bolt',
        keywords: ['power', 'generator', 'hvac', 'chiller', 'ac'],
        filter: 'generator'
    },
    compaction: {
        name: 'Compaction & Others',
        icon: 'fa-compact-disc',
        keywords: ['compaction', 'roller', 'rammer', 'plate', 'other', 'compactor'],
        filter: 'compactor'
    },
    materials: {
        name: 'Construction Materials',
        icon: 'fa-cubes',
        keywords: ['materials', 'sand', 'aggregate', 'gravel', 'gutch'],
        filter: 'all'
    },
    vehicles: {
        name: 'Rental Vehicles',
        icon: 'fa-truck-moving',
        keywords: ['vehicles', 'rental vehicles', 'truck', 'bus', 'transport', 'dump truck'],
        filter: 'dump-truck'
    }
};

// Equipment type mapping for search
const equipmentTypeMapping = {
    'crane': ['crane', 'lifting', 'boom', 'tower', 'hoist', 'aerial'],
    'excavator': ['excavator', 'digger', 'loader', 'backhoe', 'earth', 'dozer'],
    'bulldozer': ['bulldozer', 'dozer', 'grader', 'earth mover'],
    'forklift': ['forklift', 'lift truck', 'pallet'],
    'dump-truck': ['truck', 'hauler', 'dumper', 'transport', 'vehicle', 'lorry'],
    'compactor': ['compactor', 'roller', 'rammer', 'plate', 'vibratory'],
    'generator': ['generator', 'power', 'genset', 'electricity'],
    'compressor': ['compressor', 'air', 'pneumatic'],
    'mixer': ['mixer', 'concrete', 'cement'],
    'telehandler': ['telehandler', 'handler', 'reach'],
    'skidsteer': ['skid steer', 'skidsteer', 'compact loader'],
    'motor-grader': ['grader', 'motor grader', 'road grader'],
    'backhoe': ['backhoe', 'back hoe']
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    setupSmoothScroll();
    setupScrollAnimations();
   
    // Add scroll effect to navbar
    window.addEventListener('scroll', handleNavScroll);
   
    // Build category sections if on homepage
    if (document.getElementById('categoryGrid')) {
        buildCategorySections();
    }
});

// Event Listeners
function setupEventListeners() {
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
   
    // Close mobile menu when clicking a link
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    toggleMobileMenu();
                }
            });
        });
    }
   
    // Inquiry modal
    if (inquiryBtn) {
        inquiryBtn.addEventListener('click', openInquiryModal);
    }
   
    if (ctaQuoteBtn) {
        ctaQuoteBtn.addEventListener('click', openInquiryModal);
    }
   
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            closeInquiryModal();
            // Restore original select options
            const serviceSelect = document.getElementById('serviceSelect');
            if (serviceSelect && serviceSelect.dataset.original) {
                serviceSelect.innerHTML = serviceSelect.dataset.original;
            }
        });
    }
   
    // Close modal when clicking outside
    if (inquiryModal) {
        inquiryModal.addEventListener('click', (e) => {
            if (e.target === inquiryModal) {
                closeInquiryModal();
                // Restore original select options
                const serviceSelect = document.getElementById('serviceSelect');
                if (serviceSelect && serviceSelect.dataset.original) {
                    serviceSelect.innerHTML = serviceSelect.dataset.original;
                }
            }
        });
    }
   
    // Form submission
    if (quickInquiryForm) {
        quickInquiryForm.addEventListener('submit', handleFormSubmit);
    }
   
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
   
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('focus', showSearchSuggestions);
        searchInput.addEventListener('input', handleSearchInput);
    }
   
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
   
    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (searchSuggestions && !e.target.closest('.hero-search-container') && !e.target.closest('.search-suggestions')) {
            hideSearchSuggestions();
        }
    });
}

// Build category sections
function buildCategorySections() {
    const categoryGrid = document.getElementById('categoryGrid');
   
    if (!categoryGrid) return;
   
    categoryGrid.innerHTML = '';
   
    Object.entries(categoryCatalog).forEach(([key, item]) => {
        const card = document.createElement('div');
        card.className = 'catalog-card';
        card.dataset.key = key;
       
        card.innerHTML = `
            <div class="catalog-icon">
                <i class="fa-solid ${item.icon}"></i>
            </div>
            <h3>${item.name}</h3>
        `;
       
        card.addEventListener('click', () => {
            // Redirect to equipment page with filter
            window.location.href = `equipment.html?filter=${item.filter}`;
        });
       
        categoryGrid.appendChild(card);
    });
}

// Mobile Menu
function toggleMobileMenu() {
    if (hamburger && navMenu) {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    }
}

// Smooth Scroll - No underlines on scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId.startsWith('#')) {
                e.preventDefault();
               
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;
                   
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Navbar Scroll Effect
function handleNavScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            navbar.style.height = '60px';
        } else {
            navbar.style.boxShadow = 'var(--shadow)';
            navbar.style.height = '70px';
        }
    }
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements
    const elementsToObserve = document.querySelectorAll('.catalog-card, .fleet-card, .feature-item, .service-card, .value-card, .equipment-preview-card');
    elementsToObserve.forEach(el => {
        if (el) observer.observe(el);
    });
}

// Search Functions
function showSearchSuggestions() {
    if (!searchSuggestions) return;
   
    const suggestions = generateSuggestions();
    renderSuggestions(suggestions);
    searchSuggestions.classList.add('active');
}

function hideSearchSuggestions() {
    if (!searchSuggestions) return;
    searchSuggestions.classList.remove('active');
}

function handleSearchInput(e) {
    const query = e.target.value.trim();
   
    if (query.length > 0) {
        filterSuggestions(query);
    } else {
        showSearchSuggestions();
    }
}

function filterSuggestions(query) {
    if (!searchSuggestions) return;
   
    const queryLower = query.toLowerCase();
    const allSuggestions = generateSuggestions();
   
    const filtered = allSuggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(queryLower) ||
        suggestion.category.toLowerCase().includes(queryLower)
    );
   
    if (filtered.length > 0) {
        renderSuggestions(filtered.slice(0, 8));
        searchSuggestions.classList.add('active');
    } else {
        renderNoResults(query);
    }
}

function generateSuggestions() {
    const suggestions = [];
   
    // Add equipment
    if (searchData.equipment) {
        searchData.equipment.forEach(item => {
            suggestions.push({
                text: item,
                category: 'Equipment',
                icon: 'fas fa-tools',
                type: 'equipment'
            });
        });
    }
   
    // Add materials
    if (searchData.materials) {
        searchData.materials.forEach(item => {
            suggestions.push({
                text: item,
                category: 'Materials',
                icon: 'fas fa-cubes',
                type: 'materials'
            });
        });
    }
   
    // Add services
    if (searchData.services) {
        searchData.services.forEach(item => {
            suggestions.push({
                text: item,
                category: 'Services',
                icon: 'fas fa-concierge-bell',
                type: 'services'
            });
        });
    }
   
    // Add brands
    if (searchData.brands) {
        searchData.brands.forEach(item => {
            suggestions.push({
                text: item,
                category: 'Brand',
                icon: 'fas fa-tag',
                type: 'brand'
            });
        });
    }
   
    return suggestions;
}

function renderSuggestions(suggestions) {
    if (!searchSuggestions) return;
   
    searchSuggestions.innerHTML = '';
   
    suggestions.forEach(suggestion => {
        const item = document.createElement('div');
        item.className = 'search-suggestion-item';
        item.innerHTML = `
            <i class="${suggestion.icon}"></i>
            <span class="suggestion-text">${suggestion.text}</span>
            <span class="suggestion-category">${suggestion.category}</span>
        `;
       
        item.addEventListener('click', () => {
            if (searchInput) searchInput.value = suggestion.text;
            performSearch();
            hideSearchSuggestions();
        });
       
        searchSuggestions.appendChild(item);
    });
}

function renderNoResults(query) {
    if (!searchSuggestions) return;
   
    searchSuggestions.innerHTML = `
        <div class="search-suggestion-item no-results">
            <i class="fas fa-search"></i>
            <span class="suggestion-text">No results found for "${query}"</span>
        </div>
    `;
    searchSuggestions.classList.add('active');
}

// Search routing - UPDATED WITH BETTER FILTERING
function routeSearchQuery(query) {
    const normalized = query.toLowerCase();

    // First check for direct equipment matches
    for (const [filter, keywords] of Object.entries(equipmentTypeMapping)) {
        if (keywords.some(keyword => normalized.includes(keyword))) {
            window.location.href = `equipment.html?filter=${filter}`;
            return;
        }
    }

    // Check category catalog
    const matchedCategory = Object.entries(categoryCatalog).find(([key, item]) =>
        item.name.toLowerCase().includes(normalized) ||
        item.keywords.some(k => normalized.includes(k))
    );

    if (matchedCategory) {
        window.location.href = `equipment.html?filter=${matchedCategory[1].filter}`;
        return;
    }

    // Check search data
    if (searchData.equipment.some(item => item.toLowerCase().includes(normalized))) {
        window.location.href = 'equipment.html';
        return;
    }

    if (searchData.materials.some(item => item.toLowerCase().includes(normalized))) {
        window.location.href = 'services.html';
        return;
    }

    if (searchData.services.some(item => item.toLowerCase().includes(normalized))) {
        window.location.href = 'services.html';
        return;
    }

    // Default to all equipment
    window.location.href = 'equipment.html';
}

function performSearch() {
    if (searchInput) {
        const query = searchInput.value.trim();
        if (query) {
            routeSearchQuery(query);
        }
        hideSearchSuggestions();
    }
}

// Inquiry Modal
function openInquiryModal() {
    if (inquiryModal) {
        inquiryModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeInquiryModal() {
    if (inquiryModal) {
        inquiryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
       
        // Reset form
        if (quickInquiryForm) {
            quickInquiryForm.reset();
        }
    }
}

// Form Submission
function handleFormSubmit(e) {
    e.preventDefault();
   
    // Show loading state
    const submitBtn = e.target.querySelector('.btn-submit');
    if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
       
        // Simulate API call
        setTimeout(() => {
            // Success
            alert('Thank you for your inquiry!\n\nOur team will contact you within 24 hours.');
           
            // Reset form
            e.target.reset();
           
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
           
            // Close modal if it's the inquiry modal
            if (e.target === quickInquiryForm) {
                closeInquiryModal();
            }
        }, 1500);
    }
}

// Contact Page Form Submission with Basic Validation
function handleContactFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const successBox = document.getElementById('contactSuccess');
    const submitBtn = form.querySelector('.btn-submit');

    // Clear previous errors
    form.querySelectorAll('.field-error').forEach(el => {
        el.textContent = '';
    });
    if (successBox) {
        successBox.textContent = '';
        successBox.classList.remove('show');
    }

    let hasError = false;

    if (!nameInput.value.trim()) {
        const errorEl = nameInput.parentElement.querySelector('.field-error');
        if (errorEl) errorEl.textContent = 'Please enter your full name.';
        hasError = true;
    }

    const emailValue = emailInput.value.trim();
    if (!emailValue) {
        const errorEl = emailInput.parentElement.querySelector('.field-error');
        if (errorEl) errorEl.textContent = 'Please enter your email address.';
        hasError = true;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            const errorEl = emailInput.parentElement.querySelector('.field-error');
            if (errorEl) errorEl.textContent = 'Please enter a valid email address.';
            hasError = true;
        }
    }

    const phoneValue = phoneInput.value.trim();
    if (!phoneValue) {
        const errorEl = phoneInput.parentElement.querySelector('.field-error');
        if (errorEl) errorEl.textContent = 'Please enter your phone number.';
        hasError = true;
    } else {
        const phonePattern = /^[0-9+\-\s()]{6,}$/;
        if (!phonePattern.test(phoneValue)) {
            const errorEl = phoneInput.parentElement.querySelector('.field-error');
            if (errorEl) errorEl.textContent = 'Please enter a valid phone number.';
            hasError = true;
        }
    }

    if (!messageInput.value.trim()) {
        const errorEl = messageInput.parentElement.querySelector('.field-error');
        if (errorEl) errorEl.textContent = 'Please describe your project or inquiry.';
        hasError = true;
    }

    if (hasError) {
        return;
    }

    if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            form.reset();

            if (submitBtn) {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }

            if (successBox) {
                successBox.textContent = 'Thank you for reaching out. Our team will contact you within 24 hours.';
                successBox.classList.add('show');
            }
        }, 1200);
    }
}

// Enhanced Enquire function for fleet section
function enquire(type) {
    const equipmentNames = {
        trucks: 'Heavy Duty Trucks',
        excavators: 'Excavators & Loaders',
        materials: 'Construction Materials'
    };
   
    const equipmentName = equipmentNames[type] || 'Equipment';
    const inquiryModal = document.getElementById('inquiryModal');
    const serviceSelect = document.getElementById('serviceSelect');
    
    if (inquiryModal && serviceSelect) {
        // Save original options
        const originalHTML = serviceSelect.innerHTML;
        
        // Create new options with the equipment pre-selected
        serviceSelect.innerHTML = `
            <option value="" disabled>Select Service Required</option>
            <option value="${equipmentName}" selected>${equipmentName}</option>
            <option value="Heavy Equipment Rental">Heavy Equipment Rental</option>
            <option value="Transportation Services">Transportation Services</option>
            <option value="Road Materials Supply">Road Materials Supply</option>
            <option value="Waste Water Transport">Waste Water Transport</option>
            <option value="Multiple Services">Multiple Services</option>
        `;
        
        // Store the original HTML to restore later
        serviceSelect.dataset.original = originalHTML;
        
        // Open the modal
        inquiryModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Focus on the first input field
        const firstInput = inquiryModal.querySelector('input');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }
}

// Add CSS for search suggestions
const style = document.createElement('style');
style.textContent = `
    .search-suggestions {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-lg);
        margin-top: 10px;
        max-height: 400px;
        overflow-y: auto;
        z-index: 1000;
        display: none;
        border: 1px solid var(--light-gray);
        animation: fadeIn 0.3s ease;
    }
   
    .search-suggestions.active {
        display: block;
    }
   
    .search-suggestion-item {
        padding: 15px 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 15px;
        transition: var(--transition);
        border-bottom: 1px solid var(--light);
    }
   
    .search-suggestion-item:last-child {
        border-bottom: none;
    }
   
    .search-suggestion-item:hover {
        background-color: var(--light);
    }
   
    .search-suggestion-item i {
        color: var(--secondary);
        font-size: 1.1rem;
        width: 20px;
        text-align: center;
    }
   
    .search-suggestion-item .suggestion-text {
        flex: 1;
        color: var(--dark);
        font-size: 1rem;
        font-weight: 500;
    }
   
    .search-suggestion-item .suggestion-category {
        font-size: 0.8rem;
        color: var(--gray);
        background-color: var(--light);
        padding: 4px 12px;
        border-radius: 12px;
        font-weight: 500;
    }
   
    .search-suggestion-item.no-results {
        color: var(--gray);
        cursor: default;
        text-align: center;
        justify-content: center;
    }
   
    .search-suggestion-item.no-results:hover {
        background-color: transparent;
    }
   
    /* Animation classes */
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
`;
document.head.appendChild(style);
// ============================================
// SEARCH FUNCTIONALITY - ADD TO END OF script.js
// ============================================

// Global equipment data for search (make sure equipmentItems is defined)
// If not, add this line at the top of script.js:
// let equipmentItems = [];

function performSearch(query) {
    if (!query.trim()) return;
    
    const searchTerm = query.toLowerCase().trim();
    
    // Find matching categories
    const matchingCategories = [
        { key: 'forklift', label: 'Forklifts' },
        { key: 'bulldozer', label: 'Bulldozers' },
        { key: 'crane', label: 'Cranes' },
        { key: 'excavator', label: 'Excavators' },
        { key: 'backhoe', label: 'Backhoe Loaders' },
        { key: 'skidsteer', label: 'Skid Steer Loaders' },
        { key: 'motor-grader', label: 'Motor Graders' },
        { key: 'telehandler', label: 'Telehandlers' },
        { key: 'compactor', label: 'Compactors' },
        { key: 'roller', label: 'Rollers' },
        { key: 'mixer', label: 'Mixers' },
        { key: 'generator', label: 'Generators' },
        { key: 'compressor', label: 'Compressors' },
        { key: 'dump-truck', label: 'Dump Trucks' }
    ].filter(filter => 
        filter.label.toLowerCase().includes(searchTerm) ||
        filter.key.toLowerCase().includes(searchTerm)
    );
    
    if (matchingCategories.length > 0) {
        // Redirect to equipment page with category filter
        const categoryKey = matchingCategories[0].key;
        window.location.href = `equipment.html?filter=${categoryKey}&search=${encodeURIComponent(searchTerm)}`;
    } else {
        // If no exact category match, do generic search
        window.location.href = `equipment.html?search=${encodeURIComponent(searchTerm)}`;
    }
}

// Update search event listeners
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                performSearch(query);
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    performSearch(query);
                }
            }
        });
    }
});