document.getElementById('menu-icon').addEventListener('click', function() {
    var submenu = document.getElementById('submenu');
    if (submenu.style.display === 'flex') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'flex';
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const productListContainer = document.getElementById('product-list-container');

    menuIcon.addEventListener('click', function () {
        productListContainer.classList.toggle('show');
    });
});