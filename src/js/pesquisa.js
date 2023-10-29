
    const products = [
        { id: 1, name: "ESP RADAR", image: "../images/Cypher.jfif" },
        { id: 2, name: "VALORANT PAINEL EXTERNO", image: "../images/cheat2.png" }
        // Adicione mais produtos conforme necessário
    ];

    function showProduct(productId, imagePath, productName) {
        window.location.href = `pagina_do_produto.html?id=${productId}&image=${imagePath}&name=${productName}`;
    }

    const searchBox = document.querySelector('.search-box');
    const productGrid = document.querySelector('.product-grid');

    searchBox.addEventListener('input', function (event) {
        const searchText = event.target.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));

        while (productGrid.firstChild) {
            productGrid.removeChild(productGrid.firstChild);
        }

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            const productLink = document.createElement('a');
            productLink.setAttribute('href', '#');
            productLink.setAttribute('onclick', `showProduct(${product.id}, '${product.image}', '${product.name}')`);
            const productImage = document.createElement('img');
            productImage.setAttribute('src', product.image);
            productImage.setAttribute('alt', product.name);
            const productNameHeading = document.createElement('h3');
            productNameHeading.textContent = product.name;

            productLink.appendChild(productImage);
            productLink.appendChild(productNameHeading);
            productCard.appendChild(productLink);
            productGrid.appendChild(productCard);
        });
    });
