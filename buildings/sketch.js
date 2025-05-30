//Base functions
let ground = 350;
let buldingNum = 0
let buildingType = []
let edge1 = 0
let edge2 = 1000
let bottomFloor = 100

//building points
let pointSeletion = 50;
let point1 = 0
let point2 = 250
let point3 = 500
let point4 = 750

let points = [point1,point2,point3,point4]

//tree or bush 
let treeType=[]
let treePoints=[125,375,625,875]
  
function setup() {
  createCanvas(1000, 400);
  background(45,45,255)
}

function draw() {
  background(220);
  groundCover()
  
    for (i=0;i <buildingType.length; i +=1){
    if (buildingType[i]=="S"){
      pointSeletion = points[i]
      buildingShort(points[i])
      
    }
    else if(buildingType[i]=="M"){
      pointSeletion = points[i]
      buildingMed(points[i])
    }
    else if(buildingType[i]=="L"){
      pointSeletion = points[i]
      buildingTall(points[i])
    }
    else{

    }
  }
  
    for (i=0;i <treeType.length; i +=1){
      if (treeType[i]=="B"){
        pointSeletion = treePoints[i]
        Bush(treePoints[i])
      }
      else if (treeType[i]=="T"){
        pointSeletion = points[i]
        tree(treePoints[i])
    }else{
      
    }
    }
}
function mousePressed(){
  
  for (buildingNum=0;buildingNum<4; buildingNum++){
    buildingType.push(random(["S","L","M"]))
    treeType.push(random(["B","T"]))
  }
  

  
}

function groundCover(){
  line(edge1,ground,edge2,ground)
  //x1,y1,x2,y2
  fill(67)
  rect(0,ground,edge2,height-ground)
  // x, y, w, h
  

  
}
function buildingTall(pointSeletion){
  fill(100)
  rectMode(CORNER)
  rect(pointSeletion,bottomFloor,100,250)
  //door
  fill(255)
  rect(pointSeletion+5,ground-20,10,20)
  //window
  fill(255)
  for (let i =0; i<240;i+=40){
    rect(pointSeletion+30,ground-30-i,20,25)
    rect(pointSeletion+70,ground-30-i,20,25)
    
  }
  
}


function buildingShort(pointSeletion){
  fill(100)
  rect(pointSeletion,bottomFloor+150,100,100)
  //door
  fill(255)
  rect(pointSeletion+5,ground-20,10,20)
    //window
  fill(255)
  for (let i =0; i<80;i+=40){
    rect(pointSeletion+30,ground-40-i,20,30)
    rect(pointSeletion+70,ground-40-i,20,30)
  } 
  fill(100)
  triangle(pointSeletion, ground-100, pointSeletion+100, ground-100, pointSeletion+50, ground-150)
}


function buildingMed(pointSeletion){
    fill(100)
  rect(pointSeletion,bottomFloor+150,200,100)
  //door
  fill(255)
  rect(pointSeletion+5,ground-20,10,20)
  rect(pointSeletion+185,ground-20,10,20)
    //window
  fill(255)
  for (let i =0; i<80;i+=40){
    rect(pointSeletion+30,ground-40-i,20,30)
    rect(pointSeletion+70,ground-40-i,20,30)
    rect(pointSeletion+110,ground-40-i,20,30)
    rect(pointSeletion+150,ground-40-i,20,30)
    
  } 
  fill(100)
  triangle(pointSeletion, ground-100, pointSeletion+200, ground-100, pointSeletion+100, ground-150)
  
}
function tree(x){
  
  fill(193, 154, 107)
  rect(x,ground-40,20,40)
  fill(92,169,4)
  stroke(100,169)
  circle(x+10,ground-60,60)
  circle(x+10,ground-80,45)
  circle(x+10,ground-100,25)
}

function Bush(x){
  fill(92,169,4)
  circle(x+30,ground-20,60)
  circle(x+40,ground-20,60)
  circle(x+50,ground-20,60)
  circle(x+60,ground-20,60)
}