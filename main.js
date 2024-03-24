api=window.webkitSpeechRecognition
news=new api()
function start()
{

document.getElementById("textbox").innerHTML=""
news.start()
}

news.onresult=function(e)
{
mys=e.results[0][0].transcript
document.getElementById("textbox").innerHTML=mys
if(mys=="take my selfie"){
    speak()
}
}
function speak (){
var synth=window.speechSynthesis;
speak_data="taking your selfie in 5 seconds"
var saythis=new SpeechSynthesisUtterance(speak_data)
synth.speak(saythis)
Webcam.attach(camera)
setTimeout(function(){
    takepic()
    save()
},5000)
}
Webcam.set({width:360,height:250,image_format:'png',png_quality:90})
camera=document.getElementById("camera")

function takepic(){
Webcam .snap(function(data_uri)
{
document.getElementById("result").innerHTML='<img id="i1" src="'+data_uri+'">'
}
)
}

function save(){
x=document.getElementById("link")
i=document.getElementById("i1").src
x.click()
}