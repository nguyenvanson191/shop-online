// Dữ liệu sản phẩm
const products = [
    {
        id: 1,
        name: 'Áo Cardigan Len Dài Tay Màu Xanh Navy',
        category: 'clothing',
        price: 890000,
        originalPrice: 1290000,
        description: 'Áo cardigan len dài tay màu xanh navy, form fit, có nút cài phía trước. Chất liệu len mềm mại, ấm áp, phù hợp mọi dịp. Có thể mặc với quần tây hoặc quần jeans.',
        image: '🧵',
        imageUrl: 'images/products/cardigan-navy.jpg'
    },
    {
        id: 2,
        name: 'Áo Cardigan Đỏ Dài Tay Có Nút',
        category: 'clothing',
        price: 850000,
        originalPrice: 1190000,
        description: 'Áo cardigan màu đỏ tươi, dài tay với nút cài. Thiết kế cable-knit cổ điển, chất liệu cotton mềm mại. Phù hợp với chân váy hoặc quần jeans, tạo phong cách thanh lịch.',
        image: '🧥',
        imageUrl: 'images/products/cardigan-red.jpg'
    },
    {
        id: 3,
        name: 'Túi Xách Tote Lacoste Màu Teal',
        category: 'accessories',
        price: 2450000,
        originalPrice: 3200000,
        description: 'Túi tote Lacoste màu teal, chất liệu Saffiano da cao cấp. Có logo cá sấu bạc nổi bật, tay cầm chắc chắn, khóa kéo chất lượng. Kích thước vừa phải, đựng được nhiều đồ.',
        image: '👜',
        imageUrl: 'images/products/lacoste-tote-teal.jpg'
    },
    {
        id: 4,
        name: 'Túi Xách Tote Lacoste Màu Hồng',
        category: 'accessories',
        price: 2350000,
        originalPrice: 3100000,
        description: 'Túi tote Lacoste màu hồng rực rỡ, thiết kế hiện đại. Chất liệu PVC/Canvas phủ, bền màu, dễ vệ sinh. Logo cá sấu màu hồng tinh tế, phù hợp mọi trang phục.',
        image: '👛',
        imageUrl: 'images/products/lacoste-tote-pink.jpg'
    },
    {
        id: 5,
        name: 'Túi Xách Tote Lacoste Màu Navy',
        category: 'accessories',
        price: 2550000,
        originalPrice: 3300000,
        description: 'Túi tote Lacoste màu navy sang trọng, chất liệu da giả cao cấp. Logo cá sấu bạc, tay cầm rộng, đáy bằng giúp túi đứng vững. Màu sắc dễ phối đồ, không bao giờ lỗi mốt.',
        image: '🎒',
        imageUrl: 'images/products/lacoste-tote-navy.jpg'
    },
    {
        id: 6,
        name: 'Túi Xách Quilted Màu Vàng Beige',
        category: 'accessories',
        price: 3200000,
        originalPrice: 4500000,
        description: 'Túi xách quilted màu vàng beige với dây xích vàng. Thiết kế cổ điển, chất liệu da cao cấp, đường chỉ chần tinh tế. Dây đeo có thể tháo rời, dùng tay xách hoặc đeo chéo.',
        image: '💼',
        imageUrl: 'images/products/quilted-bag-beige.jpg'
    },
    {
        id: 7,
        name: 'Quần Tối Màu Cạp Cao',
        category: 'clothing',
        price: 650000,
        originalPrice: 950000,
        description: 'Quần tối màu (đen/nâu đậm) cạp cao, form slim fit. Chất liệu co giãn, thoải mái khi mặc. Dễ phối với áo cardigan, áo sơ mi hoặc áo thun.',
        image: '👖',
        imageUrl: 'images/products/pants-dark.jpg'
    },
    {
        id: 8,
        name: 'Áo Sơ Mi Dài Tay Tối Màu',
        category: 'clothing',
        price: 590000,
        originalPrice: 850000,
        description: 'Áo sơ mi dài tay màu tối, có nút cài phía trước. Chất liệu cotton, form fit vừa vặn. Phù hợp mặc đi làm hoặc dạo phố, dễ phối với quần tây, chân váy.',
        image: '👔',
        imageUrl: 'images/products/shirt-dark.jpg'
    },
    {
        id: 9,
        name: 'Chân Váy Xếp Ly Màu Xám',
        category: 'clothing',
        price: 450000,
        originalPrice: 650000,
        description: 'Chân váy xếp ly màu xám đậm, dài qua gối. Chất liệu vải dày dặn, xếp ly đều đẹp. Phù hợp mặc với áo cardigan hoặc áo sơ mi, tạo vẻ thanh lịch, nữ tính.',
        image: '👗',
        imageUrl: 'images/products/skirt-pleated.jpg'
    },
    {
        id: 10,
        name: 'Điện Thoại Smartphone',
        category: 'electronics',
        price: 8900000,
        originalPrice: 12900000,
        description: 'Smartphone với vỏ bọc rainbow sọc nổi bật. Hiệu năng mạnh mẽ, camera chất lượng cao, pin trâu. Đầy đủ tính năng hiện đại, hỗ trợ 5G.',
        image: '📱',
        imageUrl: 'images/products/smartphone.jpg'
    },
    {
        id: 11,
        name: 'Vòng Tay Chuỗi Hạt Trắng',
        category: 'accessories',
        price: 250000,
        originalPrice: 350000,
        description: 'Vòng tay chuỗi hạt màu trắng, thiết kế tối giản. Chất liệu cao cấp, không gây dị ứng. Dễ đeo, phù hợp mọi outfit, tạo điểm nhấn thanh lịch cho cổ tay.',
        image: '📿',
        imageUrl: 'images/products/bracelet-white.jpg'
    },
    {
        id: 12,
        name: 'Máy Quay Phim Vintage HD',
        category: 'electronics',
        price: 5500000,
        originalPrice: 7500000,
        description: 'Máy quay phim vintage màu đen vàng, hỗ trợ HD/DV. Thiết kế retro, chất lượng hình ảnh sắc nét. Phù hợp cho người yêu thích phong cách cổ điển và du lịch.',
        image: '📹',
        imageUrl: 'images/products/camcorder-vintage.jpg'
    }
];

