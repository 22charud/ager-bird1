class Slimshot{
    constructor(){
 //       var option={
 //           bodyA:bodyA
 //       ,   pointB:pointB,
 //       stiffness:0.04
 //       ,length:10
 //     
 //       }
        this.slim=loadImage("shoot.png")

World.add(world,this.slim)
    }
display(){
    image(this.slim,100,200,170,170)
    


}
}
