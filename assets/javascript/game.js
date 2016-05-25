//Initialize variables
var player = '';
var computer = '';
var vader = {
	name: "Darth-Vader",
  health: 6,
	attack: 5,
	counter: 7,
	fight: false,
	alive: true,
	enemy: true
};
var skywalker = {
  name: "Luke Skywalker",
  health: 6,
	attack: 5,
	counter: 7,
	fight: false,
	alive: true,
	enemy: true
};
var yoda = {
  name: "Yoda",
  health: 6,
	attack: 5,
	counter: 7,
	fight: false,
	alive: true,
	enemy: true
};
var obi = {
  name: "Obi Wan Kinobi",
  health: 6,
	attack: 5,
	counter: 7,
	fight: false,
	alive: true,
	enemy: true
};


$(document).ready(function(){
	//Select the character to fight as for entire game & move to arena
	//Move enemies to the enemy section of the screen
	$(document).on('click', '.character', function(){
      player = $(this).data("character");
      if(player == "vader"){
      	vader.enemy = false;
      	$("#vader").removeClass("character").addClass("friend");
      	$("#skywalker, #yoda, #obi").removeClass("character").addClass("enemy");
      }else if(player == "skywalker"){
      	skywalker.enemy = false;
      	$("#skywalker").removeClass("character").addClass("friend");
      	$("#vader, #yoda, #obi").removeClass("character").addClass("enemy");
      }else if(player == "yoda"){
      	yoda.enemy = false;
      	$("#yoda").removeClass("character").addClass("friend");
      	$("#skywalker, #vader, #obi").removeClass("character").addClass("enemy");
      }else{
      	obi.enemy = false;
      	$("#obi").removeClass("character").addClass("friend");
      	$("#skywalker, #vader, #yoda").removeClass("character").addClass("enemy");
      }
  });

	//On particular enemy click, set as in fight and move to arena
	$(document).on('click', '.enemy', function(){
		computer = $(this).data("character");
		if(computer == "vader"){
      	vader.fight = true;
      	$("#vader").removeClass("enemy").addClass("enemy-fight");
      }else if(computer == "skywalker"){
      	skywalker.fight = true;
      	$("#skywalker").removeClass("enemy").addClass("enemy-fight");
      }else if(computer == "yoda"){
      	yoda.fight = true;
      	$("#yoda").removeClass("enemy").addClass("enemy-fight");
      }else{
      	obi.fight = true;
      	$("#obi").removeClass("enemy").addClass("enemy-fight");
      }
	});

	//On attack button click, the player will attack the enemy 1 time and deal damage
	//Player's power increases by 6 on each attack

	//Check if enemy's health is at or below zero

	//The defender will immediately counter attack and deal damage

	//Check if player's health is at or below zero

	//Check if defender's health is at zero

	//If enemy has been defeated remove from defender area

	//Check if game has been won

	//If game has not been won, the player will pick a new enemy to fight
});