// Lưu giỏ hàng vào localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Lấy giỏ hàng từ localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartCount();
}

// Giỏ hàng
let cart = [];

// Khởi tạo
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        renderProducts();
        setupFilters();
        setupSearch();
    } else if (window.location.pathname.includes('product.html')) {
        renderProductDetail();
    } else if (window.location.pathname.includes('cart.html')) {
        renderCart();
    } else if (window.location.pathname.includes('checkout.html')) {
        renderCheckout();
    }
});

// Hiển thị sản phẩm
function renderProducts(filteredProducts = products) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 3rem;">Không tìm thấy sản phẩm nào.</p>';
        return;
    }

    productsGrid.innerHTML = filteredProducts.map(product => {
        // Tìm ảnh với nhiều định dạng có thể
        let imageHtml = product.image;
        if (product.imageUrl) {
            const baseUrl = product.imageUrl.replace(/\.(jpg|png|webp)$/i, '');
            imageHtml = `
                <img src="${baseUrl}.jpg" alt="${product.name}" 
                     onerror="this.onerror=null; this.src='${baseUrl}.jfif'; this.onerror=function(){this.onerror=null; this.src='${baseUrl}.png'; this.onerror=function(){this.style.display='none'; this.parentElement.innerHTML='${product.image}';};};">
            `;
        }
        return `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <div class="product-image">
                ${imageHtml}
            </div>
            ${product.originalPrice ? `<div class="product-discount">-${Math.round((1 - product.price/product.originalPrice) * 100)}%</div>` : ''}
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price-wrapper">
                        <div class="product-price">${formatPrice(product.price)}</div>
                        ${product.originalPrice ? `<div class="product-original-price">${formatPrice(product.originalPrice)}</div>` : ''}
                    </div>
                    <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Thêm
                    </button>
                </div>
            </div>
        </div>
    `;
    }).join('');
}

