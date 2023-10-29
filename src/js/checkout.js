function redirectToPayment(productId) {
    // Construa a URL da página de pagamento com o ID do produto
    const paymentURL = `https://pay.kiwify.com.br/0sVbmaj?produto=${productId}`;
    
    // Redirecione para a página de pagamento
    window.location.href = paymentURL;
}