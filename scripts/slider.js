function nextSlide(){
    const nextBtn = document.getElementById("nextbtn");
    nextBtn.addEventListener("click", (addClass) =>{
        document.getElementById("list1").classList.add("hidden")
        document.getElementById("list2").classList.add("show-item")
        document.getElementById("list-classment").innerHTML = "2/2"
    })
}

function backSlide(){
    const backBtn = document.getElementById("backbtn");
    backBtn.addEventListener("click", (addClass) =>{
        document.getElementById("list1").classList.remove("hidden")
        document.getElementById("list2").classList.remove("show-item")
        document.getElementById("list-classment").innerHTML = "1/2"
    })
}