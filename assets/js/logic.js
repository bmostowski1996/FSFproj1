locations = [
    'Key West, FL', 
    'New Orleans, LA', 
    'New York, NY', 
    'Atlanta, GA', 
    'Washington, D.C.',
];

foods = [
    ['Blue Heaven', 'Key Lime Pie Bakery', 'First Flight Island Restaurant'],
    ['Gumbo', 'Po\'boys', 'Beignets'],
    ['Buenos Aires Restaurant Argentine, Steakhouse', 'L&B Spumoni Garden, Italian', 'Villabate Alba Bakery'],
    ['Lazy Betty', 'Poor Calvins', 'Vortex Bar & Grill'],
    ['Half-Smoke', 'Mumbo Sauce', 'Ethiopian Cuisine']
]

places_to_go = [
    ['Duval St', 'Mallory Square', 'Fort Zachary Taylor Historic State Park'],
    ['The French Quarter', 'Bourbon Street', 'Jackson Square'],
    ['34th Street time square', 'Empire State Building', 'Yankee Stadium'],
    ['Atlanta Botanica Garden' , 'World of Coca-Cola' , 'Martin Luther King, Jr. National Historical Park'],
    ['National Mall','Smithsonian Museum','Georgetown','U.S. Capitol','Library of Congress'],
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

    `Atlanta is the capital of the U.S. state of Georgia. It played an important part in both the Civil War and the 1960s Civil Rights Movement. 
    Atlanta History Center chronicles the city’s past, and the Martin Luther King Jr. National Historic Site is dedicated to the African-American 
    leader’s life and times. Downtown, Centennial Olympic Park, built for the 1996 Olympics, encompasses the massive Georgia Aquarium`, 

    `Washington, D.C., is more than just the nation’s capital; it’s a city brimming with history, culture, 
    and vibrant local life. Visitors can immerse themselves in American history while touring iconic landmarks 
    and monuments or exploring the city's many free world-class museums. The food scene offers everything from 
    fine dining to beloved local staples like the half-smoke. Georgetown provides a charming neighborhood vibe 
    with cobblestone streets and boutique shops. Whether you’re strolling along the Tidal Basin during cherry 
    blossom season or taking in a lively local music scene, D.C. offers a mix of history, art, and modern charm 
    that makes it a standout destination.`,
]

updateInfos = [];

for (let i = 0; i < 5; i++) {
    let idstr = '#loc' + String(i+1);
    const location = document.querySelector(idstr);
    
    if (location !== null) {
        // Meat and potatoes function
        const updateInfo = function () {
            const locInfo = document.querySelector('#loc-info');
            const summary = document.querySelector('#sum-info');
            
            const place_list = document.querySelector('#place-info');
            const food_list = document.querySelector('#food-info');

            locInfo.textContent = locations[i];
            summary.textContent = summaries[i];

            place_list.replaceChildren();
            food_list.replaceChildren();

            // For place info

            for (const place of places_to_go[i]) {
                const li = document.createElement('li');
                li.textContent = place;
                place_list.appendChild(li);
            }

            // For food info

            for (const food of foods[i]) {
                const li = document.createElement('li');
                li.textContent = food;
                food_list.appendChild(li);
            }
            
        }

        updateInfos.push(updateInfo);
        location.addEventListener('click', updateInfo);
    }
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
      openPopup('popup1');
      // const popupId = this.getAttribute('data-popup');
    });
  });

// For 

function travel(event) {
    if (event) {
        event.preventDefault();
    }
    
    let destination = document.getElementById("destination").value;

    if (destination) {
        localStorage.setItem('destination', destination);
    } else {
        destination = localStorage.getItem('destination');
    }
    
    if (destination) {
        console.log(`Attempting to travel to ${destination}`);

        const travelResponse = document.querySelector('#travel-response');
        travelResponse.textContent = `Attempting to travel to ${localStorage.getItem('destination')}`
        
        let locInd = 0;
        if (destination.includes("FL")) {
            locInd = 0;
        } else if (destination.includes("LA")) {
            locInd = 1;
        } else if (destination.includes("NY")) {
            locInd = 2;
        } else if (destination.includes("GA")) {
            locInd = 3;
        } else {
            locInd = 4;
        }
        updateInfos[locInd]();
        openPopup('popup1');
    }
    
}

const form = document.getElementById("destination-form");
form.addEventListener("submit", travel);

const mockEvent = {
    preventDefault: () => console.log("Default action prevented")
};

travel(mockEvent);

