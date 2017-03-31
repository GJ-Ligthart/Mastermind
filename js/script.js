var color = ["red", "blue", "green", "yellow", "purple", "orange", "white", "black"];
var random = [];
var color1 = "";
var row = 1,count = 1;

    for (var i = 0; i < 4; i++ ) {
        random[i] = color [Math.floor(Math.random() * color.length)];
    }

document.getElementById("color").addEventListener("click", function(event){
    color1 = event.target.id;
    console.log(color1);
 });

document.getElementsByClassName("field")[0].addEventListener("click", function(event){
    event.target.style.backgroundColor = color1;
});

console.log(random);

var button = document.getElementById('button');

// button.onclick = function () {
//     color = color.shift();
//     color1.push(color);

//     button.style.backgroundColor = color;
// };


function myFunction() {
    color.push("color");
    document.getElementById("demo").innerHTML = color;
}