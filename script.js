const passwordField = document.querySelector("#password")
const confirmPasswordField = document.querySelector("#conf_password")
const errorBox = document.querySelector(".error-box")


function checkPasswordFields (e) {
    if (passwordField.value != confirmPasswordField.value) {
        passwordField.style.borderColor = 'red'
        confirmPasswordField.style.borderColor = 'red'
        errorBox.innerHTML = '* Password fields do not match'
    }

    else {
        passwordField.style.borderColor = ''
        confirmPasswordField.style.borderColor = ''
        errorBox.innerHTML = ''
    }
}

passwordField.addEventListener('input', checkPasswordFields)
confirmPasswordField.addEventListener('input', checkPasswordFields)