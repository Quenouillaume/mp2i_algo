

class Algorithm {
	constructor(args, vars, lines, blocks, transition){
		this.lines = lines
		if (blocks == null){
			blocks = []
			for (var i in lines){
				blocks.push(i)
			}
		}
		this.blocks = blocks
		this.transition = transition

		this.vars = {};
		for (let k of args){
			this.vars[k] = null
		}
		for (let k of vars){
			this.vars[k] = null
		}

		this.state = null
		this.end_state = transition.length - 1

		let p = createElement('pre')
		p.position(width+50, 50)
		this.code = createElement('code')
		this.code.parent(p)
		this.update_code()

	}

	update_code(){
		let t = ""
        for (var i = 0; i < this.blocks.length; i++) {
        	if (i == this.state){
				t += "<curr_state>"        		
        	}
        	let b = []
        	for (let j of this.blocks[i]){
        		b.push(this.lines[j])
        	}

        	t += b.join('\n')
        	if (i == this.state){
				t += "</curr_state>"        		
        	} 
        	t += "\n"
        }
        this.code.html(t)
	}

	load_data(kwargs){
		for (let x in kwargs){
			this.vars[x] = kwargs[x]
		}
		this.state = 0
		this.update_code()

	}

	_step(){
		console.log("Step not implemented")
		throw new Error("Step function not implemented")
	}

	step(){
		let nxt = this._step()
        if (nxt == null){
        	console.log("no choice")
            this.state = this.transition[this.state]
        }
        else{
        	console.log("choice: " + Number(nxt))
            this.state = this.transition[this.state][Number(nxt)]
        }
        console.log("Current state: " + this.state)
        
        this.update_code()

	}

	finish(){
		while (this.state != this.end_state){
			this.step()
		}
		this.draw()
	}


	draw(){
		console.log(this.state, this.vars)	
	}

}


