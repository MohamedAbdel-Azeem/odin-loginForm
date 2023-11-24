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
        label.style.padding = '0.05rem 0.6rem';
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
    input.addEventListener('input', () => {
        const error = input.parentElement.querySelector('.error');
        if (input.value !== '') {
            error.textContent = '';
        }
    });
});


document.querySelectorAll('.input-field').forEach(field => {
    const error = document.createElement('div');
    error.className = 'error';
    field.appendChild(error);
});

function checkPassword() {
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#Confirm_password');
    const error1 = confirmPassword.parentElement.querySelector('.error');
    const error2 = password.parentElement.querySelector('.error');
    if (password.value !== confirmPassword.value) {
        error1.textContent = '*passwords do not match';
        error1.style.color = 'var(--error-color)';
        error2.textContent = '*passwords do not match';
        error2.style.color = 'var(--error-color)';
        error1.style.marginTop = '0.5rem';
        error2.style.marginTop = '0.5rem';
        password.style.borderColor = 'var(--error-color)';
        confirmPassword.style.borderColor = 'var(--error-color)';
        return false;
    } else {
        error1.textContent = '';
        error2.textContent = '';
        password.style.borderColor = '#a7c957';
        confirmPassword.style.borderColor = '#a7c957';
        return true;
    }
}

const submitForm = document.querySelector('#submit');

submitForm.addEventListener('click', function(event) {
    let allInputsFilled = true;
    const pattern = /^\+?[0-9]*$/;
    document.querySelectorAll('.input-field input').forEach(input => {
        const error = input.parentElement.querySelector('.error');
        if (input.value === '') {
            event.preventDefault();
            allInputsFilled = false;
            error.textContent = '*this field is required';
            error.style.color = 'var(--error-color)';
            error.style.marginTop = '0.5rem';
            input.classList.add('touched');
        } else {
            error.textContent = '';
            if (input.id === 'Phone' && !pattern.test(input.value)) {
                event.preventDefault();
                error.textContent = 'Invalid phone number!';
                error.style.color = 'var(--error-color)';
                error.style.marginTop = '0.5rem';
            } else {
                error.textContent = '';
            }
        }
    });
    if (!checkPassword()) {
        event.preventDefault();
    }
});

