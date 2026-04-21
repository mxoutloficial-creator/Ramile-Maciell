window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        // 1. Esconde o loader
        if (loader) loader.classList.add("loader-hidden");
        document.body.classList.add("site-ready");

        // 2. INICIA O SISTEMA PARA TODOS (Derrubamos o muro do mobile)
        initZionAnimations();

        // 3. DESPERTA O HERO IMEDIATAMENTE
        setTimeout(() => {
            const heroElements = document.querySelectorAll('.animar-hero-zion');
            heroElements.forEach(el => el.classList.add('zt-active'));
        }, 300);

    }, 2000);
});

function initZionAnimations() {
    // Seleciona as classes que você já tem no HTML
    const targets = document.querySelectorAll('.animar-hero-zion, .revelar-card, .case-card-glass, .card-agradecimento, .zt-ani');

    const observerOptions = {
        root: null,
        /* Aumentamos para 300px no Desktop. 
           Isso faz o card começar a carregar MUITO ANTES de o usuário chegar nele. */
        rootMargin: '0px 0px -50px 0px', 
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('zt-active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    targets.forEach(target => observer.observe(target));
}