infos = [
    'Welcome to New Orleans, LA', 
    'Welcome to Key West, FL', 
    'Welcome to New York, NY', 
    'Welcome to Atlanta, GA', 
    'Welcome to Washington, D.C.'];

for (let i = 0; i < 5; i++) {
    let idstr = '#loc' + String(i+1);
    const location = document.querySelector(idstr);

    const updateInfo = function () {
        const locInfo = document.querySelector('#loc-info');
        locInfo.textContent = infos[i];
    }

    location.addEventListener('click', updateInfo);


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





