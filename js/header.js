const header = () => {

    //* Hamburger menu
    const hamburger = document.querySelector('.hamburger')
    const nav = document.querySelector('.header-expanded')
    const links = document.querySelectorAll('.mobile-nav-link a')
    const header = document.querySelector('header')

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('expanded')
        hamburger.classList.toggle('hamburger-active')
        header.classList.remove('hide')
    })

    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.toggle('expanded')
            hamburger.classList.toggle('hamburger-active')
        })
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
}

export default header

//* Hide header on scroll down and show on scroll up
export const headerScrolling = () => {
    const doc = document.documentElement
    const w = window

    let prevScroll = w.scrollY || doc.scrollTop
    let curScroll
    let direction = 0
    let prevDirection = 0

    const header = document.querySelector('header')
    const nav = document.querySelector('.header-expanded')

    const checkScroll = () => {
    
        curScroll = w.scrollY || doc.scrollTop
        if (curScroll > prevScroll) { 
          //scrolled up
          direction = 2
        }
        else if (curScroll < prevScroll) { 
          //scrolled down
          direction = 1
        }
    
        if (direction !== prevDirection  && nav.classList.value != 'header-expanded expanded') {
          toggleHeader(direction, curScroll)
        }
        
        prevScroll = curScroll;
    }

    var toggleHeader = (direction, curScroll) => {
        if (direction === 2 && curScroll > 80) { 
          
          header.classList.add('hide');
          prevDirection = direction
        }
        else if (direction === 1) {
          header.classList.remove('hide')
          prevDirection = direction;
        }
    }

    window.addEventListener('scroll', checkScroll)
}