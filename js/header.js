const header = () => {

    //* Hamburger menu
    const hamburger = document.querySelector('.hamburger')
    const nav = document.querySelector('.header-expanded')
    const links = document.querySelectorAll('.mobile-nav-link a')

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('expanded')
        hamburger.classList.toggle('hamburger-active')
        console.log(hamburger.classList)
    })

    links[0].addEventListener('click', () => {
        nav.classList.toggle('expanded')
        hamburger.classList.toggle('hamburger-active')
    })

    links[1].addEventListener('click', () => {
        nav.classList.toggle('expanded')
        hamburger.classList.toggle('hamburger-active') 
    })

    links[2].addEventListener('click', () => {
        nav.classList.toggle('expanded')
        hamburger.classList.toggle('hamburger-active')
    })

    links[3].addEventListener('click', () => {
        nav.classList.toggle('expanded')
        hamburger.classList.toggle('hamburger-active')
    })

    links[4].addEventListener('click', () => {
        nav.classList.toggle('expanded')
        hamburger.classList.toggle('hamburger-active')
    })  

    //* Header change style on scroll

    const scrolledHeader = () => {
        let scroll = document.documentElement.scrollTop
        const header = document.querySelector('header')
        
        if (scroll > 30) {
            header.classList.add('header-scrolled')
        }   else {
            header.classList.remove('header-scrolled')
        }
    }

    window.addEventListener('scroll', scrolledHeader)

    //* Hide header on scroll down and show on scroll up

}

export default header
