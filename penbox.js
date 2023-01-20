img="";
objects=[];
status="";

function preload(){
  img = loadImage("penbox.jpeg");
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }

  function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
  }

  function gotResult(error, results){
    if(error){
    console.log(error);
    }
    console.log(results);
    objects = results;
          }
    
          function draw(){
            image(img, 0, 0, 400, 300);   
            
            document.getElementById("number_of_objects").innerHTML = "There are 1 object in the image, out of which 1 object is detected"; 
            fill("#FF0000");
            text("penbox", 45, 75);
            noFill();
            stroke("#FF0000");
            rect(30, 60, 350, 150);
            fill("#FF0000");
              } 

              /*function draw(){
                image(img , 0, 0, 400, 300);
                //console.log("outside if loop");
                if(status != ""){
                 // console.log("inside if loop");
                  for(i=0; i<objects.length; i++){                 
                document.getElementById("status").innerHTML = "Status:Object Detected"; 
                console.log(objects.length);          
                fill("#FF0000");
                percent = floor(objects[i].confidence * 100);
                console.log(percent); 
                text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
                console.log(objects[0].label); 
                noFill();
                stroke("#FF0000");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                } 
              }
            }*/
          