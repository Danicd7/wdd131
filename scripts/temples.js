// Set current year
const year = new Date().getFullYear();
document.querySelector("#currentyear").textContent = year;

// Set last modified date
const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Update: ${lastModified}`;


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const temple = document.querySelector('.temple-span')

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.textContent = hamburger.textContent === '✖' ? '☰' : '✖';
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 640) {
    navMenu.classList.remove('show');
    hamburger.textContent = '☰'; 
    temple.classList.toggle('hidden'); 
  }
});

