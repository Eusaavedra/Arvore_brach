// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão pelo seu ID
    var button = document.getElementById('myButton');
    
    // Adiciona um ouvinte de eventos para o clique
    button.addEventListener('click', function(event) {
        // Evita que o link siga o href
        event.preventDefault();
        
        // Exibe uma mensagem de alerta
        alert('Você clicou no botão!');
    });
});
