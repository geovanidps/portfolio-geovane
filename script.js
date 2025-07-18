document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Opcional: Adicionar uma animação simples ao rolar a página
    // Exemplo: Fazer elementos aparecerem com um fade-in
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Quando 10% da seção estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Para animar apenas uma vez
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('hidden'); // Adiciona classe para esconder inicialmente
        observer.observe(section);
    });
});

// Adicione este CSS ao seu style.css para a animação de fade-in
/*
.hidden {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in {
    opacity: 1;
    transform: translateY(0);
}
*/
