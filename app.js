document.addEventListener("DOMContentLoaded", () => {
    // Adiciona funcionalidade simples aos botões "Ver Mais"
    const buttons = document.querySelectorAll('.btn-ver-mais');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            const title = card.querySelector('.card-title').innerText;
            
            // Simula uma interação
            button.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Carregando...';
            button.classList.add('disabled');
            
            setTimeout(() => {
                alert(`Você clicou para ver mais sobre o projeto: ${title}\n(Em breve mais detalhes da funcionalidade!)`);
                
                // Restaura o botão
                button.innerHTML = 'Ver Mais';
                button.classList.remove('disabled');
            }, 800);
        });
    });
});
