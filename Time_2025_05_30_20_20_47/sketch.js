//time vars
// let h = hour()
// let m = minute()
// let s = second()

//number vars
let size = 25
let digit = 50
let y = 0

function setup() {
  createCanvas(600, 600);
  background(255)
}

function draw() {
  fill(45,255,45)
  stroke(0)
  // one(digit,y,size)
  // two(digit,y,size)
  // three(digit,y,size)
  // four(digit,y,size)
  // five(digit,y,size)
  // six(digit,y,size)
  // seven(digit,y,size)
  // eight(digit,y,size)
  // nine(digit,y,size)
  // zero(digit,y,size)
  
  // tens()
  // ones()
  // tensMin()
  // onesMin()
  // time()
}
function mousePressed(){
  background(255)
  digit=250
  y=50
  time()
}
function time(x){
  if ((hour()%10)==0){
    zero(250,50,size)
  }
  else if ((hour()%10)==1){
    one(250,50,size)
  }
  else if ((hour()%10)==2){
    two(250,50,size)
  }
  else if ((hour()%10)==3){
    three(250,50,size)
  }
  else if ((hour()%10)==4){
    four(250,50,size)
  }
  else if ((hour()%10)==5){
    five(250,50,size)
  }
  else if ((hour()%10)==6){
    six(250,50,size)
  }
  else if ((hour()%10)==7){
    seven(250,50,size)
  }
  else if ((hour()%10)==8){
    eight(250,50,size)
  }
  else if ((hour()%10)==9){
    nine(250,50,size)
  }
  else{
    zero(250,50,size)
  }
  
  digit=100
  y=50
  
  ten=hour()%100
  ten=ten-hour()%10
  ten=ten/10
  
  if(ten==0){
    zero(50,50,size)
  }
  else if(ten==1){
    digit=150
    y=55
    one(100,50,size)
  }
  else{
    two(50,50,size)
  }
  
  digit=450
  y=50
  if ((minute()%10)==0){
    y=100
    zero(250,50,size)
  }
  else if ((minute()%10)==1){
    one(250,50,size)
  }
  else if ((minute()%10)==2){
    two(250,50,size)
  }
  else if ((minute()%10)==3){
    three(250,50,size)
  }
  else if ((minute()%10)==4){
    four(250,50,size)
  }
  else if ((minute()%10)==5){
    five(250,50,size)
  }
  else if ((minute()%10)==6){
    six(250,50,size)
  }
  else if ((minute()%10)==7){
    seven(250,50,size)
  }
  else if ((minute()%10)==8){
    y=100
    eight(250,50,size)
  }
  else if ((minute()%10)==9){
    y=100
    nine(250,50,size)
  }
  else{
    zero(250,50,size)
  }
  
  digit=300
  y=50
  
  minTen=(minute()%100)
  minTen=minTen-minute()%10
  minTen=minTen/10
  
  if (minTen==0){
    zero(250,50,size)
  }
  else if (minTen==1){
    one(250,50,size)
  }
  else if (minTen==2){
    two(250,50,size)
  }
  else if (minTen==3){
    three(250,50,size)
  }
  else if (minTen==4){
    four(250,50,size)
  }
  else if (minTen==5){
    digit=400
    five(250,50,size)
  }
  else if (minTen==6){
    six(250,50,size)
  }
  else if (minTen==7){
    seven(250,50,size)
  }
  else if (minTen==8){
    y=100
    eight(250,50,size)
  }
  else if (minTen==9){
    y=100
    nine(250,50,size)
  }
  else{
    zero(250,50,size)
  }
  
}


function one(x){
  down(digit,y,size)
  y=y+50
  down(digit,y,size)
}

function two(x){
  right(digit,y,size)
  digit=digit+50
  down(digit,y,size)
  y=y+50
  left(digit,y,size)
  digit=digit-50
  down(digit,y,size)
  y=y+50
  right(digit,y,size)
}
  
function three(x){
  
  left(digit,y,size)
  down(digit,y,size)
  y=y+50
  left(digit,y,size)
  down(digit,y,size)
  y=y+50
  left(digit,y,size)
  
}

function four(x){
  down(digit,y,size)
  y=y+50
  right(digit,y,size)
  y=y-50
  digit=digit+50
  down(digit,y,size)
  y=y+50
  down(digit,y,size)
  
}

function five(x){
  
  left(digit,y,size)
  digit=digit-50
  down(digit,y,size)
  y=y+50
  right(digit,y,size)
  digit=digit+50
  down(digit,y,size)
  y=y+50
  left(digit,y,size)
}

function six(){

  left(digit,y,size)
  digit=digit-50
  down(digit,y,size)
  y=y+50
  down(digit,y,size)
  y=y+50
  right(digit,y,size)
  digit=digit+50
  up(digit,y,size)
  y=y-50
  left(digit,y,size)

}
function seven(x){


  right(digit,y,size)
  digit=digit+50
  down(digit,y,size)
  y=y+50
  down(digit,y,size)
}

function eight(x){
  
  up(digit,y,size)
  y=y-50
  left(digit,y,size)
  digit=digit-50
  down(digit,y,size)
  y=y+50
  right(digit,y,size)
  digit=digit+50
  down(digit,y,size)
  y=y+50
  left(digit,y,size)
  digit=digit-50
  up(digit,y,size)
  
  
}
function nine(x){
  
  up(digit,y,size)
  y=y-50
  left(digit,y,size)
  digit=digit-50
  down(digit,y,size)
  y=y+50
  right(digit,y,size)
  digit=digit+50
  down(digit,y,size)
  y=y+50

}
function zero(x){

  up(digit,y,size)
  y=y-50
  left(digit,y,size)
  digit=digit-50
  down(digit,y,size)
  y=y+50

  digit=digit+50
  down(digit,y,size)
  y=y+50
  left(digit,y,size)
  digit=digit-50
  up(digit,y,size)
}

function down(digit,y,size){
    for (let i = 0; i<5;i++){
    circle(digit,y,size)
    y +=10 
  }
  return(digit,y,size)
}
function up(digit,y,size){
    for (let i = 0; i<5;i++){
    circle(digit,y,size)
    y -=10 
  }
}
function left(digit,y,size){
    for (let i = 0; i<5;i++){
    circle(digit,y,size)
    digit -=10 
  }
}
function right(digit,y,size){
    for (let i = 0; i<5;i++){
    circle(digit,y,size)
    digit +=10 
  }
}

function tens(){
  ten=(hour()%100)
  ten=ten-hour()%10
  ten=ten/10
}

function ones(){
  oneHour=hour()%10
}

function tensMin(){
  minTen=(minute()%100)
  minTen=minTen-minute()%10
  minTen=minTen/10
}

function onesMin(){
  minOne=minute()%10
}