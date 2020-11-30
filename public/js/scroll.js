const scroll = () => {
    const dots             = document.querySelectorAll('.dot');
    const sections         = document.querySelectorAll('.section');
    const sectionContainer = document.querySelector('.sections');

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const link = dot.getAttribute('data-href');
        window.location.href = `http://localhost:5500/${link}`;
      });
    })
    
}

export default scroll;