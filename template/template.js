// 

class MonAlgo extends Algorithm {
	constructor(){
		args = [] // noms des arguments en entrée de l'algorithme
		vars = [] // noms des variables utilisées dans l'algorithme
		lines = [] // lignes du pseudo-code
		blocks = [] // regroupement en blocs. NULL si aucun regroupement nécessaire
		transition = [] // liste des transitions pour chaque bloc.
						// un bloc d'instructions n'aura qu'une transition,
						// un bloc finissant par une conditionnelle aura deux
						// transitions: une si false, une si true
		super(args, vars, lines, blocks, transition)
	}

	_step(){
		//évaluer un bloc de l'algorithme
		switch (this.state){
			
		}
	}

	draw(){
		// dessiner l'état courant de l'algorithme
	}

}

let a;
function setup() {
	let cv = createCanvas(600, 600);
	cv.parent('p5Canvas')
	let pos = cv.position()

	a = new MonAlgo();
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

