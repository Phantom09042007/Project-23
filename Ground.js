class Ground_class {
    constructor(x,y,w,h){
        this.Ground = Bodies.rectangle(x,y,w,h);
        this.width = w;
        this.height = h;
        World.add(world,this.Ground);

    }

    display(){
        push();
        var pos = this.Ground.position
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
        pop();

    }
}