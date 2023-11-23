const root = document.documentElement;
const toggleButtonDiv = document.querySelector('#theme-toggle');
root.className = 'dark';
toggleButtonDiv.innerHTML = '<img src="assets/sun-8728.svg" alt="sun pic">';
function setTheme(){
    toggleButtonDiv.classList.add('rotate');
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    if (newTheme == 'dark'){
        toggleButtonDiv.innerHTML = '<img src="assets/sun-8728.svg" alt="sun pic">';
    } else {
        toggleButtonDiv.innerHTML = '<img src="assets/moon-6695.svg" alt="moon pic">';
    }
    setTimeout(() => {
        toggleButtonDiv.classList.remove('rotate');
    }, 500);
}

toggleButtonDiv.addEventListener('click',setTheme);

document.querySelectorAll('.input-field input').forEach(input => {
    const label = input.parentElement.querySelector('label');
    input.addEventListener('focus', () => {
        input.classList.add('touched');
        label.style.top = '-1.5rem';
        label.style.backgroundColor = 'var(--labelBG-focus-color)';
        label.style.color = 'var(--label-focus-color)';
        label.style.padding = '0 0.5rem';
    });
    input.addEventListener('blur', () => {
        if (input.value === ''){
            label.style.top = '0.5rem';
            label.style.backgroundColor = 'var(--labelBG-blur-color)';
            label.style.color = 'var(--label-blur-color)';
            label.style.padding = '0';
        } else {
            label.style.top = '-0.75rem';
        }
    });
});

const password = document.querySelector('#password');
const ConfirmPassword = document.querySelector('#Confirm_password');

password.addEventListener('input', checkPassword);
ConfirmPassword.addEventListener('input', checkPassword);

function checkPassword(){
    if (password.value !== ConfirmPassword.value){
        password.style.borderColor = '#e71d36';
        ConfirmPassword.style.borderColor = '#e71d36';
    } else {
        password.style.borderColor = '#a7c957;';
        ConfirmPassword.style.borderColor = '#a7c957';
    }
}
