import '../index.html';
import '../scss/style.scss';
import '../kak-pokupat.html'
import '../sales.html'
import "../prices.html"
import "../chasto-zadavaemye-voprosy.html"
import "../partnerskaja-programma.html"
import "../magaziny.html"
import "../blog.html"
import "../scss/media.css";
import './choices.min.js';
import '../scss/choices.min.css';
 


const defaulSelect = () => {
    const element = document.querySelectorAll('.delivery__select');
    element.forEach(el => {
        const choices = new Choices(el);
    });
};

defaulSelect();


let menuBtn = document.querySelector('.menu-btn');
let burgerMenu = document.querySelector('.burger-menu');
let burgerSign = document.querySelector('.burger-sign');

menuBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    burgerSign.classList.toggle('active');
});






