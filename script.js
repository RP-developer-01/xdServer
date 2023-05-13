// Smooth scrolling to section
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  let windowHeight = window.innerHeight;
const adjust = () => {
  windowHeight = window.innerHeight;
  if (windowHeight < 800) {
    document.documentElement.style.setProperty("--bee-scale", 0.2);
    document.documentElement.style.setProperty("--cube-scale", 0.2);
  } else {
    document.documentElement.style.setProperty("--bee-scale", 0.5);
    document.documentElement.style.setProperty("--cube-scale", 0.5);
  }
};
window.addEventListener("resize", adjust);
adjust();


// Toggle sidebar menu when the menu button is clicked
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});



/*header*/

document.addEventListener("scroll", function() {
  var header = document.querySelector(".header");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 0) {
    header.classList.add("header-scroll"); /* добавляем класс при скроллинге */
  } else {
    header.classList.remove("header-scroll"); /* удаляем класс, если страница находится вверху */
  }
});