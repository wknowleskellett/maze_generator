function run() {
	locked = false;
	rBut.disabled=false;
	spots = [];
	for (let i=0; i<height; i++) {
		spots.push([]);
		for (let j=0; j<width; j++) {
			spots[i].push(new Spot(j, i));
		}
	}
	numSpots = width*height;

	rowConnections = [];
	for (let i=0; i<height+2; i++) {
		rowConnections.push([]);
		for (let j=0; j<width+1; j++) {
			let val;
			if (i==0 || i == height+1) {
				val=1;
			} else {
				val=0;
			}
			rowConnections[i].push(val);
		}
	}

	colConnections = [];
	for (let i=0; i<height+1; i++) {
		colConnections.push([]);
		for (let j=0; j<width+2; j++) {
			let val;
			if (j==0 || j == width+1) {
				val=1;
			} else {
				val=0;
			}
			colConnections[i].push(val);
		}
	}

	display();
}

function set(x) {
	let root = x;
	while (root.parent != root) {
		root = root.parent;
	}

	while (x.parent != root) {
		let parent = x.parent;
		x.parent = root;
		x = parent;
	}
	return root;
}

function randomChoice(numChoices) {
	return Math.floor(Math.random()*numChoices)
}

function tick() {
	// If we already solved it
	if (numSpots == 1) {
		colConnections[0][1] = 1;
		colConnections[height][width] = 1;
	} else {
		// If we still solving it
		let i=0;
		// Either stop when we meet our quota, or when we solve the maze
		// This approach lets the maze pause before adding the cute little
		// entrance/exit openings on the last step
		while ((instant || i<speed) && numSpots > 1) {
			merge();
			i++;
		}
	}
	display();
}

function merge() {
	// Make a connection
	let success = false;
	while (!success) {
		let x0, y0, x1, y1;
		let isHorizontal = randomChoice(2) == 1;
		if (isHorizontal) {
			// pick a horizontal pair
			x0 = randomChoice(width-1);
			y0 = randomChoice(height);
			x1 = x0+1;
			y1 = y0;
		} else {
			// pick a vertical pair
			x0 = randomChoice(width);
			y0 = randomChoice(height-1);
			x1 = x0;
			y1 = y0+1;
		}
		if (set(spots[y0][x0]) != set(spots[y1][x1])) {
			spots[y0][x0].parent.parent = spots[y1][x1].parent;

			if (isHorizontal) {
				rowConnections[y0+1][x0+1]=1;
			} else {
				colConnections[y0+1][x0+1]=1;
			}
			success = true;
		}
	}
	numSpots -= 1;
}

function display() {
	// Display
	let text = "";
	for (let i=0; i<height+1; i++) {
		for (let j=0; j<width+1; j++) {
			let intersection = 0;
			intersection += 8*colConnections[i][j];
			intersection += 4*rowConnections[i+1][j];
			intersection += 2*colConnections[i][j+1];
			intersection += rowConnections[i][j];
			text += chars[intersection];
		}
		text += "<br>";
	}

	let chat = document.getElementById("mazeBox");
	chat.innerHTML = text;
}
run();