// Lọc sản phẩm theo danh mục
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            const filtered = category === 'all' 
                ? products 
                : products.filter(p => p.category === category);
            renderProducts(filtered);
        });
    });
}

// Tìm kiếm
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = products.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm)
        );
        renderProducts(filtered);
    });
}

// Thêm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    showNotification('Đã thêm sản phẩm vào giỏ hàng!');
}

// Cập nhật số lượng giỏ hàng
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Xem chi tiết sản phẩm
function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// Hiển thị chi tiết sản phẩm
function renderProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        document.body.innerHTML = '<h1>Sản phẩm không tồn tại</h1>';
        return;
    }

    const detailImage = document.querySelector('.detail-image');
    if (product.imageUrl) {
        const baseUrl = product.imageUrl.replace(/\.(jpg|png|webp)$/i, '');
        detailImage.innerHTML = `
            <img src="${baseUrl}.jpg" alt="${product.name}" 
                 onerror="this.onerror=null; this.src='${baseUrl}.jfif'; this.onerror=function(){this.onerror=null; this.src='${baseUrl}.png'; this.onerror=function(){this.parentElement.textContent='${product.image}';};};">
        `;
    } else {
        detailImage.textContent = product.image;
    }
    document.querySelector('.detail-info h1').textContent = product.name;
    document.querySelector('.detail-category').textContent = getCategoryName(product.category);
    
    const priceElement = document.querySelector('.detail-price');
    if (product.originalPrice) {
        priceElement.innerHTML = `
            <span class="current-price">${formatPrice(product.price)}</span>
            <span class="original-price">${formatPrice(product.originalPrice)}</span>
            <span class="discount-badge">-${Math.round((1 - product.price/product.originalPrice) * 100)}%</span>
        `;
    } else {
        priceElement.textContent = formatPrice(product.price);
    }
    
    document.querySelector('.detail-description').textContent = product.description;

    // Xử lý số lượng
    let quantity = 1;
    const quantityInput = document.querySelector('.quantity-input');
    const decreaseBtn = document.querySelector('.quantity-btn.decrease');
    const increaseBtn = document.querySelector('.quantity-btn.increase');

    quantityInput.value = quantity;

    decreaseBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
        }
    });

    increaseBtn.addEventListener('click', () => {
        quantity++;
        quantityInput.value = quantity;
    });

    // Thêm vào giỏ hàng
    const addToCartBtn = document.querySelector('.btn-primary');
    addToCartBtn.addEventListener('click', () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(productId);
        }
        showNotification(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
    });
}

