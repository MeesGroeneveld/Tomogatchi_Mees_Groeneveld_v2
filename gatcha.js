const button1 = document.querySelector("#happy");
const button2 = document.querySelector("#play");
const button3 = document.querySelector("#clean");
const petting = document.querySelector("#img1");
const l = document.querySelector("#progresbar");
let progresBarProgres = 0;

//milo heeft me geholpen met de progresbar
function progresBar() {
    if (progresBarProgres <= 0) {
        l.src = "images/progresbar1.png";
    }
    if (progresBarProgres === 1) {
        l.src = "images/progresbar2.png";
    }
    if (progresBarProgres === 2) {
        l.src = "images/progresbar3.png";
    }
    if (progresBarProgres === 3) {
        l.src = "images/progresbar4.png";
    }
    if (progresBarProgres === 4) {
        l.src = "images/progresbar5.png";
    }
    if (progresBarProgres === 5) {
        l.src = "images/progresbar6.png";
    }
    if (progresBarProgres === 6) {
        l.src = "images/progresbar7.png";
    }
}

function randomizeChange() {
    const randomplusorminus = Math.floor(Math.random() * 3);
    if (randomplusorminus === 1) {
        changeimage5();
    } else {
        progresBarProgres++;
    }
}

function changeimage1() {
    document.getElementById("img1").src = "images/happy.png";
    document.querySelector('p').textContent = "hmmmm tasty";
    randomizeChange();
    progresBar();
}

function changeimage2() {
    document.getElementById("img1").src = "images/silly.png";
    document.querySelector('p').textContent = "haha so silly";
    randomizeChange();
    progresBar();
}

function changeimage3() {
    document.getElementById("img1").src = "images/clean.png";
    document.querySelector('p').textContent = "wow so pretty!";
    randomizeChange();
    progresBar();
}

function changeimage4() {
    document.getElementById("img1").src = "images/comfy.png";
    document.querySelector('p').textContent = "that hits the spot";
    randomizeChange();
    progresBar();
}

function changeimage0() {
    document.getElementById("img1").src = "images/normal.png";
    document.querySelector('p').textContent = "what choice will you make";
}

function changeimage5() {
    document.getElementById("img1").src = "images/anger.png";
    document.querySelector('p').textContent = "uh oh he did not like that";
    progresBarProgres--;
    progresBar();
}

function changeimage6(){
    document.getElementById("img1").src = "images/win.png";
    document.querySelector('p').textContent = "you've made them the happiest they can be, well done!";
}

if (progresBarProgres === 7) {
    changeimage6;
}

button1.addEventListener('click', changeimage1);
button2.addEventListener('click', changeimage2);
button3.addEventListener('click', changeimage3);
petting.addEventListener('mouseenter', changeimage4); //w3 schools
petting.addEventListener('mouseleave', changeimage0); //w3 schools 
