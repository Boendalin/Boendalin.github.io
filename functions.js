let project1 = document.getElementById("1");
let project2 = document.getElementById("2");
let project3 = document.getElementById("3");

let button1 = document.getElementById("Humidity");
let button2 = document.getElementById("Beans");
let button3 = document.getElementById("FullStack");

function showProject1() {
    project1.style.display = "block";
    button1.removeEventListener("click", showProject1)
    button1.addEventListener('click', hideProject1);
    
}

function hideProject1() {

    project1.style.display = "none";
    button1.removeEventListener("click", hideProject1)
    button1.addEventListener('click', showProject1);
}

// Project 2
function showProject2() {
    project2.style.display = "block";
    button2.removeEventListener("click", showProject2)
    button2.addEventListener('click', hideProject2);
}

function hideProject2() {

    project2.style.display = "none";
    button2.removeEventListener("click", hideProject2)
    button2.addEventListener('click', showProject2);
}

// Project 3
function showProject3() {
    project3.style.display = "block";
    button3.removeEventListener("click", showProject3)
    button3.addEventListener('click', hideProject3);
}

function hideProject3() {

    project3.style.display = "none";
    button3.removeEventListener("click", hideProject3)
    button3.addEventListener('click', showProject3);
}

button1.addEventListener('click', showProject1);
button2.addEventListener('click', showProject2);
button3.addEventListener('click', showProject3);
