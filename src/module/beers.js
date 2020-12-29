//for packaging,  turn imports on
//import './normalize.css';
//import './style.css';

//console.log('package test')






function createBeer(name, style, abv, description) {

    const newBeer = document.createElement('div');
    newBeer.classList.add('beer-item');

        const beerName = document.createElement('h2');
        beerName.classList.add('beer-name');
        beerName.textContent = name;

        const beerStyle = document.createElement('h3');
        beerStyle.classList.add('beer-style');
        beerStyle.textContent = style;

        const beerAbv = document.createElement('h4');
        beerAbv.classList.add('beer-abv');
        beerAbv.textContent = abv;

        const beerDescription = document.createElement('p');
        beerDescription.classList.add('beer-description');
        beerDescription.textContent = description;

    newBeer.appendChild(beerName);
    newBeer.appendChild(beerStyle);
    newBeer.appendChild(beerAbv);
    newBeer.appendChild(beerDescription);

    return newBeer;
}

function loadBeers() {
    const content = document.getElementById('content');

    const newImageContainer = document.createElement('div');
    newImageContainer.classList.add('beer-image');
    
    const pic = document.createElement('img')
    pic.classList.add('fit');
    pic.src = 'https://content.kegworks.com/hubfs/Imported_Blog_Media/beer-glassed-fb-2.jpg';
    pic.alt = 'beers-lined-up';

    const beerList = document.createElement('div');
    beerList.setAttribute('class', 'beer-list');

    content.appendChild(newImageContainer);
    newImageContainer.appendChild(pic);
    content.appendChild(beerList);

    const beers = [
        createBeer(
            'Riwaka',
            'New England IPA',
            '5.5%',
            'It\'s taken almost 3 years to get our hands on these Riwaka hops. These delightful little terroir nuggets hold within them a punchy terpene paradise, unmistakably New Zealand in its character. Chock full of punchy gooseberries, mango hunks, coastal breeze, and Orange Mr. Misty Freeze in the summer lawn as a kid.'
        ),
        createBeer(
            'Dew Dropper',
            'New England IPA',
            '5.5%',
            'DH Pale ale with Motueka, Idaho 7 and the almighty Citra. Fermented expressively with our house ale strain providing nice peach and apricot stone fruit character atop a bouquet of orange oil, blue pine, peach gummy rings and magical PNW forest. A foray again in to a brave “new” world; Pale Ale.'
        ),
        createBeer(
            'Table Beer',
            'German Table Beer',
            '2.8%',
            'Made from the Second runnings of our Belgian Quad. Fermented with Saison yeast. Impressions of fresh baked white biscuits, wildflower honey, Oolong tea, and morning dew at the crack of dawn. Light and easy as the ABV might suggest. Finishing nice and dry with a dab of underlying hops.'
        ),

    ];

    beers.forEach((beer) => {
        beerList.appendChild(beer);
    });
}
/*
function loadBeers() {
    //createMain()
    //createCopy()
}
*/
export default loadBeers;