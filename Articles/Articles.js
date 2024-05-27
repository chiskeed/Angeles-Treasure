const myLink = document.querySelectorAll(".back-arrow");
const favicon = document.querySelector('.favicon');
const banner = document.querySelector('.banner');
const heroHead = document.querySelector(".hero-head");
const heroText = document.querySelector('.hero-text');
const footerImg = document.querySelector('.img-logo2');
const footerText = document.querySelector('.footer-link');




for (link of myLink){
link.href = "https://chiskeed.github.io/Angeles-Treasure/";
}
favicon.href = "https://ideogram.ai/assets/image/list/response/nXE2W1tnR6CF-LTB5a7Bkw";
banner.textContent = 'Angeles Treasure';
banner.style.backgroundColor = '#D49F6B';
banner.style.color = '#1F4F86';
heroHead.textContent = 'Welcome to Angeles Treasure';
heroText.textContent = 'Empowering students to reach their full potential';
footerImg.src = 'https://ideogram.ai/assets/image/list/response/nXE2W1tnR6CF-LTB5a7Bkw';
footerText.textContent = 'Angeles Treasure';
