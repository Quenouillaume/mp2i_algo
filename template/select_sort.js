let a;
function setup() {
	let cv = createCanvas(600, 600);
	cv.parent('p5Canvas')
	let pos = cv.position()

	a = new Algorithm();
	// générer et ajouter entrées pour l'algorithme

	var bu = createButton("Avancer")
	bu.position(pos.x + width - 100, pos.y + 50)
	bu.mousePressed(step);
	noLoop()
}


function step(){
	a.step();
	redraw();
}


function draw(){
	background(0xf0, 0xff, 0xff)
	a.draw();
}

