function createFooter() {
    const content = document.getElementById('content');
    const newFooter = document.createElement('div');

    newFooter.setAttribute('class', 'footer');
        const newList = document.createElement('ul');
        newList.setAttribute('class', 'menu');
            const newListHome = document.createElement('li');
            newListHome.setAttribute('class', 'item');
                const LinkHome = document.createElement('a');
                LinkHome.setAttribute('class', 'home');
                LinkHome.href = '#';
                LinkHome.innerHTML = 'Home';

            const newListBeers = document.createElement('li');
            newListBeers.setAttribute('class', 'item');
                const LinkBeers = document.createElement('a');
                LinkBeers.setAttribute('class', 'beers');
                LinkBeers.href = '#';
                LinkBeers.innerHTML = 'Beers';

            const newListContact = document.createElement('li');
            newListContact.setAttribute('class', 'item');
                const LinkContact = document.createElement('a');
                LinkContact.setAttribute('class', 'contact');
                LinkContact.href = '#';
                LinkContact.innerHTML = 'Contact';

    content.appendChild(newFooter);
        newFooter.appendChild(newList);
            newList.appendChild(newListHome);
                newListHome.appendChild(LinkHome);
            newList.appendChild(newListBeers);
                newListBeers.appendChild(LinkBeers);
            newList.appendChild(newListContact);
                newListContact.appendChild(LinkContact);
}

function loadFooter() {
    createFooter() 
}

export default loadFooter;