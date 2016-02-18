//Determines probability distribution for a Milestone of a given size.
//Displays best and worst project completion times by week and the odds of hitting
//said deadline

var numberOfSampleIterations = 10000;
var result = new Array();
var milestoneSize;
var velocities;
var outputLabel = document.getElementById("output");
var lengthOfSprint;

$('#runApp').click(run);

function run() {
	resetState();
	getUserData();
	createProjection();
	printResult();
}

function resetState() {
	outputLabel.innerHTML = "";
  result = new Array();
}

function getUserData() {
	lengthOfSprint = Number(document.getElementById("lengthOfSprint").value);
	milestoneSize = Number(document.getElementById("milestoneSize").value);
  velocities = document.getElementById("velocities").value.replace(/\s/g, '').split(",");
  //convert string to number
  velocities = velocities.map(Number);
  //adjust for length of sprint
  velocities = velocities.map(adjustForLengthOfSprint);
  //console.log("milestonesize: " + milestoneSize + " velocities: " + velocities);
}

function adjustForLengthOfSprint(input) {
	var result = input / lengthOfSprint;
  return result;
}

function createProjection() {
  var sample = 0;
  var weeksThisIteration = 0;

	for (var i = 0; i < numberOfSampleIterations; i++) {
    sample = 0;
    weeksThisIteration = 0;

    while (sample < milestoneSize) {
    		var randomNumber = getRandomInt(0,velocities.length - 1);

        sample += velocities[randomNumber];
        //console.log('sample size ' + velocities[randomNumber]);
        weeksThisIteration++;
    }

    if(!result[weeksThisIteration]) {
			result[weeksThisIteration] = 0;//initialize the element
		}

    result[weeksThisIteration]++;
	}
}


function printResult() {
  var cumulativeResult = 0;

  var firstRun = true;
 for (var key in result) {
 			var resultAsNumber = result[key];
  		//var output = "It took " + key + " Weeks " + resultAsNumber + " times ";
      //console.log(output);

      var percentCalculation = resultAsNumber / numberOfSampleIterations * 100;
      cumulativeResult += percentCalculation;
      var percentageResult = "Odds it will be done by " + getDate(key) + " is " + Math.floor(cumulativeResult) + "% (" + key + " weeks)";
      if(firstRun) {
      		var output = "The earliest the milestone will be complete is " + key + " weeks from now or " + getDate(key) + ". The odds of finishing this early is " + Math.floor(cumulativeResult) + "%.<br />";
          //console.log(output);
          outputLabel.innerHTML += output + "<br />";
          firstRun = false;
      }else{
      	//console.log(percentageResult);
        outputLabel.innerHTML += percentageResult + ". <br />";
      }
  }
}

function getDate(weeksFromNow) {
	var daysFromNow = weeksFromNow * 7;
  var now = new Date();
  now.setDate(now.getDate() + daysFromNow);

  var monthFix = now.getMonth() + 1;
  //var result = monthFix + "/" + now.getDay() + "/" + now.getFullYear();
  //var result = now.toJSON().slice(0,10);
  var result = now.toString().split(' ').splice(1,3).join(' ')
  return result;
}


function getRandomInt(min, max) {
		//var randomResult = Math.random() * (max - min) + min;
    var randomResult = Math.floor(Math.random() * (max - min + 1)) + min;//not normal distribution
    //console.log(randomResult)
		return randomResult;
}
