Webcam.set({
    height: 350,
    width: 350,
    image_format: "png",
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach(camera)

function snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured' src="+data_uri+">"
})
}
console.log(ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hWGXN3Q7W/model.json",modelLoaded)
function modelLoaded(){
    console.log("modelLoaded")
}
function check(){
    img=document.getElementById("captured")
    classifier.classify(img,got_results)   
}
function got_results(error,results){
  if (error){
      console.log (error)
  }  
else{
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
    document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3)  
}

}

