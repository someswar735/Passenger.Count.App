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

    document.querySelectorAll('.box').forEach(box => {
        box.classList.remove('active');
    });
    playIncrementSound();
    playAnimation({
        1: 'LeftFoot.png',
        4: 'RightFoot.jpg',
        5: 'LeftFoot.png',
        8: 'RightFoot.jpg',
        9: 'LeftFoot.png'
        
        
    });
}

function save() {
    countStr = count + "-";
    saveEl.textContent += countStr;
    const container = document.querySelector('.container');
    container.insertAdjacentHTML('beforeend', '<img class="noted-img" src="noted.png" alt="Love">');

    
    setTimeout(() => {
        const imgToRemove = document.querySelector('.noted-img');
        if (imgToRemove) {
            imgToRemove.style.opacity = 0;
            setTimeout(() => {
                imgToRemove.remove();
                playSaveSound() 
            }, 300); 
        }
    }, 300);
}


function playAnimation(animations, direction) {
    const allBoxes = document.querySelectorAll('.box');
    let delay = 0;
    const keys = direction === 'increment' ? Object.keys(animations) : Object.keys(animations).reverse();

    keys.forEach((boxIndex) => {
        setTimeout(() => {
            const box = allBoxes[boxIndex - 1];
            box.classList.add('active');
            box.style.backgroundImage = `url(${animations[boxIndex]})`;
        }, delay);

        delay += 200; 
    });
}
function playDecrementAnimation() {
    const allBoxes = document.querySelectorAll('.box');
    let delay = 0;
    const animations = {
        9: 'RFB.jpg',
        8: 'LeftFootBack.png',
        5: 'RFB.jpg',
        4: 'LeftFootBack.png',
        1: 'RFB.jpg'
    };

    Object.keys(animations).forEach((boxIndex) => {
        setTimeout(() => {
            const box = allBoxes[boxIndex - 1];
            box.classList.add('active');
            box.style.backgroundImage = `url(${animations[boxIndex]})`;
        }, delay);

        delay += 200; 
    });
}

function decrement() {
    if (count > 0) {
        count -= 1;
        countEl.innerText = count;
        countEl.style.fontSize = "40px";
        setTimeout(() => {
            countEl.style.fontSize = "50px";
        }, 300);

        document.querySelectorAll('.box').forEach(box => {
            box.classList.remove('active');
        });
        playDecrementSound();
        playDecrementAnimation();
    } else {
        alertEl.classList.add("show");
        setTimeout(() => {
            alertEl.classList.remove("show");
        }, 2000);
    }
}
function playIncrementSound() {
    const audio = new Audio('Sounds.mp3');
    audio.play();
}

function playDecrementSound() {
    const audio = new Audio('Sounds.mp3');
    audio.play();
}

function playSaveSound() {
    const audio = new Audio('Save.mp3');
    audio.play();
}
