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

]

for (let i = 0; i < 5; i++) {
    let idstr = '#loc' + String(i+1);
    const location = document.querySelector(idstr);
    
    if (location !== null) {
        // Meat and potatoes function
        const updateInfo = function () {
            const locInfo = document.querySelector('#loc-info');
            const summary = document.querySelector('#sum-info');

            locInfo.textContent = infos[i];
            summary.textContent = summaries[i];
        }

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
    const imgMap = document.querySelector('#image-map');

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

