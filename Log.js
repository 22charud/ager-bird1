class  Log{
    constructor(x,y,width,height,image){
        var option={
            restitution:0.8,
            density:1
            
            
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        this.width=width
        this.height=height
        this.image=image
         
        World.add(world,this.body)


    }
        display(){
            push()
            imageMode(CENTER)
            
           
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
        }
    }

