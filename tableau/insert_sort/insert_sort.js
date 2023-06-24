// Insert sort

function swap(T, i, j){
	let x = T[i]
	T[i] = T[j]
	T[j] = x
}

class InsertSort extends Algorithm {
	constructor(){

		let lines = [
"i = 0",
"while i < n",
"	j = i",
"	while j > 0 and T[j-1] > T[j]:",
"		swap T[j] and T[j-1]",
"		j = j-1",
"	i = i+1",
"return",
]
		let blocks = null
		let transition = []
		transition[0] = 1
        transition[1] = [7, 2]
        transition[2] = 3
        transition[3] = [6, 4]
        transition[4] = 5
        transition[5] = 3
        transition[6] = 1
        transition[7] = 7
		

		super(['T', 'n'], ['i', 'j'], lines, blocks, transition)
    }

	_step(){
		switch (this.state){
			case 0:
	            this.vars["i"] = 0
	            break
	        case 1:
	            return this.vars["i"] < this.vars["n"]

	        case 2:
	            this.vars["j"] = this.vars["i"]
	            break
	        case 3:
	            return this.vars["j"] > 0 && this.vars["T"][this.vars["j"]-1] > this.vars["T"][this.vars["j"]]

	        case 4:
	            swap(this.vars["T"], this.vars["j"], this.vars["j"]-1)
	            break
	        case 5:
	            this.vars["j"] = this.vars["j"] - 1
	            break
	        case 6:
	            this.vars["i"] = this.vars["i"] + 1
	            break
	        default:
	            break				
		}
	}

	draw(){
		rectMode(CENTER);
		textAlign(CENTER, CENTER)
		let s = 40;
		textSize(s/2);
		fill(255);
		for (var i = 0; i < this.vars.n; i ++){
			square(width/2-this.vars.n/2*s + i*s, height/3, s)
			push()
			fill(0)
			text(this.vars.T[i],width/2-this.vars.n/2*s + i*s, height/3)
			pop()
		}

		drawArrow(width/2-this.vars.n/2*s + this.vars.i*s, height/3+s/2, -1, 'red', 'i')
		if (this.vars.j != null){
			drawArrow(width/2-this.vars.n/2*s + this.vars.j*s, height/3-s/2, 1, 'blue', 'j')
		}
	}

}

let N = 10;
let l = [];
let a;
function setup() {
	createCanvas(600, 600);
	for (var k = 0; k < N; k++) {
		l.push(floor(random(0,25*N)))
	}

	a = new InsertSort();
	a.load_data({'T': l, 'n': N})

	var bu = createButton(">>>")
	bu.position(width - 50, 50)
	bu.mousePressed(step);
	noLoop()
}


function step(){
	a.step();
	redraw();
}


function draw(){
	background(122)
	a.draw();
}

