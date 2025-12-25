class RentalCart {
    constructor() {
        this.cart = this.loadCart();
        this.init();
    }

    init() {
        this.updateCartBadge();
        this.setupEventListeners();
    }

    // Load cart from localStorage
    loadCart() {
        try {
            const saved = localStorage.getItem('rentalCart');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error('Error loading cart:', e);
            return [];
        }
    }

    // Save cart to localStorage
    saveCart() {
        try {
            localStorage.setItem('rentalCart', JSON.stringify(this.cart));
            this.updateCartBadge();
        } catch (e) {
            console.error('Error saving cart:', e);
        }
    }

    // Add item to cart
    addItem(item) {
        const { id, name, category, price, image, brand, specs } = item;
        const { quantity, startDate, endDate } = item.rentalDetails;

        // Validate dates
        if (!startDate || !endDate) {
            alert('Please select both start and end dates');
            return false;
        }

        if (new Date(endDate) < new Date(startDate)) {
            alert('End date must be after start date');
            return false;
        }

        if (quantity < 1) {
            alert('Quantity must be at least 1');
            return false;
        }

        // Check if item already exists with same dates
        const existingIndex = this.cart.findIndex(
            cartItem => cartItem.id === id && 
            cartItem.startDate === startDate && 
            cartItem.endDate === endDate
        );

        if (existingIndex > -1) {
            // Update quantity if same item with same dates
            this.cart[existingIndex].quantity += quantity;
        } else {
            // Add new item
            const rentalDays = this.calculateDays(startDate, endDate);
            const cartItem = {
                id,
                name,
                category,
                brand: brand || '',
                specs: specs || {},
                image: image || '',
                price: price || 0,
                quantity,
                startDate,
                endDate,
                rentalDays,
                subtotal: (price || 0) * rentalDays * quantity
            };
            this.cart.push(cartItem);
        }

        this.saveCart();
        this.updateCartBadge();
        this.showSuccessMessage();
        return true;
    }

    // Remove item from cart
    removeItem(index) {
        if (index >= 0 && index < this.cart.length) {
            this.cart.splice(index, 1);
            this.saveCart();
            this.updateCartBadge();
            this.renderCart();
            return true;
        }
        return false;
    }

    // Update item quantity
    updateQuantity(index, newQuantity) {
        if (index >= 0 && index < this.cart.length && newQuantity > 0) {
            this.cart[index].quantity = newQuantity;
            this.cart[index].rentalDays = this.calculateDays(
                this.cart[index].startDate,
                this.cart[index].endDate
            );
            this.cart[index].subtotal = 
                this.cart[index].price * 
                this.cart[index].rentalDays * 
                this.cart[index].quantity;
            this.saveCart();
            this.updateCartBadge();
            return true;
        }
        return false;
    }

    // Update item dates
    updateDates(index, startDate, endDate) {
        if (index >= 0 && index < this.cart.length) {
            if (new Date(endDate) < new Date(startDate)) {
                alert('End date must be after start date');
                return false;
            }
            this.cart[index].startDate = startDate;
            this.cart[index].endDate = endDate;
            this.cart[index].rentalDays = this.calculateDays(startDate, endDate);
            this.cart[index].subtotal = 
                this.cart[index].price * 
                this.cart[index].rentalDays * 
                this.cart[index].quantity;
            this.saveCart();
            this.updateCartBadge();
            return true;
        }
        return false;
    }

    // Calculate rental days
    calculateDays(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays + 1; // Include both start and end days
    }

    // Get cart total
    getTotal() {
        return this.cart.reduce((sum, item) => sum + item.subtotal, 0);
    }

    // Get cart item count
    getItemCount() {
        return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    // Update cart badge
    updateCartBadge() {
        const badge = document.getElementById('cartBadge');
        const count = this.getItemCount();
        if (badge) {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }
    }

    // Show success message
    showSuccessMessage() {
        // Remove existing message if any
        const existingMessage = document.querySelector('.cart-success-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const message = document.createElement('div');
        message.className = 'cart-success-message';
        message.innerHTML = '<i class="fas fa-check-circle"></i> Item added to cart successfully!';
        document.body.appendChild(message);
        
        // Show message
        setTimeout(() => {
            message.classList.add('show');
        }, 10);
        
        // Hide and remove message after 2 seconds
        setTimeout(() => {
            message.classList.remove('show');
            setTimeout(() => {
                if (message.parentNode) {
                    message.remove();
                }
            }, 300);
        }, 2000);
    }

    // Setup event listeners
    setupEventListeners() {
        const cartIcon = document.getElementById('cartIcon');
        if (cartIcon) {
            cartIcon.addEventListener('click', () => this.openCart());
        }

        const cartModal = document.getElementById('cartModal');
        if (cartModal) {
            const closeBtn = document.getElementById('cartClose');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.closeCart());
            }
            cartModal.addEventListener('click', (e) => {
                if (e.target === cartModal) {
                    this.closeCart();
                }
            });
        }
    }

    // Open cart modal
    openCart() {
        const modal = document.getElementById('cartModal');
        if (modal) {
            this.renderCart();
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    // Close cart modal
    closeCart() {
        const modal = document.getElementById('cartModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Render cart
    renderCart() {
        const cartContent = document.getElementById('cartContent');
        const cartTotal = document.getElementById('cartTotal');
        
        if (!cartContent) return;

        if (this.cart.length === 0) {
            cartContent.innerHTML = `
                <div class="cart-empty">
                    <i class="fas fa-shopping-cart"></i>
                    <h3>Your cart is empty</h3>
                    <p>Start adding items to your rental cart</p>
                    <button class="btn-primary" onclick="rentalCart.closeCart()">
                        <i class="fas fa-arrow-left"></i> Continue Browsing
                    </button>
                </div>
            `;
            if (cartTotal) cartTotal.textContent = 'AED 0.00';
            return;
        }

        let html = '<div class="cart-items">';
        this.cart.forEach((item, index) => {
            html += `
                <div class="cart-item" data-index="${index}">
                    <div class="cart-item-image">
                        <img src="${item.image || 'https://via.placeholder.com/150'}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p class="cart-item-category">${this.getCategoryLabel(item.category)}</p>
                        ${item.brand ? `<p class="cart-item-brand"><strong>Brand:</strong> ${item.brand}</p>` : ''}
                        <div class="cart-item-price">AED ${item.price.toFixed(2)} <span>/day</span></div>
                    </div>
                    <div class="cart-item-controls">
                        <div class="quantity-control">
                            <label>Quantity:</label>
                            <div class="quantity-input-group">
                                <button class="qty-btn" onclick="rentalCart.decreaseQuantity(${index})">-</button>
                                <input type="number" value="${item.quantity}" min="1" 
                                    onchange="rentalCart.updateQuantityInput(${index}, this.value)" 
                                    class="qty-input">
                                <button class="qty-btn" onclick="rentalCart.increaseQuantity(${index})">+</button>
                            </div>
                        </div>
                        <div class="date-control">
                            <label>Start Date:</label>
                            <input type="date" value="${item.startDate}" 
                                onchange="rentalCart.updateStartDate(${index}, this.value)"
                                class="date-input" min="${new Date().toISOString().split('T')[0]}">
                        </div>
                        <div class="date-control">
                            <label>End Date:</label>
                            <input type="date" value="${item.endDate}" 
                                onchange="rentalCart.updateEndDate(${index}, this.value)"
                                class="date-input" min="${item.startDate}">
                        </div>
                        <div class="cart-item-info">
                            <span><strong>Days:</strong> ${item.rentalDays}</span>
                            <span class="cart-item-subtotal"><strong>Subtotal:</strong> AED ${item.subtotal.toFixed(2)}</span>
                        </div>
                        <button class="btn-remove" onclick="rentalCart.removeItem(${index})">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                    </div>
                </div>
            `;
        });
        html += '</div>';

        cartContent.innerHTML = html;
        
        const total = this.getTotal();
        if (cartTotal) {
            cartTotal.textContent = `AED ${total.toFixed(2)}`;
        }
    }

    // Quantity control methods
    increaseQuantity(index) {
        this.updateQuantity(index, this.cart[index].quantity + 1);
        this.renderCart();
    }

    decreaseQuantity(index) {
        if (this.cart[index].quantity > 1) {
            this.updateQuantity(index, this.cart[index].quantity - 1);
            this.renderCart();
        }
    }

    updateQuantityInput(index, value) {
        const qty = parseInt(value) || 1;
        this.updateQuantity(index, qty);
        this.renderCart();
    }

    // Date control methods
    updateStartDate(index, startDate) {
        this.updateDates(index, startDate, this.cart[index].endDate);
        this.renderCart();
    }

    updateEndDate(index, endDate) {
        this.updateDates(index, this.cart[index].startDate, endDate);
        this.renderCart();
    }

    // Get category label
    getCategoryLabel(category) {
        const labels = {
            'forklift': 'Forklifts',
            'bulldozer': 'Bulldozers',
            'crane': 'Cranes',
            'excavator': 'Excavators',
            'backhoe': 'Backhoe Loaders',
            'skidsteer': 'Skid Steer Loaders',
            'motor-grader': 'Motor Graders',
            'telehandler': 'Telehandlers',
            'compactor': 'Compactors',
            'roller': 'Rollers',
            'mixer': 'Mixers',
            'generator': 'Generators',
            'compressor': 'Compressors',
            'dump-truck': 'Dump Trucks',
            'all': 'General Equipment'
        };
        return labels[category] || category.toUpperCase();
    }

    // Clear cart
    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartBadge();
        this.renderCart();
    }
}

// Initialize cart when DOM is ready
let rentalCart;
document.addEventListener('DOMContentLoaded', () => {
    rentalCart = new RentalCart();
});

// Global function to add item to cart (called from equipment cards)
function addToCart(itemData) {
    if (!rentalCart) {
        rentalCart = new RentalCart();
    }
    
    const success = rentalCart.addItem(itemData);
    if (success) {
        // Success message is shown by the cart class
        // Optionally open cart after a short delay
        setTimeout(() => {
            if (rentalCart) {
                rentalCart.openCart();
            }
        }, 1000);
    }
}

// Make cart functions globally accessible
window.rentalCart = rentalCart;
window.addToCart = addToCart;