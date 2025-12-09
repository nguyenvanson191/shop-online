// Hàm chung cho admin panel

// Lấy tất cả đơn hàng
function getAllOrders() {
    return JSON.parse(localStorage.getItem('allOrders') || '[]');
}

// Lưu tất cả đơn hàng
function saveAllOrders(orders) {
    localStorage.setItem('allOrders', JSON.stringify(orders));
}

// Lấy đơn hàng theo ID
function getOrderById(orderId) {
    const orders = getAllOrders();
    return orders.find(order => order.id === orderId);
}

// Cập nhật trạng thái đơn hàng
function updateOrderStatus(orderId, newStatus) {
    const orders = getAllOrders();
    const orderIndex = orders.findIndex(order => order.id === orderId);
    if (orderIndex !== -1) {
        orders[orderIndex].status = newStatus;
        orders[orderIndex].updatedAt = new Date().toISOString();
        saveAllOrders(orders);
        return true;
    }
    return false;
}

// Xóa đơn hàng
function deleteOrder(orderId) {
    const orders = getAllOrders();
    const filteredOrders = orders.filter(order => order.id !== orderId);
    saveAllOrders(filteredOrders);
    return orders.length !== filteredOrders.length;
}

// Lấy tất cả sản phẩm
function getAllProducts() {
    // Lấy từ script.js hoặc localStorage
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        return JSON.parse(savedProducts);
    }
    // Nếu chưa có, lấy từ products array trong script.js (cần import)
    return [];
}

// Lưu sản phẩm
function saveAllProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

// Định dạng giá
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Định dạng ngày
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN') + ' ' + 
           date.toLocaleTimeString('vi-VN', {hour: '2-digit', minute: '2-digit'});
}

// Lấy text trạng thái
function getStatusText(status) {
    const statuses = {
        'pending': 'Chờ xử lý',
        'confirmed': 'Đã xác nhận',
        'shipping': 'Đang giao',
        'delivered': 'Đã giao',
        'cancelled': 'Đã hủy'
    };
    return statuses[status] || status;
}

// Kiểm tra đăng nhập admin
function checkAdminLogin() {
    if (localStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = 'admin.html';
        return false;
    }
    return true;
}

