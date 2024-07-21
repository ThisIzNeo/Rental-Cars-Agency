const contactBtn = document.getElementById("contactUsBtn");
const closeBtn = document.getElementById("closeForm");
const formContact = document.getElementById("form-contact")

function FormContact(){
    contactBtn.addEventListener('click', (e) =>{
        formContact.classList.add("fromShowen")
    })
}

function closeForm(){
    closeBtn.addEventListener('click', (e) =>{
        formContact.classList.remove("fromShowen")
    })
}