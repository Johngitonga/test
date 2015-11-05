function turtle(x,y){
	//createCanvas();
	
	
	drawBoxes(x,y, 10,50,30);
	drawBoxes(x-50,y+50,12,25,5);
	drawBoxes(x+25,y-50,5,10,5);
	//drawBoxes(175,150,5,10,5);
	//drawBoxes(237,75,5,10,5);
	//drawBoxes(164,75,5,10,5);
	
	
}

function setup(){
	createCanvas(720,480);
	background(0);
	noFill(0);
	stroke(255,0,0);
	
	

}

function drawBoxes(x,y, c,d,cls){
	for (var b=0; b<cls; b++){

		
		ellipse(x, y, c+b*2,d+b*2);

	}
	
}




function draw(){
	turtle(400,200);
	turtle(200,200);
	
}
