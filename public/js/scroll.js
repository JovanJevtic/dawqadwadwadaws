const scroll = () => {
    const dots = document.querySelectorAll('.dot');
    const sections = document.querySelectorAll('.section');
    const sectionContainer = document.querySelector('.sections');

    dots.forEach(dot => {
      const num = dot.getAttribute('data-num');
      const url = window.location.href;
      const dotLink = dot.getAttribute('data-href');

      if (url == `http://localhost:5000/${dotLink}` || url == 'http://localhost:5000/' && num == 1) {
        dot.classList.add('current-dot');
      } else {
        dot.classList.remove('current-dot');
      }

      dot.addEventListener('click', () => {
        const link = dot.getAttribute('data-href');
        window.location.href = `http://localhost:5000/${link}`;
      });
    })
    
}

export default scroll;