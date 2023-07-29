function changeColor(){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);

    var color = "rgb(" +r+ ", "+g+ ", "+b+")";
    document.getElementById("target").style.backgroundColor= color;
    console.log(color);
}