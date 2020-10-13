class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visibilty = 255;
      
      
      

      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        
        push ();
        translate(pos.x, pos.y);
        rotate(angle);

        if(this.body.speed<3){
         
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        
        }
    
        else{
          World.remove(world, this.body);
         
          
          this.Visibility = this.Visibility-5;
          tint (255, this.Visibility)
          image(this.image, this.body.position.x, this.body.position.y);
            }
            pop ();  
      }
        
      

      score(){
        if(this.visibility<0 && this.visibility>105){
          score++;
        }
      }
    }
    