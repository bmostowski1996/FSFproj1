infos = [
    'Key West, FL', 
    'New Orleans, LA', 
    'New York, NY', 
    'Atlanta, GA', 
    'Washington, D.C.'
];

foods = [
    [],
    [],
    [],
]

summaries = [
    `Key West possesses a unique blend of Cuban, West Indian, Bahamian, and American atmosphere.
    The city is known for its architecture, particularly its many 19th-century wooden homes, and as a haven 
    for writers, artists, and those preferring less conventional lifestyles. Our tiny island is steeped in history, 
    and you can’t help but fall in love with our dialed-up-to-11, old-world charm. From the ornate latticework of 
    our architecture and our chocolate-box neighborhoods to the iconically circusy Mallory Square, Key West exudes 
    a unique character that sets us apart from any other place. The southernmost point in the United States, is 
    famous for watersports, lively nightlife, beaches, historic sites and its pastel, conch-style architecture. 
    Last but not least, a “winter wonderland” in Key West looks more like a beautiful beach paradise. With temperatures 
    generally hovering in the mid-70s each day and hardly ever dropping below 65 degrees, it’s no wonder so many 
    tourists choose to flock to our magnificent little island each year at this time!`,

    `New Orleans is a vibrant city that offers a unique blend of culture, history, and entertainment, 
    making it a must-visit destination. The city’s food is legendary  with gumbo, beignets, po’boys, 
    and crawfish being some of the most popular options. The architecture is stunning, with historic 
    French Quarter streets lined with colorful buildings and wrought-iron balconies. Whether you're 
    exploring the lively Bourbon Street, taking a swamp tour, or just enjoying the laid-back vibe, 
    New Orleans is a place full of soul, energy, and charm. It’s a must-see for anyone looking for a 
    truly unique travel experience.`,

    `New York City and the wider metro area city has a overall population of 19,034,000 and is the worlds 
    melting pot brining all cultures together from all over the world in one place. The city is more than 
    just parks with the helicopters, trains, planes and automobiles don't forget about a great ferry ride to. 
    New York has some of the most beautiful and poplar architecture in the world the empire state building, 
    Trinity Church, Brooklyn Bridge, the American Museum of Natural History, Madison Square Garden and the 
    Statue of Liberty. Hayden Planetarium which is located within the Hayden Sphere, uses advanced technology 
    to simulate the night sky experiencing the beauty and wonder of the cosmos.`,

    'test3', // Still need a summary for this location...

    `Washington, D.C., is more than just the nation’s capital; it’s a city brimming with history, culture, 
    and vibrant local life. Visitors can immerse themselves in American history while touring iconic landmarks 
    and monuments or exploring the city's many free world-class museums. The food scene offers everything from 
    fine dining to beloved local staples like the half-smoke. Georgetown provides a charming neighborhood vibe 
    with cobblestone streets and boutique shops. Whether you’re strolling along the Tidal Basin during cherry 
    blossom season or taking in a lively local music scene, D.C. offers a mix of history, art, and modern charm 
    that makes it a standout destination.`
]

for (let i = 0; i < 5; i++) {
    let idstr = '#loc' + String(i+1);
    const location = document.querySelector(idstr);
    
    if (location !== null) {
        // Meat and potatoes function
        const updateInfo = function () {
            const locInfo = document.querySelector('#loc-info');
            const summary = document.querySelector('#sum-info');
            
            const place = document.querySelector('#place-info');
            const food = document.querySelector('#food-info');

            locInfo.textContent = infos[i];
            summary.textContent = summaries[i];
        }

        location.addEventListener('click', updateInfo);
    }

   const showTextbox = document.querySelector('#show-textbox');    
}

foo = false;

const toggleFoo = function() {
    foo = !foo;  // Toggle the value of foo
    const box = document.querySelector('.info-box');
    if (foo) {
        box.style.marginLeft = '5%';
        box.style.marginRight = 'auto';
    } else {
        box.style.marginLeft = 'auto';
        box.style.marginRight = '5%';
    }
}

toggleFoo();
// console.log(locs);

const resizeMap = function () {
    // When the webpage is resized, make sure that the image map coordinates are set properly
    const img = document.querySelector('#map');
    const imgMap = document.querySelector('.image-map');

    const originalWidth = 1100;
    const originalHeight = 703;

    const scaleX = img.clientWidth / originalWidth;
    const scaleY = img.clientHeight / originalHeight;

    imgMap.querySelectorAll('area').forEach(area => {
        const coords = area.dataset.originalCoords.split(',').map(Number);

        const scaledCoords = coords.map((coord, i) =>
            i % 2 === 0 ? coord * scaleX : coord * scaleY
        );
        area.coords = scaledCoords.join(',');
    });
}

window.onload = () => {
    document.querySelectorAll('area').forEach(area => {
        area.dataset.originalCoords = area.coords;
    });
    resizeMap();
};


window.addEventListener('resize', resizeMap);

function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block"
  };

  // Function to close the popup
  function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
  };

  // Add event listeners to the areas
  document.querySelectorAll('.popup-trigger').forEach(function(area) {
    area.addEventListener('click', function(e) {
      e.preventDefault();
      const popupId = this.getAttribute('data-popup');
      openPopup(popupId);
    });
  });




