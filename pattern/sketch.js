function setup() {
  createCanvas(500, 500);
}

function draw() {


}
function mouseClicked(){
  background(0)
  pat()
}

function pat(x){
blackSpec=false
choice=floor(random(5))
if(choice==1){
     for(let i=0;i<10;i++){
       for(let j=0;j<10;j++){
          val1=j*50
          val2=i*50
          blackSquare(val1,val2)
    }
  }
}else if(choice==2){
   for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
      val1=j*50
      val2=i*50 
      ranSquare(val1,val2)
      }
    }
}else if(choice==3){
      for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
      val1=j*50
      val2=i*50 
      ranCircle(val1,val2)
      }
    }
  
}else if(choice==4){
  for(let i=0;i<10;i++){
     for(let j=0;j<10;j++){
      val1=j*50
      val2=i*50 
      blackCircle(val1,val2)
      }
    }
}else{
  for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
      val1=j*50
      val2=i*50 
      choice=floor(random(5))
      if(choice==1){
        blackCircle(val1,val2)
      }else if(choice==2){
        ranCircle(val1,val2)
      }else if(choice==3){
        rectMode(CORNER)
        blackSquare(val1,val2)
      }else{
        ranSquare(val1,val2)
      }
      }
        
}
}
}

function ranSquare(x){
  rectMode(CORNER)
  for(let i=0;i<10;i++){
    fill(floor(random(255)),floor(random(255)),floor(random(255)))
    rect(val1+(i*2.5),val2+(i*2.5),50-(i*5))
  }
}

function blackSquare(x){
  rectMode(CORNER)
  for(let i=0;i<10;i++){
    fill(floor(random(255)))
    rectMode(CORNER)
    rect(val1+(i*2.5),val2+(i*2.5),50-(i*5))
    }
}

function ranCircle(x){
  rectMode(CENTER)
  for(let i=0;i<10;i++){
    fill(floor(random(255)),floor(random(255)),floor(random(255)))
    circle(val1+25,val2+25,50-(i*5))
    }
}
function blackCircle(x){
  rectMode(CENTER)
  for(let i=0;i<10;i++){
    fill(floor(random(255)))
    circle(val1+25,val2+25,50-(i*5))
    }
}
  