// Hiển thị giỏ hàng
function renderCart() {
    const cartItems = document.querySelector('.cart-items');
    const cartSummary = document.querySelector('.cart-summary');

    if (!cartItems || !cartSummary) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h2>Giỏ hàng trống</h2>
                <p>Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm</p>
                <a href="index.html" class="btn btn-primary" style="margin-top: 1rem;">Tiếp tục mua sắm</a>
            </div>
        `;
        cartSummary.innerHTML = '';
        return;
    }

    // Hiển thị danh sách sản phẩm
    cartItems.innerHTML = cart.map((item, index) => {
        let imageHtml = item.image;
        if (item.imageUrl) {
            const baseUrl = item.imageUrl.replace(/\.(jpg|png|webp)$/i, '');
            imageHtml = `
                <img src="${baseUrl}.jpg" alt="${item.name}" 
                     onerror="this.onerror=null; this.src='${baseUrl}.jfif'; this.onerror=function(){this.onerror=null; this.src='${baseUrl}.png'; this.onerror=function(){this.style.display='none'; this.parentElement.innerHTML='${item.image}';};};">
            `;
        }
        return `
        <div class="cart-item">
            <div class="cart-item-image">
                ${imageHtml}
            </div>
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="quantity-selector" style="margin-top: 1rem;">
                    <button class="quantity-btn decrease" onclick="updateQuantity(${index}, -1)">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantityInput(${index}, this.value)">
                    <button class="quantity-btn increase" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </div>
            <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
            <button class="remove-item" onclick="removeFromCart(${index})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        `;
    }).join('');

    // Tính tổng tiền
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 500000 ? 0 : 50000;
    const total = subtotal + shipping;

    cartSummary.innerHTML = `
        <h2 style="margin-bottom: 1.5rem;">Tóm tắt đơn hàng</h2>
        <div class="summary-row">
            <span>Tạm tính:</span>
            <span>${formatPrice(subtotal)}</span>
        </div>
        <div class="summary-row">
            <span>Phí vận chuyển:</span>
            <span>${shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}</span>
        </div>
        <div class="summary-row total">
            <span>Tổng cộng:</span>
            <span>${formatPrice(total)}</span>
        </div>
        <a href="checkout.html" class="btn btn-primary checkout-btn" style="text-decoration: none; display: block; text-align: center;">
            <i class="fas fa-credit-card"></i> Thanh toán
        </a>
    `;
}

// Cập nhật số lượng
function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }
    saveCart();
    updateCartCount();
    renderCart();
}

// Cập nhật số lượng từ input
function updateQuantityInput(index, value) {
    const quantity = parseInt(value) || 1;
    cart[index].quantity = Math.max(1, quantity);
    saveCart();
    updateCartCount();
    renderCart();
}

// Xóa khỏi giỏ hàng
function removeFromCart(index) {
    if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
        cart.splice(index, 1);
        saveCart();
        updateCartCount();
        renderCart();
    }
}

// Thanh toán - chuyển đến trang checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng trống!');
        return;
    }
    window.location.href = 'checkout.html';
}

// Định dạng giá
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Tên danh mục
function getCategoryName(category) {
    const names = {
        'electronics': 'Điện tử',
        'clothing': 'Thời trang',
        'accessories': 'Phụ kiện',
        'books': 'Sách',
        'home': 'Đồ gia dụng'
    };
    return names[category] || category;
}

