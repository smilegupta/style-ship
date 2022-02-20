const username = document.getElementById("form-validation-name")
const password = document.getElementById("form-validation-password");
const form = document.getElementById("submit-form-example");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(username.value == "" || username.value == null){
        username.parentElement.classList.add("form-error");
    } else{
        username.parentElement.classList.remove("form-error");
    }
    
    if(password.value == "" || password.value == null){
        password.parentElement.classList.add("form-error");
    } else{
        password.parentElement.classList.remove("form-error");
    }
})