  // Menu Mobile
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('nav');
        
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        
        // Filtro de Produtos
        const navSearch = document.getElementById('navSearch');
        const sizeFilter = document.getElementById('size');
        const priceFilter = document.getElementById('price');
        const categoryFilter = document.getElementById('category');
        const products = document.querySelectorAll('.product-card');
        
        function filterProducts() {
            const searchValue = navSearch.value.toLowerCase();
            const sizeValue = sizeFilter.value;
            const priceValue = priceFilter.value;
            const categoryValue = categoryFilter.value;
            
            products.forEach(product => {
                const productName = product.getAttribute('data-name').toLowerCase();
                const productSize = product.getAttribute('data-size');
                const productPrice = parseFloat(product.getAttribute('data-price'));
                const productCategory = product.getAttribute('data-category');
                
                let searchMatch = productName.includes(searchValue);
                let sizeMatch = sizeValue === 'all' || productSize === sizeValue;
                let categoryMatch = categoryValue === 'all' || productCategory === categoryValue;
                
                let priceMatch = false;
                if (priceValue === 'all') {
                    priceMatch = true;
                } else if (priceValue === '0-50') {
                    priceMatch = productPrice <= 50;
                } else if (priceValue === '50-100') {
                    priceMatch = productPrice > 50 && productPrice <= 100;
                } else if (priceValue === '100-200') {
                    priceMatch = productPrice > 100 && productPrice <= 200;
                } else if (priceValue === '200+') {
                    priceMatch = productPrice > 200;
                }
                
                if (searchMatch && sizeMatch && priceMatch && categoryMatch) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }
        
        navSearch.addEventListener('input', filterProducts);
        sizeFilter.addEventListener('change', filterProducts);
        priceFilter.addEventListener('change', filterProducts);
        categoryFilter.addEventListener('change', filterProducts);