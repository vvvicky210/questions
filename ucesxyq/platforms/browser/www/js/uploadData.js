var client;


function startDataUpload() {
alert ("start data upload");
// get the text boxes values by specific id //
// and value each variable//
// put them inside postString//
var clientid = document.getElementById("clientid").value;
var questionid = document.getElementById("questionid").value;
var question = document.getElementById("question").value;
var answer1 = document.getElementById("answer1").value;
var answer2 = document.getElementById("answer2").value;
var answer3 = document.getElementById("answer3").value;
var answer4 = document.getElementById("answer4").value;

var latitude = document.getElementById("latitude").value;
var longitude = document.getElementById("longitude").value;
var postString = "clientid="+clientid +"&questionid="+questionid+"&question="+question+"&answer1="+answer1+"&answer2="+answer2+"&answer3="+answer3+"&answer4="+answer4; 
postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;

// now get the radio button values//
if (document.getElementById("answernumber1").checked) {
var correct=document.getElementById("answernumber1").value;
postString=postString+"&answernumber="+correct
}
if (document.getElementById("answernumber2").checked) {
var correct=document.getElementById("answernumber2").value;
postString=postString+"&answernumber="+correct
}
if (document.getElementById("answernumber3").checked) {
var correct=document.getElementById("answernumber3").value;
postString=postString+"&answernumber="+correct
}
if (document.getElementById("answernumber4").checked) {
var correct=document.getElementById("answernumber4").value;
postString=postString+"&answernumber="+correct
}


processData(postString);}


// upload data into the server//
function processData(postString) {
client = new XMLHttpRequest();
client.open('POST','http://developer.cege.ucl.ac.uk:30272/uploadData',true);
client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
client.onreadystatechange = dataUploaded;
client.send(postString);

}

// create the code to wait for the response from the data server, and process the response once it is received
function dataUploaded() {
// this function listens out for the server to say that the data is ready - i.e. has state 4
if (client.readyState == 4) {
// change the DIV to show the response
document.getElementById("dataUploadResult").innerHTML = client.responseText;
}
}