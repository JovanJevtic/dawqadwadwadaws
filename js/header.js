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
        const header = document.querySelector('header')
        let screenPosition = window.scrollTop

        const headerPosition = header.getBoundingClientRect().bottom

        if (headerPosition < 81) {
            header.classList.add('header-scrolled')
            console.log(screenPosition)
        } 

        // if (headerPosition > screenPosition) {
        //     header.classList.remove('header-scrolled')
        //     console.log('rimuv')
        // } 
    }

    window.addEventListener('scroll', scrolledHeader)

    //* Hide header on scroll down and show on scroll up

}

export default header