// Thông báo
function showNotification(message, type = 'success') {
    // Tạo thông báo đơn giản
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? 'var(--danger-color)' : 'var(--success-color)'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Hiển thị trang thanh toán
function renderCheckout() {
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }

    // Hiển thị sản phẩm
    const checkoutItems = document.getElementById('checkoutItems');
    if (checkoutItems) {
        checkoutItems.innerHTML = cart.map(item => {
            let imageHtml = item.image;
            if (item.imageUrl) {
                const baseUrl = item.imageUrl.replace(/\.(jpg|png|webp)$/i, '');
                imageHtml = `
                    <img src="${baseUrl}.jpg" alt="${item.name}" 
                         onerror="this.onerror=null; this.src='${baseUrl}.jfif'; this.onerror=function(){this.onerror=null; this.src='${baseUrl}.png'; this.onerror=function(){this.style.display='none'; this.parentElement.innerHTML='${item.image}';};};">
                `;
            }
            return `
            <div class="checkout-item">
                <div class="checkout-item-image">
                    ${imageHtml}
                </div>
                <div class="checkout-item-info">
                    <h4>${item.name}</h4>
                    <p>Số lượng: ${item.quantity}</p>
                </div>
                <div class="checkout-item-price">${formatPrice(item.price * item.quantity)}</div>
            </div>
            `;
        }).join('');
    }

    // Tính tổng tiền
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 500000 ? 0 : 50000;
    const discount = subtotal > 2000000 ? Math.floor(subtotal * 0.05) : 0;
    const total = subtotal + shipping - discount;

    const orderSummary = document.getElementById('orderSummary');
    if (orderSummary) {
        orderSummary.innerHTML = `
            <div class="summary-row">
                <span>Tạm tính:</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            ${discount > 0 ? `
            <div class="summary-row discount">
                <span>Giảm giá:</span>
                <span>-${formatPrice(discount)}</span>
            </div>
            ` : ''}
            <div class="summary-row">
                <span>Phí vận chuyển:</span>
                <span class="${shipping === 0 ? 'free-shipping' : ''}">
                    ${shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}
                </span>
            </div>
            <div class="summary-divider"></div>
            <div class="summary-row total">
                <span>Tổng thanh toán:</span>
                <span class="total-amount">${formatPrice(total)}</span>
            </div>
        `;
    }

    // Xử lý chọn tỉnh/thành phố
    const provinceSelect = document.getElementById('province');
    if (provinceSelect) {
        provinceSelect.addEventListener('change', (e) => {
            const districtSelect = document.getElementById('district');
            const wardSelect = document.getElementById('ward');
            if (e.target.value) {
                const districts = {
                    'hcm': ['Quận 1', 'Quận 2', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 7', 'Quận 10'],
                    'hn': ['Quận Hoàn Kiếm', 'Quận Ba Đình', 'Quận Đống Đa', 'Quận Hai Bà Trưng', 'Quận Cầu Giấy'],
                    'dn': ['Quận Hải Châu', 'Quận Thanh Khê', 'Quận Sơn Trà', 'Quận Ngũ Hành Sơn'],
                    'hp': ['Quận Hồng Bàng', 'Quận Ngô Quyền', 'Quận Lê Chân', 'Quận Hải An'],
                    'ct': ['Quận Ninh Kiều', 'Quận Bình Thủy', 'Quận Cái Răng', 'Quận Ô Môn']
                };
                const wards = ['Phường 1', 'Phường 2', 'Phường 3', 'Phường 4', 'Phường 5'];
                
                districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>' + 
                    districts[e.target.value].map(d => `<option value="${d}">${d}</option>`).join('');
                wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>' + 
                    wards.map(w => `<option value="${w}">${w}</option>`).join('');
            } else {
                districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';
                wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>';
            }
        });
    }
}

// Đặt hàng
function placeOrder() {
    const fullName = document.getElementById('fullName')?.value;
    const phone = document.getElementById('phone')?.value;
    const province = document.getElementById('province')?.value;
    const district = document.getElementById('district')?.value;
    const ward = document.getElementById('ward')?.value;
    const street = document.getElementById('street')?.value;
    const payment = document.querySelector('input[name="payment"]:checked')?.value;

    if (!fullName || !phone || !province || !district || !ward || !street) {
        showNotification('Vui lòng điền đầy đủ thông tin giao hàng!', 'error');
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 500000 ? 0 : 50000;
    const discount = subtotal > 2000000 ? Math.floor(subtotal * 0.05) : 0;
    const total = subtotal + shipping - discount;

    const orderId = 'ORD' + Date.now();
    const orderData = {
        id: orderId,
        items: [...cart], // Copy mảng
        customer: { fullName, phone, province, district, ward, street },
        payment,
        totals: { subtotal, shipping, discount, total },
        status: 'pending', // Chờ xử lý
        date: new Date().toISOString(),
        notes: document.getElementById('notes')?.value || ''
    };

    // Hiển thị thông báo đang xử lý
    const checkoutContainer = document.querySelector('.checkout-container');
    const originalContent = checkoutContainer.innerHTML;
    checkoutContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem;">
            <i class="fas fa-spinner fa-spin" style="font-size: 3rem; color: var(--primary-color);"></i>
            <h3 style="margin-top: 1rem;">Đang xử lý đơn hàng...</h3>
            <p>Vui lòng đợi trong giây lát, chúng tôi đang gửi đơn hàng của bạn.</p>
        </div>
    `;

    // Chuẩn bị nội dung email
    const orderDetails = cart.map(item => 
        `- ${item.name} (x${item.quantity}): ${formatPrice(item.price * item.quantity)}`
    ).join('\n');

    const emailBody = `
MÃ ĐƠN HÀNG: #${orderId}
--------------------------------
KHÁCH HÀNG:
Họ tên: ${fullName}
SĐT: ${phone}
Địa chỉ: ${street}, ${ward}, ${district}, ${province}
Ghi chú: ${document.getElementById('notes')?.value || 'Không có'}

--------------------------------
ĐƠN HÀNG:
${orderDetails}

--------------------------------
TỔNG THANH TOÁN:
Tạm tính: ${formatPrice(subtotal)}
Phí vận chuyển: ${formatPrice(shipping)}
Giảm giá: -${formatPrice(discount)}
TỔNG CỘNG: ${formatPrice(total)}
Phương thức thanh toán: ${payment}
    `;

    // Gửi email qua FormSubmit
    fetch('https://formsubmit.co/ajax/datcoi2002hy@gmail.com', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: `Đơn hàng mới #${orderId} - ${fullName}`,
            _template: 'table', // Sử dụng template bảng đẹp mắt
            Mã_đơn: orderId,
            Khách_hàng: fullName,
            SĐT: phone,
            Địa_chỉ: `${street}, ${ward}, ${district}, ${province}`,
            Sản_phẩm: orderDetails,
            Tổng_tiền: formatPrice(total),
            Chi_tiết: emailBody // Gửi kèm chi tiết dạng text
        })
    })
    .then(response => response.json())
    .then(data => {
        // Lưu đơn hàng vào localStorage (cho Admin test)
        const allOrders = JSON.parse(localStorage.getItem('allOrders') || '[]');
        allOrders.push(orderData);
        localStorage.setItem('allOrders', JSON.stringify(allOrders));
        localStorage.setItem('lastOrder', JSON.stringify(orderData));

        // Hiển thị thông báo thành công
        const message = `
            <div style="padding: 2rem; text-align: center;">
                <i class="fas fa-check-circle" style="font-size: 4rem; color: var(--success-color); margin-bottom: 1rem;"></i>
                <h2>Đặt hàng thành công!</h2>
                <p style="margin: 1rem 0;">Mã đơn hàng: <strong>#${orderId}</strong></p>
                <p>Tổng tiền: <strong>${formatPrice(total)}</strong></p>
                <p style="margin-top: 1rem; color: var(--gray-color);">Thông báo đơn hàng đã được gửi đến hệ thống.</p>
                <p>Chúng tôi sẽ liên hệ với bạn qua SĐT <strong>${phone}</strong> trong thời gian sớm nhất.</p>
                <a href="index.html" class="btn btn-primary" style="margin-top: 2rem; text-decoration: none; display: inline-block;">Tiếp tục mua sắm</a>
            </div>
        `;
        document.querySelector('.checkout-section').innerHTML = `<div class="container">${message}</div>`;

        // Xóa giỏ hàng
        cart = [];
        saveCart();
        updateCartCount();
    })
    .catch(error => {
        console.error('Lỗi gửi email:', error);
        // Nếu lỗi gửi email, vẫn báo thành công cho khách nhưng lưu log (hoặc thông báo lỗi tùy chọn)
        // Ở đây ta fallback về hiển thị thành công nhưng cảnh báo
        alert('Đã ghi nhận đơn hàng nhưng có lỗi khi gửi thông báo. Vui lòng liên hệ hotline để xác nhận.');
        
        // Vẫn lưu vào localStorage để không mất đơn
        const allOrders = JSON.parse(localStorage.getItem('allOrders') || '[]');
        allOrders.push(orderData);
        localStorage.setItem('allOrders', JSON.stringify(allOrders));
        
        // Quay lại trang cũ
        checkoutContainer.innerHTML = originalContent;
    });
}

// Thêm CSS cho animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

