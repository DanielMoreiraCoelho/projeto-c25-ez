class Paper{
    constructor(x, y, raio){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        
        this.x = x;
        this.y = y;
        this.raio = raio;
        
        this.image = loadImage("paper.png");
    
        this.body = Bodies.circle(this.x, this.y,(this.raio - 20)/2, options);

        World.add(world, this.body);

        
    }

    display(){
        var paperPos = this.body.position


        push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER);
			//strokeWeight(4);
			imageMode(CENTER);
			fill(255)
			image(this.image, 0, 0, -this.raio,this.raio);
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()
    }
}