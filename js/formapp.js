// Selectors
var loginBtn = document.querySelector('.log-in');
var signupBtn = document.querySelector('.sign-up');

var loginSection = document.querySelector('#login');
var signinSection = document.querySelector("#signup");

//Event Listeners
loginBtn.addEventListener('click', login);
signupBtn.addEventListener('click', signup);


//functions
loginBtn.addEventListener('click', function(){
    loginBtn.classList.add('border');
    signupBtn.classList.remove('border')
})

signupBtn.addEventListener('click', function(){
    signupBtn.classList.add('border')
    loginBtn.classList.remove('border');
})

function login() {
    loginSection.classList.add('show');
    signinSection.classList.remove('show');

}

function signup() {
    loginSection.classList.remove('show');
    signinSection.classList.add('show');
   
}

//login
const loginForm = document.querySelector(".login-form");
const loginUsername = document.querySelector("#login-username");
const loginPassword = document.querySelector("#login-password");


loginUsername.addEventListener('input', function(){
    if(loginUsername.validity.valid) {
        loginUsername.classList.remove('error');
        loginUsername.nextElementSibling.classList.remove('show');

    }
})

loginPassword.addEventListener('input', function(){
    if(loginPassword.validity.valid) {
        loginPassword.classList.remove('error');
        loginPassword.nextElementSibling.classList.remove('show');
    }
})


loginForm.addEventListener('submit', function(e){
    if(!loginUsername.validity.valid) {
        loginUsername.classList.add('error');
        loginUsername.nextElementSibling.classList.add('show');
        e.preventDefault();
    }
    
    if(!loginPassword.validity.valid) {
        loginPassword.classList.add('error');
        loginPassword.nextElementSibling.classList.add('show');
        e.preventDefault();
    }
})

//signup
const signupForm = document.querySelector(".signup-form");
const signupUsername = document.querySelector('#signup-username');
const signupPassword1 = document.querySelector('#signup-password1');
const signupPassword2 = document.querySelector('#signup-password2');

signupUsername.addEventListener('input', function(){
if(signupUsername.validity.valid) {
    signupUsername.classList.remove('error');
    signupUsername.nextElementSibling.classList.remove('show');
}
})

signupPassword1.addEventListener('input', function(){
    if(signupPassword1.validity.valid) {
        signupPassword1.classList.remove('error');
        signupPassword1.nextElementSibling.classList.remove('show');
    }
    
})

signupPassword2.addEventListener('input', function(){
    if(signupPassword2.validity.valid) {
        signupPassword2.classList.remove('error');
        signupPassword2.nextElementSibling.classList.remove('show');
    }
    
})



signupForm.addEventListener('submit', function(e){

    var pass2 = document.getElementById('signup-password2').value;
    var pass1 = document.getElementById('signup-password1').value;

    if(!signupUsername.validity.valid) {
        signupUsername.classList.add('error');
        signupUsername.nextElementSibling.classList.add('show');
        e.preventDefault();
    }
    
    if(!signupPassword1.validity.valid) {
        signupPassword1.classList.add('error');
        signupPassword1.nextElementSibling.classList.add('show');
        e.preventDefault();
    }

    if(!signupPassword2.validity.valid) {
        signupPassword2.classList.add('error');
        signupPassword2.nextElementSibling.classList.add('show');
        e.preventDefault();
    }

        if (pass1!=pass2) {
            signupPassword2.setCustomValidity('Passwords must match.');
            document.querySelector("#match").textContent = "Password must match";
        } else {
            signupPassword2.classList.remove('error');
            signupPassword2.nextElementSibling.classList.remove('show');
        }
 
})


