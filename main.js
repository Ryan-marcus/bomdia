function startClassification() {
  navigator.mediaDevices.getUserMedia({audio:true});
  classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hazYrcyKk/model.json',modelReady)
}
function modelReady() {
  classifier.classify(gotResults)
}
function gotResults(error,results) {
  if (error) {
    console.error(error)
  } else {
    console.log(results)
    randon_nunber_r=Math.floor(Math.random()*255)+1;
    randon_nunber_g=Math.floor(Math.random()*255)+1;
    randon_nunber_b=Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML="posso ouvir- " +results[0].label;
    document.getElementById("result_confidence").innerHTML="precisão- " +(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+randon_nunber_r+","+randon_nunber_g+","+randon_nunber_b+")"
    document.getElementById("result_confidence").style.color="rgb("+randon_nunber_r+","+randon_nunber_g+","+randon_nunber_b+")"

    img1=document.getElementById("alien1")
    img2=document.getElementById("alien2")
    img3=document.getElementById("alien3")
    img4=document.getElementById("alien4")
    
    if (results[0].label=="rapazzz") {
      img1.src="aliens-01.gif"
      img2.src="aliens-02.png"
      img3.src="aliens-03.png"
      img4.src="aliens-04.png"
    } else if(results[0].label=="uepaa"){
      img1.src="aliens-01.png"
      img2.src="aliens-02.gif"
      img3.src="aliens-03.png"
      img4.src="aliens-04.png"
    }else if(results[0].label=="tome"){
      img1.src="aliens-01.png"
      img2.src="aliens-02.png"
      img3.src="aliens-03.gif"
      img4.src="aliens-04.png"
    }else{
      img1.src="aliens-01.png"
      img2.src="aliens-02.png"
      img3.src="aliens-03.png"
      img4.src="aliens-04.gif"
    }
  }
}
//https://teachablemachine.withgoogle.com/models/hazYrcyKk/