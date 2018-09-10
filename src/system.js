
function vidSwap(vidURL) {
	var myVideo = document.getElementsByTagName('video')[0];
	myVideo.src = vidURL;
	myVideo.load();
	myVideo.play();
}

function hide() {document.getElementById("library").style.visibility='hidden';}
 
function unhide() {document.getElementById("library").style.visibility='visible';}

function change(url) {document.getElementById("content").src = url;}
 
function playvideo(url) {vidSwap(url); hide();}

function open(url) {change(url); unhide();}


function itemgen(name, seasons) {document.write('<div class="item"><img src="pictures/Penguins.jpg" alt="flower"/><h2>' + name + '</h2><div class="season"><h3>' + seasons + '</h3></div></div></div>' );}
