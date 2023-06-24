// Max search

function swap(T, i, j){
	let x = T[i]
	T[i] = T[j]
	T[j] = x
}


let lines = []

function preload(){
	lines = loadStrings("max_search.txt")

}


class MaxSearch extends Algorithm {
	constructor(){
       	let blocks = [[0], [1], [2], [3], [4], [5], [6]]
        
		let transition = [];
		transition[0] = 1
        transition[1] = 2
        transition[2] = [6, 3]
        transition[3] = [5, 4]
        transition[4] = 5
        transition[5] = 2
        transition[6] = 6

		super(['T', 'n'], ['i', 'i_max'], lines, blocks, transition)

    }

	_step(){
		switch (this.state){
			case 0:
	            this.vars.i_max = 0
	            break
	        case 1:
				 this.vars.i = 1
				 break

	        case 2:
	            return this.vars.i < this.vars.n

	        case 3:
	            return this.vars.T[this.vars.i] > this.vars.T[this.vars.i_max]

	        case 4:
	        	this.vars.i_max = this.vars.i
	            break

	        case 5:
	            this.vars.i = this.vars.i + 1
	            break

	        case 6:
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
		drawArrow(width/2-this.vars.n/2*s + this.vars.i_max*s, height/3-s/2, 1, 'red', 'i_max')

		drawArrow(width/2-this.vars.n/2*s + this.vars.i*s, height/3+s/2, -1, 'black', 'i')
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

	a = new MaxSearch();
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

