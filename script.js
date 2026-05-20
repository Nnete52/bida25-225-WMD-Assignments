document.getElementById("searchInput").addEventListener("keyup", function(){
    let value = this.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();

        if(text.includes(value)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

function filterSelection(category){
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if(category === "all"){
            card.style.display = "block";
        } else if(card.classList.contains(category)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}