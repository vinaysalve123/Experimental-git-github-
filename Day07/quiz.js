var questions =["4 + 3 = ? ", "10 - 3 = ?", "7 + 8 = ?", "5 + 9 = ?"];
var count = 0;

function myFunction(){
    var person = prompt("Please Enter Your Name: "," Jack Sparrow ");

    document.getElementById("demo").innerHTML = "Hello "+person+"! Please press the Button below to start the Quiz.";
    document.getElementById("star").style.display = "block";
}

function afunc(){
    document.getElementById("ques").innerHTML = questions[0];
    count=0;    
    document.getElementById("demo").innerHTML = "";
    document.getElementById("skr").innerHTML = "";
    document.getElementById("hela").style.display = "none";
}

function bfunc(i){
    var c = i+1;
    document.getElementById("ques").innerHTML = questions[c];
    ans();
}

function Next(){
    document.getElementById("result").innerHTML= "";
    var i =0;
    var c = questions.length;

    for(i; i<c;i++){
        if(document.getElementById("ques").innerHTML=== questions[i]){
            bfunc(i);
            break;
        }
    }
}

function score(){
    document.getElementById("skr").innerHTML= "Your Final Score is : "+ count + " Out of 4.";
}

function ans(){
    if(document.getElementById("ques").innerHTML==="4 + 3 = ? "){
       var opt1 = document.createElement("button");
       opt1.innerHTML = "6";
       document.body.appendChild(opt1);
       opt1.onclick = function opta(){
            document.getElementById("result").innerHTML ="Your answer is Wrong";
            document.getElementById("result").style.color = "red";
            setTimeout(Next, 1000);
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";         
       }
       

       var opt2 = document.createElement("button");
       opt2.innerHTML = "10";
       document.body.appendChild(opt2);
       opt2.onclick = function opta(){
            document.getElementById("result").innerHTML ="Your answer is Wrong";
            document.getElementById("result").style.color = "red";
            setTimeout(Next, 1000);
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
            
       }

       var opt3 = document.createElement("button");
       opt3.innerHTML = "7";
       document.body.appendChild(opt3);
       opt3.onclick = function opta(){
            document.getElementById("result").innerHTML ="Your answer is Correct";
            count++;
            document.getElementById("result").style.color = "green";
            setTimeout(Next, 1000);
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
            
       }

       var opt4 = document.createElement("button");
       opt4.innerHTML = "4";
       document.body.appendChild(opt4);
       opt4.onclick = function opta(){
            document.getElementById("result").innerHTML ="Your answer is Wrong";
            document.getElementById("result").style.color = "red";
            setTimeout(Next, 1000);
            opt1.style.display = "none";
            opt2.style.display = "none";
            opt3.style.display = "none";
            opt4.style.display = "none";
            
       }
    }

    else if(document.getElementById("ques").innerHTML==="10 - 3 = ?"){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "6";
        document.body.appendChild(opt1);
        opt1.onclick = function opta(){
             document.getElementById("result").innerHTML ="Your answer is Wrong";
             document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt3.style.display = "none";
             opt4.style.display = "none";
             
        }
        
 
        var opt2 = document.createElement("button");
        opt2.innerHTML = "10";
        document.body.appendChild(opt2);
        opt2.onclick = function opta(){
             document.getElementById("result").innerHTML ="Your answer is Wrong";
             document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt3.style.display = "none";
             opt4.style.display = "none";
             
        }
 
        var opt3 = document.createElement("button");
        opt3.innerHTML = "9";
        document.body.appendChild(opt3);
        opt3.onclick = function opta(){
             document.getElementById("result").innerHTML ="Your answer is Wrong";
             document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt3.style.display = "none";
             opt4.style.display = "none";
             
        }
 
        var opt4 = document.createElement("button");
        opt4.innerHTML = "7";
        document.body.appendChild(opt4);
        opt4.onclick = function opta(){
             document.getElementById("result").innerHTML ="Your answer is Correct";
             count++;
             document.getElementById("result").style.color = "green";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt3.style.display = "none";
             opt4.style.display = "none";
             
        }
     }

     else if(document.getElementById("ques").innerHTML==="7 + 8 = ?"){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "10";
        document.body.appendChild(opt1);
        opt1.onclick = function opta(){
             document.getElementById("result").innerHTML ="Your answer is Wrong";
             document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt3.style.display = "none";
             opt4.style.display = "none";
             
        }
        
 
        var opt2 = document.createElement("button");
        opt2.innerHTML = "15";
        document.body.appendChild(opt2);
        opt2.onclick = function opta(){
             document.getElementById("result").innerHTML ="Your answer is Correct";
             count++;
             document.getElementById("result").style.color = "green";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt3.style.display = "none";
             opt4.style.display = "none";
             
        }
 
        var opt3 = document.createElement("button");
        opt3.innerHTML = "17";
        document.body.appendChild(opt3);
        opt3.onclick = function opta(){
             document.getElementById("result").innerHTML ="Your answer is Wrong";
             document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt3.style.display = "none";
             opt4.style.display = "none";
             
        }
 
        var opt4 = document.createElement("button");
        opt4.innerHTML = "12";
        document.body.appendChild(opt4);
        opt4.onclick = function opta(){
             document.getElementById("result").innerHTML ="Your answer is Wrong";
             document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt3.style.display = "none";
             opt4.style.display = "none";
             
        }
     }

     else if(document.getElementById("ques").innerHTML==="5 + 9 = ?"){
        var opt1 = document.createElement("button");
        opt1.innerHTML = "14";
        document.body.appendChild(opt1);
        opt1.onclick = function opta(){
             document.getElementById("result").innerHTML ="Your answer is Correct";
             count++;
             document.getElementById("result").style.color = "green";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt3.style.display = "none";
             opt4.style.display = "none";
             
        }
        
 
        var opt2 = document.createElement("button");
        opt2.innerHTML = "19";
        document.body.appendChild(opt2);
        opt2.onclick = function opta(){
             document.getElementById("result").innerHTML ="Your answer is Wrong";
             document.getElementById("result").style.color = "green";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt3.style.display = "none";
             opt4.style.display = "none";
             
        }
 
        var opt3 = document.createElement("button");
        opt3.innerHTML = "10";
        document.body.appendChild(opt3);
        opt3.onclick = function opta(){
             document.getElementById("result").innerHTML ="Your answer is Wrong";
             document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt3.style.display = "none";
             opt4.style.display = "none";
             
        }
 
        var opt4 = document.createElement("button");
        opt4.innerHTML = "12";
        document.body.appendChild(opt4);
        opt4.onclick = function opta(){
             document.getElementById("result").innerHTML ="Your answer is Wrong";
             document.getElementById("result").style.color = "red";
             setTimeout(Next, 1000);
             opt1.style.display = "none";
             opt2.style.display = "none";
             opt3.style.display = "none";
             opt4.style.display = "none";
             
        }
     }
    
     else{
        document.getElementById("ques").innerHTML = "Quiz Ends Here.";
        score(count);
     }
}