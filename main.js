Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:10
});

Webcam.attach('#camera');

function takeSnapshot() {
Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log('versão ml5:', ml5.version);

filtroImagens = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_wkTXLVP-/model.json', modelLoaded);

function modelLoaded() {
    console.log("Modelo Carregado");
}

function check() {
    captura = document.getElementById("captured_image");
    filtroImagens.classify(captura, gotResult);
}


function gotResult(error, results) {
if(error) {
console.error(error)
}
else {
console.log(results);
document.getElementById("nomeObjeto").innerHTML = results[0].label;
document.getElementById("nomeObjeto").innerHTML = results[0].confidence.toFixed(2);
}
}