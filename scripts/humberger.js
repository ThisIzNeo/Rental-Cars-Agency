
function humberger(){
    const menuBtn = document.getElementById("humberger-icon");
    menuBtn.addEventListener('click', (event) => {
        document.getElementById("humbergerList").classList.add("show")
    })
}

function closeMenu() {
    const closeBtn = document.getElementById("close");
    closeBtn.addEventListener('click', (event) => {
        document.getElementById("humbergerList").classList.remove("show")
    })
}