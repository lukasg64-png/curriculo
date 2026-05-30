// Define o ano atual no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Adiciona background na navbar ao scrollar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
    } else {
        navbar.style.background = 'rgba(30, 41, 59, 0.7)';
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    }
});

// Intersection Observer para animações fade-in
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observa elementos com classes de animação
document.querySelectorAll('.fade-in-up, .fade-in').forEach((el) => {
    observer.observe(el);
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Formulário de contato (Simulação)
const form = document.querySelector('.contato-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalText = btn.textContent;
    
    btn.textContent = 'Enviando...';
    btn.style.opacity = '0.7';
    
    // Simula uma chamada de API
    setTimeout(() => {
        btn.textContent = 'Mensagem Enviada!';
        btn.style.background = '#10b981'; // Green color for success
        btn.style.opacity = '1';
        form.reset();
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 3000);
    }, 1500);
});
