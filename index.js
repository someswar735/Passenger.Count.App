let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let alertEl = document.getElementById("alert");

function increment() {
    count += 1;
    countEl.innerText = count;
    countEl.style.fontSize = "60px"; 
    setTimeout(() => {
        countEl.style.fontSize = "50px"; 
    }, 300); 
}

function decrement() {
    if (count > 0) {
        count -= 1;
        countEl.innerText = count;
        countEl.style.fontSize = "40px"; 
        setTimeout(() => {
            countEl.style.fontSize = "50px"; 
        }, 300); 
    } else {
        alertEl.classList.add("show");
        setTimeout(() => {
            alertEl.classList.remove("show");
        }, 2000); 
}

}
function save() {
    countStr = count + "-";
    saveEl.textContent += countStr;
    
}

