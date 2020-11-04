class  box {
    constructor()
    {
        var options = { restitution : 1 } ;
        this.body = Bodies.rectangle(200,100,50,50,options)  ;
        World.add(myWorld,this.body) ; 
        
   }
   display(){
       var pos ;
       pos = this.body.position ;
       rectMode(CENTER);
       Fill("brown");
       rect(box.x,box.y,this.width,this.height);
   }

} 