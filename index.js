document.addEventListener("DOMContentLoaded", updateParagraph)

function updateParagraph() {    
    const replaceText = document.querySelector("#text");
    replaceText.textContent = "This is really cool!";
}