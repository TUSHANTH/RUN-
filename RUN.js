function movement(){
    const CUBE = document.getElementById("cube");
    if(CUBE.classList != "JU"){
        CUBE.classList.remove("JD");
        CUBE.classList.add("JU");
    }
    else{
        CUBE.classList.remove("JU");
        CUBE.classList.add("JD");
    }
}
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        document.getElementById("jumpsound").play();
        movement();
    }
 })
var X=0;
var count=1;
function moving(){
    const Hole2 = document.getElementById("Hole2");
    const Hole1 = document.getElementById("Hole1");
    const CUBE = document.getElementById("cube");
    var GI = setInterval(() => {
        count++;
        document.getElementById("score2").innerHTML=count.toString();
        document.getElementById("score1").innerHTML=count.toString();
        time=Math.floor((Math.random() * 5) + 1);
        if (time%2==0 && Hole2.classList != "hole1" && Hole1.classList != "hole1"){
            Hole2.style.display="block";
            Hole2.classList.add("hole1");

            setTimeout(function(){
                if(X==0){
                    Hole2.classList.remove("hole1");
                    Hole2.style.display="none";
                }
            },1200)
        }
        if (time%2!=0 && Hole1.classList != "hole1" && Hole2.classList != "hole1"){
            Hole1.style.display="block";
            Hole1.classList.add("hole1");

            setTimeout(function(){
                if(X==0){
                Hole1.classList.remove("hole1");
                Hole1.style.display="none";
                }
            },1200)
        }
    },1);
    var UW = setInterval(() => {
        let cpos = parseInt(window.getComputedStyle(CUBE).getPropertyValue("top"))
        let H2pos = parseInt(window.getComputedStyle(Hole2).getPropertyValue("margin-left"))
        let H1pos = parseInt(window.getComputedStyle(Hole1).getPropertyValue("margin-left"))
        if(H2pos<200 && cpos==49 && Hole2.classList == "hole1" ){
            document.getElementById("pregame").pause();
            document.getElementById("lost").play();
            document.getElementById("background_1").style.display="block";
            Hole2.style.animationPlayState="paused";
            clearInterval(GI);
            clearInterval(UW);
            X=1;
        }
        else if(H1pos<200 && cpos==0 && Hole1.classList == "hole1" ){
            document.getElementById("pregame").pause();
            document.getElementById("lost").play();
            document.getElementById("background_1").style.display="block";
            Hole1.style.animationPlayState="paused";
            clearInterval(GI);
            clearInterval(UW);
            X=1;
        }
    }, 1);
}
function preg(){
        document.getElementById("pregame").play();
        document.getElementById("pregame").loop = true;
}
function move(){
    document.getElementById("pregame").loop = false;
    document.getElementById("button").play();
    document.getElementById("cube").style.backgroundImage= "url('https://media.tenor.com/images/c60d18dfa3e932443c0172f8805a5307/tenor.gif')";
    moving()
    document.getElementById("hsd").style.display="block";
    document.getElementById("highscore1").style.display="block";
    document.getElementById("start").parentNode.removeChild(start);
    document.getElementById("info").remove();
    document.getElementById("info1").remove();
    setTimeout(() => {
       preg(); 
    },500);
}
function part1(txt){
    const person = {
      name: txt,
      Score: count,
    }
    p = JSON.parse(window.localStorage.getItem('user'));
    if(p!=null){
        if(p.Score<=person.Score){
            localStorage.setItem('user',JSON.stringify(person))
        }
    }
    else{
        localStorage.setItem('user',JSON.stringify(person))
    }
    location.reload();
  }
    window.onload=function() {
    p = JSON.parse(localStorage.getItem('user'));
    if(p!=null){
        document.getElementById("highscore1").innerHTML= p.name + "  " + p.Score  ;
    }
    else{
        document.getElementById("highscore1").innerHTML="No high score";
    }
}
