
var userQuestions = [];
var results = [];
var rightChoice = [];
var wrongChoice = [];
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswers = 0;
var compMessage = [];


var intervalId;

var stopwatch = {

  time: 0,

  reset: function() {

    stopwatch.time = 30;
   

    $("#timer").html("00:30");

  },

  startWatch: function() {

    $("#start").on("click", function(){

        intervalId = setInterval(stopwatch.count, 30000)


    })

  },
  stop: function() {

    clearInterval(intervalId);
  },

 
  count: function() {

    stopwatch.time--;

    var currentTime = stopwatch.time;

    var timeDisplayed = stopwatch.timeConverter(currentTime);

    $("#timer").html(timeDisplayed);


  },

  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};

function initgame(){
    $(".begin").hide();
    $("#answer-section").hide();
    $("#start").addClass(".middle")

}

initgame();


$("#start").click(function(){
	$(".begin").show();
	$("#answer-section").hide();
	$("#pic-changer").hide();
	$("#start").hide();
	$('#question').show();

	startgame();

	function startgame() {
		 
     	stopwatch.startWatch();

  


	}

	 

});


var userPicks = $("#user-guesses").click();


$("#user-guesses").click(function(){

    

    if( userPicks || stopwatch.time === 0 ){

    	$("#pic-changer").show();
    	$("#answer-section").show();
    	$("#comp-prompt").html(compMessage);
    	$("#answer").html(rightChoice);
    	$("#user-guesses").hide();
    	$('#question').hide();
    	stopwatch.stop
    }

});














