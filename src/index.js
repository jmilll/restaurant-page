import './normalize.css';
import './style.css';
import loadHeader from './module/header';
import loadFooter from './module/footer';
import loadHome from './module/home';
import loadBeers from './module/beers';
import loadContact from './module/contact';

loadHeader();
loadHome();
loadFooter();
initFooterBtn()

function clear() {
    const container = document.getElementById('content');
    let conLength = container.children.length;

    // remove each element other than header
    while (conLength > 1) {
        container.removeChild(container.children[1])
        conLength--;
    } 
}

// Header buttons
const logoBtn = document.querySelector('.logo');
logoBtn.onclick = () => {
    clear();
    loadHome();
    loadFooter();
    initFooterBtn()
};

const homeBtn = document.getElementById('home');
homeBtn.onclick = () => {
    clear();
    loadHome();
    loadFooter();
    initFooterBtn()
};

const beersBtn = document.getElementById('beers');
beersBtn.onclick = () => {
    clear();
    loadBeers();
    loadFooter();
    initFooterBtn()
};

const contactBtn = document.getElementById('contact');
contactBtn.onclick = () => {
    clear();
    loadContact();
    loadFooter();
    initFooterBtn()
};

//Footer buttons
function initFooterBtn() {
    const homeBtnF = document.getElementById('home-footer');
    homeBtnF.onclick = () => {
        clear();
        loadHome();
        loadFooter();
    };

    const beersBtnF = document.getElementById('beers-footer');
    beersBtnF.onclick = () => {
        clear();
        loadBeers();
        loadFooter();
    };

    const contactBtnF = document.getElementById('contact-footer');
    contactBtnF.onclick = () => {
        clear();
        loadContact();
        loadFooter();
    };
}