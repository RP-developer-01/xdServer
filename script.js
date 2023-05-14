//scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


//bee
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


//mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const menuLinks = document.querySelectorAll('.mobile-link');

menuToggle.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
});
});


//header class scroll
document.addEventListener("scroll", function() {
  var header = document.querySelector(".header");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 0) {
    header.classList.add("header-scroll"); /* добавляем класс при скроллинге */
  } else {
    header.classList.remove("header-scroll"); /* удаляем класс, если страница находится вверху */
  }
});


//copy button .copyBtn
const copyBtn = document.getElementById('copyBtn');
const ipAddress = document.getElementById('ipAddress');

copyBtn.addEventListener('click', () => {
  const tempInput = document.createElement('input');
  tempInput.value = ipAddress.innerText;
  document.body.appendChild(tempInput);
  
  tempInput.select();
  document.execCommand('copy');
  
  document.body.removeChild(tempInput);
  
  copyBtn.innerText = 'Скопировано!';
  setTimeout(() => {
    copyBtn.innerText = 'IP сервера: ' + ipAddress.innerText;
  }, 1000);
});
