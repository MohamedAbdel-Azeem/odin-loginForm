const root = document.documentElement;
const toggleButtonDiv = document.querySelector('#theme-toggle');
root.className = 'dark';
toggleButtonDiv.innerHTML = '<img src="assets/sun-8728.svg" alt="sun pic">';
function setTheme(){
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    if (newTheme == 'dark'){
        toggleButtonDiv.innerHTML = '<img src="assets/sun-8728.svg" alt="sun pic">';
    } else {
        toggleButtonDiv.innerHTML = '<img src="assets/moon-6695.svg" alt="moon pic">';
    }
}

toggleButtonDiv.addEventListener('click',setTheme);
