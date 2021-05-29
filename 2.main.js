

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = user_name;

user_name2 = localStorage.getItem("user_name2");

document.getElementById("user_name2").innerHTML =user_name2;

user_name3= localStorage.getItem("user_name3");

document.getElementById("user_name3").innerHTML = user_name3;

function preload(){
    
}

function setup(){
    canvas=createCanvas(890,550);
    canvas.position(320,50);
    
}

function draw(){
}

function save(){
    save("image.png");
}