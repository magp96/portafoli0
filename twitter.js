const userLabel = document.getElementById("userLabel");
const user = document.getElementById("user");
const passLabel = document.getElementById('passLabel');
const pass = document.getElementById('password');

user.addEventListener('click', toggleClass);
pass.addEventListener('click',toggleClass2);

function toggleClass() {
    if (passLabel.classList.contains('activate')) {
        passLabel.classList.remove('activate');
        userLabel.classList.add('activate');
    }
    userLabel.classList.add('activate');
}

function toggleClass2() {
    if (userLabel.classList.contains('activate')) {
        userLabel.classList.remove('activate');
        passLabel.classList.add('activate');
    } 
    passLabel.classList.add('activate');
}