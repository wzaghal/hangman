'use strict';

$(document).ready(function(){
	var chances = 6;
	var isDone = false;
	var correctKeys = 0;

	var wrongLetters=[];

	var answer = [{
		keyCode: 70,
		isDisplayed: false
	},
	{
		keyCode:65,
		isDisplayed: false
	},
	{
		keyCode: 87,
		isDisplayed: false
	},
	{
		keyCode: 90,
		isDisplayed: false

	}
	];



	
	var pushToList = function(keyCode){
		wrongLetters.push(keyCode);
		var letter= String.fromCharCode(keyCode);
		$('#wrong-letters').append('<li> ' + letter + '</li>');

	};


	var showLetter = function(index){
		$('.letter'+(index+1)).removeClass('hide-text');

	};



	$(document).keyup(function(e) {

		if (chances > 0 && !isDone){
			
			
			//Right letter	
			if( e.keyCode === answer[0].keyCode){ //f
				showLetter(0);
				answer[0].isDisplayed = true;
				correctKeys++;
			}
			else if (e.keyCode === answer[1].keyCode){ //a
				showLetter(1);
				showLetter(3);
				answer[1].isDisplayed = true;
				correctKeys++;
				correctKeys++;

			}else if (e.keyCode === answer[2].keyCode){ //w
				showLetter(2);
				answer[2].isDisplayed = true;
				correctKeys++;

			}
			else if (e.keyCode === answer[3].keyCode){ //z
				showLetter(4);
				answer[3].isDisplayed = true;
				correctKeys++;

			}



			//possibly a wrong character
			else{

				//definitely wrong character
				if (wrongLetters.indexOf(e.keyCode) === -1 ){

					//check if letter already used
					if (wrongLetters.indexOf(e.keyCode) >= 0){

						//tell user they used

					}else{
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
					
				}
				
			}

			if (correctKeys === 5){
				isDone=true;
			}


			
		}
		if (chances === 0){
			for (var i = 0; i < answer.length; i++){

				if (!answer[i].isDisplayed){
					//temp solution to char 'z'
					if (i === 3){
						showLetter(i+1);
					}
					showLetter(i);
					answer[i].isDisplayed = true;
				}
			}
			$('.fail').removeClass('hide');
		}else if (isDone){
			console.log('test');
			$('.success').removeClass('hide');
		}
	});


	



});





