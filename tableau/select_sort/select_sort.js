// Insert sort

function swap(T, i, j){
	let x = T[i]
	T[i] = T[j]
	T[j] = x
}

class SelectSort extends Algorithm {
	constructor(){

		let lines = [
"i = n-1",
"while i >= 0",
"	j = index of the largest element among T[0], ... T[i]",
"	swap T[j] and T[i]",
"	i = i - 1",
"return",
]
		let blocks = null
		let transition = []
		transition[0] = 1
        transition[1] = [5, 2]
        transition[2] = 3
        transition[3] = 4
        transition[4] = 1
        transition[5] = 5
		

		super(['T', 'n'], ['i', 'j'], lines, blocks, transition)
    }

	_step(){
		switch (this.state){
			case 0:
	            this.vars.i = this.vars.n - 1
	            break
	        case 1:
	            return this.vars.i >= 0

	        case 2:
	        	let k_max = 0;
	            for (var k = 0; k <= this.vars.i; k++) {
	            	if (this.vars.T[k] > this.vars.T[k_max]){
	            		k_max = k;
	            	}
	            }
	            this.vars.j = k_max;
	            break

	        case 3:
	            swap(this.vars.T, this.vars.j, this.vars.i)
	            break

	        case 4:
	        	this.vars.i = this.vars.i - 1;
	        	break
	        case 5:
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
			push()
			if (this.vars.i != null && i > this.vars.i){
				fill(0x77,0xdd,0x77)
			}
			square(width/2-this.vars.n/2*s + i*s, height/3, s)
			fill(0)
			text(this.vars.T[i],width/2-this.vars.n/2*s + i*s, height/3)
			pop()
		}

		if (this.vars.i != null){
			drawArrow(width/2-this.vars.n/2*s + this.vars.i*s, height/3-s/2, 1, 'black', 'i')
			push()
			textSize(35)
  			strokeWeight(0);
  			fill('black')
			text("i: " + this.vars.i, 50, height - 80)
			pop()
		}

		if (this.vars.j != null){
			drawArrow(width/2-this.vars.n/2*s + this.vars.j*s, height/3+s/2, -1, 'red', 'j')
			push()
			textSize(35)
  			strokeWeight(0);
  			fill('red')
			text("j: " + this.vars.j, 120, height - 80)
			pop()

		}
	}

}

let N = 10;
let l = [];
let a;
function setup() {
	let cv = createCanvas(600, 600);
	cv.parent('p5Canvas')
	for (var k = 0; k < N; k++) {
		l.push(floor(random(0,25*N)))
	}
	let pos = cv.position()

	a = new SelectSort();
	a.load_data({'T': l, 'n': N})

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

