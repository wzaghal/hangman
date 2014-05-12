'use strict';

$(document).ready(function(){
	var chances = 6;
	var isDone = false;
	var correctKeys = 0;
	var answerString='FAWAZ';
	var correctLetter = false;
	var wrongLetters=[];
	var answer=[];

	//loop through answerString to create an array of letter Object literals
	for (var i = 0; i < answerString.length; i++){
		answer[i]={keyCode: answerString.charCodeAt(i), isDisplayed: false};
	}


	// function that pushes the keycode as a letter
	//on to the html
	var pushToList = function(keyCode){
		wrongLetters.push(keyCode);
		var letter= String.fromCharCode(keyCode);
		$('#wrong-letters').append('<li> ' + letter + '</li>');

	};

	//shows the correct letter to user
	var showLetter = function(index){
		$('.letter'+(index+1)).removeClass('hide-text');

	};


	$(document).keyup(function(e) {

		//if the game is still running
		if (chances > 0 && !isDone){


			//loop through array to check
			// if users keycode matches
			for (i = 0 ; i< answer.length; i++){
				if (e.keyCode === answer[i].keyCode){
					showLetter(i);
					answer[i].isDisplayed = true;
					correctKeys ++;
					correctLetter = true;
				}
			}

			if (!correctLetter){
				//definitely wrong character
				if (wrongLetters.indexOf(e.keyCode) === -1 ){
					//push letter to screen
					pushToList(e.keyCode);
					

					if (chances===6){
						$('.head').removeClass('hide');
					}else if (chances===5){
						$('.body').removeClass('hide');
					}else if (chances===4){
						$('.leftArm').removeClass('hide');
					}else if (chances===3){
						$('.rightArm').removeClass('hide');
						//addClass
					}else if (chances===2){
						$('.leftLeg').removeClass('hide');
					}else if (chances===1){
						$('.rightLeg').removeClass('hide');
					}
					chances--;
				}
				if (correctKeys === 5){
					isDone=true;
				}
			}
			
		}
		if (chances === 0){
			for (i = 0; i < answer.length; i++){

				if (!answer[i].isDisplayed){
					showLetter(i);
					answer[i].isDisplayed = true;
				}
			}
			$('.fail').removeClass('hide');
		}else if (isDone){
			$('.success').removeClass('hide');
		}
	});


	



});





