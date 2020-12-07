class block
{
	constructor(x,y)
	{
		var options={
			isStatic:false			
			}
		this.x=x;
		this.y=y;
		this.w=50
		this.h=50
		this.body=Bodies.rectangle(x, y,50,50, options);
		 World.add(world, this.body);
		 this.visibilty 

	}
	display()
	{
			var Pos=this.body.position;
			if(this.body.speed<10){		
			push()
			translate(Pos.x, Pos.y);
			rectMode(CENTER)
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()}
			else{
				push()
				World.remove(world, this.body)
				this.visibilty=this.visibilty-5
			pop()
		}
			
	}

}