//Initialize variables
var player = '';
var computer = '';
var vader = {
	name: "Darth Vader",
  health: 100,
	attack: 6,
	counter: 6,
	fight: false,
	alive: true,
	enemy: true
};
var skywalker = {
  name: "Luke Skywalker",
  health: 100,
	attack: 5,
	counter: 5,
	fight: false,
	alive: true,
	enemy: true
};
var yoda = {
  name: "Master Yoda",
  health: 100,
	attack: 7,
	counter: 7,
	fight: false,
	alive: true,
	enemy: true
};
var obi = {
  name: "Obi Wan Kinobi",
  health: 100,
	attack: 5,
	counter: 6,
	fight: false,
	alive: true,
	enemy: true
};


$(document).ready(function(){
	//Select the character to fight as for entire game & move to arena
	//Move enemies to the enemy section of the screen
	$(document).on('click', '.character', function(){
      player = $(this).data('character');
      if(player == 'vader'){
      	player = vader;
      	player.enemy = false;
      	$('#vader').removeClass('character').addClass('friend');
      	$('#skywalker, #yoda, #obi').removeClass('character').addClass('enemy');
      }else if(player == "skywalker"){
      	player = skywalker;
      	player.enemy = false;
      	$('#skywalker').removeClass('character').addClass('friend');
      	$('#vader, #yoda, #obi').removeClass('character').addClass('enemy');
      }else if(player == "yoda"){
      	player = yoda;
      	player.enemy = false;
      	$('#yoda').removeClass('character').addClass('friend');
      	$('#skywalker, #vader, #obi').removeClass('character').addClass('enemy');
      }else{
      	player = obi;
      	player.enemy = false;
      	$('#obi').removeClass('character').addClass('friend');
      	$('#skywalker, #vader, #yoda').removeClass('character').addClass('enemy');
      }
  });

	//On particular enemy click, set as in fight and move to arena
	$(document).on('click', '.enemy', function(){
		computer = $(this).data("character");
		if(computer == 'vader'){
				computer = vader;
      	computer.fight = true;
      	$('#vader').removeClass('enemy').addClass('enemy-fight');
      }else if(computer == 'skywalker'){
      	computer = skywalker;
      	computer.fight = true;
      	$('#skywalker').removeClass('enemy').addClass('enemy-fight');
      }else if(computer == 'yoda'){
      	computer = yoda;
      	computer.fight = true;
      	$('#yoda').removeClass('enemy').addClass('enemy-fight');
      }else{
      	computer = obi;
      	computer.fight = true;
      	$('#obi').removeClass('enemy').addClass('enemy-fight');
      }
	});

	//Check if enemy's health is at or below zero

	//The defender will immediately counter attack and deal damage

	//Check if player's health is at or below zero

	//Check if defender's health is at zero

	//If enemy has been defeated remove from defender area

	//Check if game has been won

	//If game has not been won, the player will pick a new enemy to fight
});

	//On attack button click, the player will attack the enemy 1 time and deal damage
	//Player's power increases by 6 on each attack
	function vaderAttack(){
		player.attack+=6;
		computer.health-=6;
		if(computer.name == 'Luke Skywalker'){
			skywalkerCounter();
		}else if(computer.name == 'Master Yoda'){
			yodaCounter();
		}else{
			obiCounter();			
		}
	};

	function skywalkerAttack(){
		player.attack+=5;
		computer.health-=5;
		if(computer.name == 'Darth Vader'){
			vaderCounter();
		}else if(computer.name == 'Master Yoda'){
			yodaCounter();
		}else{
			obiCounter();			
		}
	};

	function yodaAttack(){
		player.attack+=5;
		computer.health-=5;
		if(computer.name == 'Darth Vader'){
			vaderCounter();
		}else if(computer.name == 'Luke Skywalker'){
			skywalkerCounter();
		}else{
			obiCounter();			
		}
	};

	function obiAttack(){
		player.attack+=5;
		computer.health-=5;
		if(computer.name == 'Darth Vader'){
			vaderCounter();
		}else if(computer.name == 'Luke Skywalker'){
			skywalkerCounter();
		}else{
			yodaCounter();			
		}
	};