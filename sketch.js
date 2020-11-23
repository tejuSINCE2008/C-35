var Ball,database,position;

function setup(){
    createCanvas(500,500);
    database=firebase.database()
    Ball = createSprite(250,250,10,10);
    Ball.shapeColor = "red";
    var ballpositionref=database.ref('ball/position')
    ballpositionref.on("value",readposition,showerror)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        updatePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        updatePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        updatePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        updatePosition(0,+1);
    }
    drawSprites();
}

function updatePosition(x,y){
   database.ref('ball/position').set({
       'x':position.x+x,
       'y':position.y+y
   })
}
function readposition(data){
    position=data.val()
    Ball.x=position.x
    Ball.y=position.y
}
function showerror(){
    console.log("error")
}