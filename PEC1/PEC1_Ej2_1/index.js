const form = document.getElementById("form");
const username = document.getElementById("username");
const age = document.getElementById("age");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Check email is valid
function checkEmail(input) {
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    if(re.test(input.value)){
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if(input.value.trim() === ""){
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check input length
function checkLength(input, min, max) {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value){
        showError(input2, "Passwords do not match");
    }
}

/* Check password condition (must have 1.Upper, 2.Low, 3.Ciphers,
4.Signs: ` ~ ! @ # $ % ^ & * ( ) _ + - = { } | [ ] \ : " ; ' < > ? , . /    */
function checkPassword(input) {
    const re123 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    const re4 = /~!@#\$%\^&\*\(\)_\+-=\{\}\|\[\]\\:"'<>\?,\.\//;
    if(re123.test(input.value) && re4.test(input.value)){
        showSuccess(input);
    } else {
        showError(input, "Must contain an upper/lowercase, cipher and  sign.");
    }
}

// Check age
function checkAge(input){
    if(input.value > 0 && input.value < 1000) {
        showSuccess(input);
    } else if(input.value === "") {
        showError(input, "Age is required");
    } else {
        showError(input, "Age must be between 0 and 1000");
    }
}

// Get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkRequired([username, age, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
    checkAge(age);
    checkPassword(password);
});