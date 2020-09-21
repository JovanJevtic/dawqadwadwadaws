export default scroll = () => {

    window.addEventListener('scroll', (e) => {
        const target = document.querySelectorAll('.parallax')
        const svg = document.querySelector('#scroll-svg')

        for (let i = 0; i < target.length; i++) {
            let position = window.pageYOffset * target[i].dataset.scroll

            target[i].style.transform = `translate3d(0px, ${position}px, 0px)`
        }
    })
}