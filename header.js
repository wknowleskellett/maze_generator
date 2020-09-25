// This is all the boxes
const chars = [
	'┼',
	'┬',
	'┤',
	'┐',
	'┴',
	'─',
	'┘',
	'╴',
	'├',
	'┌',
	'│',
	'╷',
	'└',
	'╶',
	'╵',
	'&nbsp;',
	'■',
	'□',
	'▪',
	'▫'
];

let locked;

let spots;
let numSpots;
let rowConnections;
let colConnections;

let width=3;
let height=4;
let speed = 5;
let instant = false;

// Set default values
// for widthbox, heightbox, checkbox, and speedbox
let wBox=document.getElementById("width");
let hBox=document.getElementById("height");
let cBox=document.getElementById("instant");
let sBox=document.getElementById("speed");
wBox.value = width;
hBox.value = height;
cBox.checked = instant;
sBox.value = speed;

let rBut = document.getElementById("run_button");

// Secret options (shhhh!)
// Coordinates of first box of pair, and orientation of pair
let xBox = document.getElementById("x_value");
let yBox = document.getElementById("y_value");
let oBut = document.getElementById("horizontal");
