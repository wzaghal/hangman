'use strict';

$(document).ready(function(){
	var chances = 6;
	var isDone = false;
	var correctKeys = 0;

	var letters=[70,65,87,90];
	var wrongLetters=[];


	var pushToList = function(keyCode){
		wrongLetters.push(keyCode);
		var letter= String.fromCharCode(keyCode);
		$('#wrong-letters').append('<li> ' + letter + '</li>');

	};


	$(document).keyup(function(e) {

		if (chances > 0 && !isDone){
			
			
			//Right letter	
			if( e.keyCode === letters[0]){ //f
				$('.letter1').removeClass('hide-text');
				correctKeys++;
			}
			else if (e.keyCode === letters[1]){ //a
				$('.letter2').removeClass('hide-text');
				$('.letter4').removeClass('hide-text');
				correctKeys++;
				correctKeys++;

			}else if (e.keyCode === letters[2]){ //w
				$('.letter3').removeClass('hide-text');
				correctKeys++;

			}
			else if (e.keyCode === letters[3]){ //z
				$('.letter5').removeClass('hide-text');
				correctKeys++;

			}



			//possibly a wrong character
			else if ( letters.indexOf(e.keyCode) === -1 ){

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
		console.log('test');
		$('.fail').removeClass('hide');
	}else if (isDone){
		console.log('test');
		$('.success').removeClass('hide');
	}});


	



});





