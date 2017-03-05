var userQuestions = [
	{"question":"When was monopoly made?", "rightChoice": "1935", "wrongChoice": ["1930","1920","1940"]}, 
	{"question":"Who invented monopoly?", "rightChoice": "Charles Darrow", "wrongChoice": ["John Handcock","Bill Bob","Horton Who"]}, 
	{"question":"What is my favorite piece?", "rightChoice": "Car", "wrongChoice": ["dog","iron","hat"]},
	{"question":"What is Mr Monopoly's true name?", "rightChoice": "Rich Uncle Pennybags", "wrongChoice": ["Rich Uncle Dollarbags","Rich Uncle Millonbags","Rich Uncle Bigbags"]}
];


var question = "";
var results = "";
var rightChoice = "";
var wrongChoice = "";
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswers = 0;
var questionIndex = 0;
var compMessage = ["Correct!", "Wrong!"];


var intervalId;

var stopwatch = {

  time: 30,

  reset: function() {

    stopwatch.time = 30;
   

    $("#timer").text("00:30");


  },

  startWatch: function() {


        intervalId = setInterval(stopwatch.count, 1000)
        console.log("Start Watch");

  },
  stop: function() {

    clearInterval(intervalId);
  },

 
  count: function() {
  	console.log("runningCount");

    stopwatch.time--;

    var currentTime = stopwatch.time;

    var timeDisplayed = stopwatch.timeConverter(currentTime);

    $("#timer").text(timeDisplayed);

    if(stopwatch.time === 0){
    	showResult();
    }


  },

  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return  seconds;
  }
};

function resetStart(){
  stopwatch.stop();
  stopwatch.reset();


}

function initgame(){
    $(".begin").hide();
    $("#answer-section").hide();
    $("#start").addClass(".middle")


}


$("#start").click(function(){
	$(".begin").show();
	$("#answer-section").hide();
	$("#pic-changer").hide();
	$("#start").hide();
	$('#question').show();
	 event.preventDefault();

	startgame();
	

});

function startgame() {
		 
 	stopwatch.startWatch();

 	// console.log(questionIndex);

 	// debugger

	$("#question").text(userQuestions[questionIndex].question);
 	$("#right-guesses").text(userQuestions[questionIndex].rightChoice);

 	$("#wrong-guesses1").text(userQuestions[questionIndex].wrongChoice[0]);
 	$("#wrong-guesses2").text(userQuestions[questionIndex].wrongChoice[1]);
 	$("#wrong-guesses3").text(userQuestions[questionIndex].wrongChoice[2]);

 	$(".begin").show();
	$("#answer-section").hide();
	$("#pic-changer").hide();
	$("#start").hide();
	$('#question').show();
	$("#comp-prompt").hide();

}

function showResult(){

	var userPicks = $(this).text();

	console.log(userPicks);
	

    if( (userPicks) || (stopwatch.time === 0) ){

    	$("#pic-changer").show();
    	$("#answer-section").show();
    	$("#comp-prompt").text(compMessage);
    	$("#comp-prompt").show();
    	$("#answer").text(userQuestions[questionIndex].rightChoice);
    	$("#user-guesses").hide();
    	$('#question').hide();
    	stopwatch.stop();

    }

   	if( userPicks === userQuestions[questionIndex].rightChoice){
   		$("#comp-prompt").text(compMessage[0]);
   	}else{
   		$("#comp-prompt").text(compMessage[1]);

   	};

   // make a timer that calls startgame after 5 seconds delay

   questionIndex++;

   setTimeout(startgame, 3000);

	

}

// function endGame(){
// 	$(".begin").hide();
// 	$("#answer-section").hide();
// 	$("#pic-changer").hide();
// 	$("#start").hide();
// 	$('#question').hide();
// 	$("$comp-prompt").html("<div>THE END</div>")

// }

$("#user-guesses button").click(showResult);
// endGame();
initgame();

  
















