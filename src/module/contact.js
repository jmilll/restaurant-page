function listItem(x) {
    const item = document.createElement('li');
    item.textContent = x
    return item;
}

const days = [
    listItem('Monday'),
    listItem('Tuesday'),
    listItem('Wednesday'),
    listItem('Thursday'),
    listItem('Friday'),
    listItem('Saturday'),
    listItem('Sunday')
]

const times = [
    listItem('Closed'),
    listItem('Closed'),
    listItem('4pm - 8pm'),
    listItem('4pm - 8pm'),
    listItem('4pm - 8pm'),
    listItem('12pm - 8pm'),
    listItem('12pm - 8pm')
]

function loadContact() {
    const content = document.getElementById('content');

    const contact = document.createElement('div');
    contact.classList.add('contact');

    const locationImage = document.createElement('div');
    locationImage.classList.add('beer-image');
        const imageMain = document.createElement('img');
        imageMain.setAttribute('class', 'fit');
        //imageMain.src = '../src/images/exterior.jpeg';//change for gh-pages to load img
        //https://raw.githubusercontent.com/jmilll/restaurant-page/master/src/images/exterior.jpeg
        imageMain.src = './src/images/exterior.jpeg';
        imageMain.alt = 'brewery-exterior';
    const map = document.createElement('div');
    map.classList.add('map');
        const gmap = document.createElement('iframe');
        gmap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.11102905025!2d-83.12969608422951!3d42.46792723627473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824cf0406c18657%3A0xe8bcacd6ea23488f!2sUrbanrest+Brewing+Company!5e0!3m2!1sen!2sus!4v1547049317209';
        gmap.alt = 'google-map-location';
    const info = document.createElement('div');
    info.classList.add('info');
        const location = document.createElement('div');
        location.classList.add('location');
            const name = document.createElement('h3');
            name.textContent = 'Urbanrest Brewing Company';
            const loc = document.createElement('p');
            loc.textContent = '2615 Wolcott St, Ferndale, MI 48220';

        const title = document.createElement('h3');
        title.textContent = 'Taproom Hours'

        const hours = document.createElement('div');
        hours.classList.add('hours');
            const day = document.createElement('ul');
            day.classList.add('days');

            const time = document.createElement('ul');
            time.classList.add('times');


    content.appendChild(contact);
        contact.appendChild(locationImage);
            locationImage.appendChild(imageMain);
        contact.appendChild(map);
            map.appendChild(gmap);
        contact.appendChild(info);
            info.appendChild(location);
                location.appendChild(name);
                location.appendChild(loc);
            info.appendChild(title);
            info.appendChild(hours);
                hours.appendChild(day);
                    days.forEach((d) => {
                        day.appendChild(d);
                    });
                hours.appendChild(time);
                    times.forEach((t) => {
                        time.appendChild(t);
                    });
}

export default loadContact;