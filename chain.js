class Chaain {
    constructor(bodyA,bodyB){
        var options= {
            bodyA:bodyA,
            bodyB:bodyB,
            length:105,
            stiffness:.54
        }
        this.chaain= Matter.Constraint.create (options)
        World.add(world,this.chaain)
    }
    display (){
        line (this.chaain.bodyA.position.x,this.chaain.bodyA.position.y,this.chaain.bodyB.position.x,this.chaain.bodyB.position.y)
    }
  };