// main.js
// Simulação de dados do produto
const products = [
    { id: 1, name: "ESP RADAR", image: "path_to_image1.jpg" },
    { id: 2, name: "VALORANT PAINEL EXTERNO", image: "path_to_image2.jpg" }
    // Adicione mais produtos conforme necessário
];

// Obter o parâmetro de ID do URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Encontrar o produto correto com base no ID fornecido
const product = products.find(item => item.id === parseInt(productId));

// Atualizar a página com as informações do produto
document.getElementById("product-name").innerText = product.name;
document.getElementById("product-image").setAttribute("src", product.image);
