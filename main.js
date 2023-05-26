function setup(){
    canvas=createCanvas(400,400);
    video=createCapture(VIDEO);
    video.hide();
    canvas.position(570,300);
    filtercolor="";

}

function draw(){
  image(video,0,0,400,400);
  tint(filtercolor);

  fill(0, 166, 255);
  stroke(0, 166, 255);
  circle(25,8,60)
  
  fill(252, 3, 132);
  stroke(252, 3, 132);
  circle(85,8,60)

  fill(0, 166, 255);
  stroke(0, 166, 255);
  circle(145,8,60);
  
  fill(252, 3, 132);
  stroke(252, 3, 132);
  circle(205,8,60);
  
  fill(0, 166, 255);
  stroke(0, 166, 255);
  circle(265,8,60);
  
  fill(252, 3, 132);
  stroke(252, 3, 132);
  circle(325,8,60);
  
  fill(0, 166, 255);
  stroke(0, 166, 255);
  circle(385,8,60);

  //second//

  fill(252, 3, 132);
  stroke(252, 3, 132);
  circle(395,72,60);
  
  fill(0, 166, 255);
  stroke(0, 166, 255);
  circle(395,134,60);

  fill(252, 3, 132);
  stroke(252, 3, 132);
  circle(395,196,60);
    
  fill(0, 166, 255);
  stroke(0, 166, 255);
  circle(395,258,60);
    
  fill(252, 3, 132);
  stroke(252, 3, 132);
  circle(395,321,60);

  
  
  //third//
  
  fill(0, 166, 255);
  stroke(0, 166, 255);
  circle(25,390,60)
  
  fill(252, 3, 132);
  stroke(252, 3, 132);
  circle(85,390,60)

  fill(0, 166, 255);
  stroke(0, 166, 255);
  circle(145,390,60);
  
  fill(252, 3, 132);
  stroke(252, 3, 132);
  circle(205,390,60);
  
  fill(0, 166, 255);
  stroke(0, 166, 255);
  circle(265,390,60);
  
  fill(252, 3, 132);
  stroke(252, 3, 132);
  circle(325,390,60);
  
  fill(0, 166, 255);
  stroke(0, 166, 255);
  circle(385,390,60);

  //fourth
  fill(252, 3, 132);
  stroke(252, 3, 132);
  circle(5,74,60);
  
  fill(0, 166, 255);
  stroke(0, 166, 255);
  circle(5,134,60);

  fill(252, 3, 132);
  stroke(252, 3, 132);
  circle(5,196,60);
    
  fill(0, 166, 255);
  stroke(0, 166, 255);
  circle(5,258,60);
    
  fill(252, 3, 132);
  stroke(252, 3, 132);
  circle(5,321,60);
}

function take_snapshot(){
 save('photo.png');
}

function apply(){
    filtercolor=document.getElementById("color").value;
}
