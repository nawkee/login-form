const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailLabel = document.querySelector('.email-container label span');
const passwordLabel = document.querySelector('.password-container label span');
const signIn = document.querySelector('#sign-in');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('#modal');
const modalText = document.querySelector('#modal-text');

email.addEventListener('focus', () => {
    emailLabel.style.top = '-20px';
    emailLabel.style.color = 'var(--purple-color)';
});

email.addEventListener('blur', () => {
    emailLabel.style.color = '#333';
    if (!email.value) emailLabel.style.top = '0';
});

password.addEventListener('focus', () => {
    passwordLabel.style.top = '-20px';
    passwordLabel.style.color = 'var(--purple-color)';
});

password.addEventListener('blur', () => {
    passwordLabel.style.color = '#333';
    if (!password.value) passwordLabel.style.top = '0';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.style.display = 'none';
    }
});

signIn.addEventListener('click', () => {
    console.log(!validateEmail());
    if (!validateEmail()) {
        modal.style.display = 'block';
        modalText.innerHTML = 'Email is incorrect. Try again';
        return;
    } else if (!validatePassword()) {
        modal.style.display = 'block';
        modalText.innerHTML = 'Password is incorrect. Try again';
        return;
    } else {
        // Some actions with data
    }
});

function validateEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.value);
}

function validatePassword() {
    const pass = password.value;
    return /[A-Z]/.test(pass) &&
        /[a-z]/.test(pass) &&
        /[0-9]/.test(pass) &&
        pass.length > 8;
}