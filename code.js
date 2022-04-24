var playing = false;
var score = Number(document.getElementById("scorevalue").innerHTML);
var qno = 0;
var x= 60;
var currtime = document.getElementById("timevalue");
var que = ["Guru","Ganesh","Ashwanth","Akil","Daniel","Iyyapan","Annachi","Maapla","Baalu","Badri","JSurya","Blesson","Boopathi","Jayakandan"];
var choice = {
  Guru:["Coder","Gamer","Domer","Joker"],
  Ganesh:["Enanga","Boomer","Domer","Charmer"],
  Ashwanth:["Swagger","Korean","Joker","Domer"],
  Akil:["Cricketer","Chumma","Kitkat","Aamai"],
  Daniel:["Hey","Topper","Sosika","5km 5min"],
  Iyyapan:["Footballer","Friends?","Fitness","Penaldo"],
  Annachi:["Polite","Innocent","Kolli hills","Enna p"],
  Maapla:["Cute","MF","Kavuchi","Sosika"],
  Baalu:["Papervalue","Topcoder","Akka","Tirunalveli"],
  Badri:["Doubt","Doubt","Doubt","Doubt"],
  JSurya:["Streak","Married","Handsome","MF"],
  Blesson:["😊","😊","😊","😊"],
  Boopathi:["Repchange","Topper","Bomer","Listener"],
  Jayakandan:["PADIPS","Jeans","Funny","Playgod"]
};
var crct = ["Gamer","Boomer","Korean","Kitkat","Sosika","Friends?","Kolli hills","Kavuchi","Papervalue","Doubt","Streak","😊","Repchange","Jeans"];

// if we click on start/reset
document.getElementById("startreset").onclick =
function(){

  //if we are playing
  if(playing==true){
    location.reload(); //reload the page
  }
  else{
    playing=true;
    document.getElementById("instruction").innerHTML = "Click on the correct answer"
    document.getElementById("score").style.visibility = "visible";
    //set score to 0
    score = 0;
    //show countdown box
    document.getElementById("timeremaining").style.visibility="visible";
    document.getElementById("startreset").style.right = "150px";
    //reduce time by 1 sec in loops
    var changetime = startcountdown(x,currtime);
    //change button to reset
    document.getElementById("startreset").innerHTML = "Reset";

        //generate new question
    generateque(que,choice,qno);
  }
  }
  //if we click on answer box
  for(let i=1;i<=4;i++){
    document.getElementById("box"+i).onclick = function(){
      console.log("box"+i+" is clicked");
      console.log(document.getElementById("box"+i).innerHTML);
      console.log(crct[qno]);
      if(playing == true){
        if(this.innerHTML == crct[qno]){
          console.log(crct[qno] == this.innerHTML);
          console.log(this.innerHTML);
          console.log(crct[qno]);
          console.log(name);
          //yes
          //increase score
          score ++;
          document.getElementById("scorevalue").innerHTML = score;
          //show correct box for 1 sec
          show("correct");
          hide("wrong");
          // startcountdown(x,score,currtime);
          setInterval(function(){hide("correct")},1000)
          //generate new question
          qno++;
          generateque(que,choice,qno);

        }
        else{
          //show try again box for one second
          show("wrong");
          hide("correct")
          setInterval(function(){hide("wrong")},1000)
          // document.getElementById("wrong").style.display="none"
        }
      }
    }
  }

  function hide(Id){
      document.getElementById(Id).style.display = "none";
  }

  function show(Id){
    document.getElementById(Id).style.display = "unset";
  }

  function stopCountdown(action){
    clearInterval(action);
  }

  function startcountdown(x,currtime){
    setInterval(function(){
    x--;
    if(x < 0){
      //no -> gameover
      // document.getElementById("gameover").style.display = "unset"
      // clearInterval(changetime);
      clearInterval();
      show("gameover");
      document.getElementById("gameovervalue").innerHTML = score;
      document.getElementById("question").style.visibility = "hidden";
    }
    else{
      //yes? -> continue
      currtime.textContent=x;
    }},1000)
  }

  function generateque(que,choice,i){
    if(i==14){
      document.getElementById("timeremaining").innerHTML = "Time Over";
      show("gameover");
      document.getElementById("gameovervalue").innerHTML = score;
      document.getElementById("question").style.display = "none";
    }
    else{
      var name = que[i];
      document.getElementById("question").innerHTML = name;
      document.getElementById("question").style.color = "white";
      document.getElementById("box1").innerHTML = choice[name][0]
      document.getElementById("box2").innerHTML = choice[name][1]
      document.getElementById("box3").innerHTML = choice[name][2]
      document.getElementById("box4").innerHTML = choice[name][3]
    }

  }
  //if we are playing
      // reload page
  //if not playing
      //set score to 0
      //show countdown box
      //reduce time by 1 sec in loops
        //timeleft?
            //yes? -> continue
            //no -> gameover
        //change button to reset
        //generate new // QUESTION:

//if we click on answer box
    // if we are playing
      //correct?
          //yes
              //increase score
              //show correct box for 1 sec
              //generate new question
          //show try again box for one second
