function isValidEmail(email) {
    return (/(.+)@(.+){2,}\.(.+){2,}/.test(email));
}

function onEmailEdit(input) {
    document.getElementById("submit").disabled = !isValidEmail(input);
}