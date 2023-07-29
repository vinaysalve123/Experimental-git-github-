// function change(){
//     var x = document.getElementById("name").value;
//     document.getElementById('para').style.color="red";
//     document.getElementById('para').style.cursor="pointer";
//     document.getElementById("para").style.fontSize="200px";
//     document.getElementById("para").innerHTML="Hello "+x;
//     document.getElementById("name").value = "";
// }

// function table(){
//     var y = document.getElementById("num").value;
//     var result = [];
//     for(var i=1;i<=10;i++){
//         result.push(" "+y+ " * "+ i+ " = "+(y*i)+"<br>");
//     }
//     document.getElementById("para").innerHTML = result;
// }

function oddEven(){
    var z = document.getElementById("num").value;
    document.getElementById("para").style.fontSize="50px";
    document.getElementById("para").style.color="Blue";
    if(z%2===0){
        document.getElementById("para").innerHTML =z+" is an Even Number";
    }
    else{
        document.getElementById("para").innerHTML= z+" is an Odd Number";
    }
}