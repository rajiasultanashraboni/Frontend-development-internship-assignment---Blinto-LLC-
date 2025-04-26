// faq section is here 

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question');
  btn.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});


// footer section 

const footerArrow = document.getElementById('footer-arrow');

  footerArrow.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

//   hamburger icon 

const menuToggle = document.getElementById('menu-toggle');
  const featureContainer = document.getElementById('feature-container');

  menuToggle.addEventListener('click', function() {
    featureContainer.classList.toggle('active');
  });