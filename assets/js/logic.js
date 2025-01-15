infos = [
    'Welcome to Key West, FL', 
    'Welcome to New Orleans, LA', 
    'Welcome to New York, NY', 
    'Welcome to Atlanta, GA', 
    'Welcome to Washington, D.C.'];

for (let i = 0; i < 5; i++) {
    let idstr = '#loc' + String(i+1);
    const location = document.querySelector(idstr);
    
    if (location !== null) {
        const updateInfo = function () {
            const locInfo = document.querySelector('#loc-info');
            locInfo.textContent = infos[i];
        }

        location.addEventListener('click', updateInfo);
    }

   const showTextbox = document.querySelector('#show-textbox');
    
   // showTextbox.addEventListener('click', function() {
     // popupTextbox.style.display = 'block';  // Show the text box
    // overlay.style.display = 'block';  // Show the overlay
    // });
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




