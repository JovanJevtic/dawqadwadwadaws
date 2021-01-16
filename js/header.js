const header = () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.mobile-nav-wrapp');
    const links = document.querySelectorAll('.mobile-nav-link');

    const toggleClasses = () => {
        nav.classList.toggle('mobile-nav-open');
        hamburger.classList.toggle('mobile-nav-active');
    }

    hamburger.addEventListener('click', () => {
        toggleClasses();
    });

    links.forEach(link => { 
        link.addEventListener('click', () => {
            toggleClasses();
        });
    });

}

export default header;