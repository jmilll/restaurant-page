//for packaging,  turn imports on
//import './normalize.css';
//import './style.css';

console.log('package test')

function createHeader() {
    const content = document.getElementById('content');
    const newHeader = document.createElement('div');
    
    newHeader.setAttribute('class', 'header');
        const newList = document.createElement('ul');
        newList.setAttribute('class', 'menu');
            const newListLogo = document.createElement('li');
            newListLogo.setAttribute('class', 'logo');
                const LinkLogo = document.createElement('a');
                LinkLogo.href = '#';
                LinkLogo.innerHTML = 'URBANREST';
    
            const newListHome = document.createElement('li');
            newListHome.setAttribute('class', 'item');
                const LinkHome = document.createElement('a');
                LinkHome.href = '#';
                LinkHome.innerHTML = 'Home';
    
            const newListBeers = document.createElement('li');
            newListBeers.setAttribute('class', 'item');
                const LinkBeers = document.createElement('a');
                LinkBeers.href = '#';
                LinkBeers.innerHTML = 'Beers';
    
            const newListContact = document.createElement('li');
            newListContact.setAttribute('class', 'item');
                const LinkContact = document.createElement('a');
                LinkContact.href = '#';
                LinkContact.innerHTML = 'Contact';

    content.appendChild(newHeader);
        newHeader.appendChild(newList);
            newList.appendChild(newListLogo);
                newListLogo.appendChild(LinkLogo);
            newList.appendChild(newListHome);
                newListHome.appendChild(LinkHome);
            newList.appendChild(newListBeers);
                newListBeers.appendChild(LinkBeers);
            newList.appendChild(newListContact);
                newListContact.appendChild(LinkContact);
}




content.appendChild(newHeroImage);

content.appendChild(newCopy);

content.appendChild(newFooter);




    a = document.createElement('a');
    a.href =  'google.com'; // Insted of calling setAttribute 
    a.innerHTML = "Link" // <a>INNER_TEXT</a>

