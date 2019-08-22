function isValidEmail(email) {
    return (/(.+)@(.+){2,}\.(.+){2,}/.test(email));
}

function onEmailEdit(input) {
    document.getElementById("mc-embedded-subscribe").disabled = !isValidEmail(input);
}

function onSubmit() {
    document.getElementById("mc_embed_signup").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
}