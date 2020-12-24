//for packaging,  turn imports on
import './normalize.css';
import './style.css';
import loadHeader from './module/header';
import loadFooter from './module/footer';
import loadHome from './module/home';
import loadBeers from './module/beers';
import loadContact from './module/contact';

console.log('package test')

init();

function addNav() {
    const homeBtn = document.querySelectorAll('.home');
    const beersBtn = document.querySelectorAll('.beers');
    const contactBtn = document.querySelectorAll('.contact');
  
    //homeBtn.addEventListener('click', loadHome);
    homeBtn.forEach(b => b.addEventListener('click', loadHome));
    //beersBtn.addEventListener('click', loadBeers);
    beersBtn.forEach(b => b.addEventListener('click', loadBeers));
    //contactBtn.addEventListener('click', loadContact);
    contactBtn.forEach(b => b.addEventListener('click', loadContact));
}

function init() {
    loadHeader();
    loadHome();
    loadFooter();

    addNav();
}



function addNav2() {
    const homeBtn = document.querySelectorAll('.home');
    const beersBtn = document.querySelectorAll('.beers');
    const contactBtn = document.querySelectorAll('.contact');
  
    //homeBtn.addEventListener('click', loadHome);
    homeBtn.forEach(b => b.addEventListener('click', init2(loadHome())));
    //beersBtn.addEventListener('click', loadBeers);
    beersBtn.forEach(b => b.addEventListener('click', init2(loadBeers())));
    //contactBtn.addEventListener('click', loadContact);
    contactBtn.forEach(b => b.addEventListener('click', init2(loadContact())));
}

function init2(page) {
    loadHeader();
    page;
    loadFooter();

    addNav2();
}