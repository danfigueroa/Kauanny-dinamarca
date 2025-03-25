document.addEventListener('DOMContentLoaded', function () {
    // Menu Mobile
    const menuMobile = document.querySelector('.menu-mobile')
    const nav = document.querySelector('nav')

    menuMobile.addEventListener('click', function () {
        nav.classList.toggle('active')
    })

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav ul li a')
    navLinks.forEach((link) => {
        link.addEventListener('click', function () {
            nav.classList.remove('active')
        })
    })

    // Header com efeito de scroll
    const header = document.querySelector('header')
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
        }
    })

    // Depoimentos - Agora em layout de grade fixa
    const depoimentoCards = document.querySelectorAll('.depoimento-card')

    // Modal da Galeria
    const galeriaItems = document.querySelectorAll('.galeria-item')
    const modal = document.getElementById('galeria-modal')
    const modalImg = document.getElementById('modal-img')
    const closeModal = document.querySelector('.close-modal')

    galeriaItems.forEach((item) => {
        item.addEventListener('click', function () {
            // Em um cenário real, aqui você usaria a URL da imagem real
            // Como estamos usando placeholders, vamos apenas abrir o modal
            modal.style.display = 'block'

            // Em um cenário real:
            // const imgSrc = this.querySelector('img').src;
            // modalImg.src = imgSrc;

            // Para o placeholder, vamos usar uma cor de fundo
            modalImg.style.backgroundColor = 'var(--accent-color)'
            modalImg.style.height = '400px'
        })
    })

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none'
    })

    // Fechar modal ao clicar fora da imagem
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none'
        }
    })

    // Animação de elementos ao scroll
    const animateOnScroll = function () {
        const elements = document.querySelectorAll(
            '.servico-card, .sobre-text, .sobre-img, .depoimento-card, .galeria-item'
        )

        elements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top
            const windowHeight = window.innerHeight

            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1'
                element.style.transform = 'translateY(0)'
            }
        })
    }

    // Inicialmente, definir os elementos como invisíveis
    const elementsToAnimate = document.querySelectorAll(
        '.servico-card, .sobre-text, .sobre-img, .depoimento-card, .galeria-item'
    )
    elementsToAnimate.forEach((element) => {
        element.style.opacity = '0'
        element.style.transform = 'translateY(20px)'
        element.style.transition = 'all 0.6s ease'
    })

    // Executar a animação no carregamento e no scroll
    window.addEventListener('load', animateOnScroll)
    window.addEventListener('scroll', animateOnScroll)

    // Formulário de Contato
    const contactForm = document.getElementById('formulario-contato')

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault()

            // Aqui você adicionaria a lógica para enviar o formulário
            // Como é uma landing page simples, vamos apenas mostrar uma mensagem
            alert(
                'Mensagem enviada com sucesso! Em breve entraremos em contato.'
            )
            contactForm.reset()
        })
    }

    // Scroll suave para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const targetId = this.getAttribute('href')
            const targetElement = document.querySelector(targetId)

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste para o header fixo
                    behavior: 'smooth',
                })
            }
        })
    })
})
