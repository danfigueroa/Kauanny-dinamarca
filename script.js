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

    // Instagram Feed
    const instagramFeed = document.getElementById('instagram-feed')
    const instagramItems = document.querySelectorAll('.instagram-item')
    const modal = document.getElementById('galeria-modal')
    const modalImg = document.getElementById('modal-img')
    const closeModal = document.querySelector('.close-modal')

    // Função para carregar o feed do Instagram
    async function loadInstagramFeed() {
        try {
            // Em um cenário real, você usaria a API do Instagram
            // Como exemplo, vamos simular com cores diferentes para cada item
            const colors = [
                '#ffb6c1',
                '#ffd700',
                '#ff7f50',
                '#87cefa',
                '#98fb98',
                '#dda0dd',
                '#f0e68c',
                '#add8e6',
                '#ffa07a',
            ]

            instagramItems.forEach((item, index) => {
                const placeholderImg = item.querySelector('.placeholder-img')
                // Simular imagens com cores diferentes
                placeholderImg.style.backgroundColor =
                    colors[index % colors.length]

                // Adicionar evento de clique para abrir o modal
                item.addEventListener('click', function () {
                    modal.style.display = 'block'
                    modalImg.style.backgroundColor =
                        colors[index % colors.length]
                    modalImg.style.height = '400px'

                    // Em um cenário real:
                    // const imgSrc = this.querySelector('img').src;
                    // modalImg.src = imgSrc;
                })
            })
        } catch (error) {
            console.error('Erro ao carregar o feed do Instagram:', error)
        }
    }

    // Carregar o feed do Instagram quando a página carregar
    loadInstagramFeed()

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
            '.servico-card, .sobre-text, .sobre-img, .depoimento-card, .instagram-item'
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
        '.servico-card, .sobre-text, .sobre-img, .depoimento-card, .instagram-item'
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
