class Box
{
    constructor(x,y,w,h)
    {
        
        var bounceee =
        {
         isStatic:true,
         friction:1


        }
        this.box = Bodies.rectangle (x,y,w,h,bounceee)
        World.add(myWorld,this.box)        
        this.w=w
        this.h=h
    }
    display()
    {
        
        push()
        translate(this.box.position.x,this.box.position.y)
        rotate(this.box.angle)
        fill("red") 
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
    }
}