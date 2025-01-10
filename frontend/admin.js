// // script.js

// // Sample data for users, orders, categories, and products
// const users = [
//     { id: 1, name: 'John Doe', email: 'john@example.com' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
// ];

// const orders = [
//     { orderId: 101, user: 'John Doe', product: 'Laptop', status: 'Pending' },
//     { orderId: 102, user: 'Jane Smith', product: 'Phone', status: 'Approved' }
// ];

// const categories = ['Electronics', 'Furniture', 'Groceries'];

// const products = [
//     { id: 1, name: 'Laptop', price: '$1000' },
//     { id: 2, name: 'Phone', price: '$500' }
// ];

// // Show the selected tab
// function showTab(tabName) {
//     const tabs = document.querySelectorAll('.tab-content');
//     tabs.forEach(tab => tab.style.display = 'none');
//     document.getElementById(tabName).style.display = 'block';
// }

// // Load Users
// function loadUsers() {
//     const userList = document.getElementById('user-list');
//     userList.innerHTML = '';
//     users.forEach(user => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${user.id}</td>
//             <td>${user.name}</td>
//             <td>${user.email}</td>
//         `;
//         userList.appendChild(row);
//     });
// }

// // Load Orders with status buttons
// function loadOrders() {
//     const orderList = document.getElementById('order-list');
//     orderList.innerHTML = '';
//     orders.forEach(order => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${order.orderId}</td>
//             <td>${order.user}</td>
//             <td>${order.product}</td>
//             <td>
//                 <button class="${order.status === 'Approved' ? 'approved' : 'pending'}" onclick="toggleStatus(${order.orderId})">
//                     ${order.status}
//                 </button>
//             </td>
//         `;
//         orderList.appendChild(row);
//     });
// }

// // Toggle Order Status
// function toggleStatus(orderId) {
//     const order = orders.find(o => o.orderId === orderId);
//     order.status = order.status === 'Approved' ? 'Rejected' : 'Approved';
//     loadOrders();
// }

// // Load Categories
// function loadCategories() {
//     const categoryList = document.getElementById('category-list');
//     categoryList.innerHTML = '';
//     categories.forEach(category => {
//         const li = document.createElement('li');
//         li.textContent = category;
//         categoryList.appendChild(li);
//     });
// }

// // Load Products
// function loadProducts() {
//     const productList = document.getElementById('product-list');
//     productList.innerHTML = '';
//     products.forEach(product => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${product.id}</td>
//             <td>${product.name}</td>
//             <td>${product.price}</td>
//         `;
//         productList.appendChild(row);
//     });
// }

// // Initialize Dashboard
// window.onload = function() {
//     loadUsers();
//     loadOrders();
//     loadCategories();
//     loadProducts();
//     showTab('users'); // Default tab
// };
