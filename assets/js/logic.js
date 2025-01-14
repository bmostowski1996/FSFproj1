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
}

console.log(locs);
