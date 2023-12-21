class Pigs {
    constructor(x,y,width,height){
        var option={
            restitution:0.8
            
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        this.width=width
        this.height=height
        this.image=loadImage("pig.png")
        World.add(world,this.body)

    }
        display(){
           
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)

        }
    }

   