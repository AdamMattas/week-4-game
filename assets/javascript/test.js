var players = function (hitpoints, strength, luck){
this.hitpoints = hitpoints;
this.strength = strength;
this.luck = luck;
};


var player = (300,100,100);


var monsters = function(hitpoints, strength, luck){
this.hitpoints = hitpoints;
this.strength = strength;
this.luck = luck; 
};
//monsters
var reaper = new monsters(250,17,3);
var dragon = new monsters(1000,50,5);
var orc = new monsters(100,12,2);
var ogre = new monsters(50,10,1);




//string names
var names;


//random number
var randomnumber = Math.floor(Math.random(10)*10);


//selected monster
var selectedmonster;
if (randomnumber >= 0 && randomnumber < 3){
selectedmonster = reaper;
names = "reaper";
}
else if (randomnumber > 3 && randomnumber < 6){
selectedmonster = dragon;
names = "dragon";
}
else if (randomnumber > 6){
selectedmonster = orc;
names = "orc";
}
else if (randomnumber > 9){
selectedmonster = ogre;
names = "ogre";
}




//battle code


var battle = 1;
var monsterdead = 0;
var playerdead = 0;


// player first, player turn =1 
var playerturn = 1;
var monsterturn = 0;


while (battle == 1) {
//my turn
while (playerturn == 1) {
//attack script
selectedmonster.health = selectedmonster.health - Math.ceil(Math.random(player.attack)*10);
console.log(names + "'s Health is now " + selectedmonster.health);
playerturn = 0;
monsterturn = 1;
}


//monster turn


while (monsterturn ==1) {
//attack script
player.health = player.health - Math.ceil(Math.random(selectedmonster.attack)*10);
console.log("Player's Health is now " + player.health);
playerturn = 1;
monsterturn = 0;
}


//when the opponent dies
if (selectedmonster.health < 0) {
monsterdead = 1;
battle = 0;
}


//if I die... lolz


if (player.health < 0) {
playerdead = 1;
battle = 0;
}
}