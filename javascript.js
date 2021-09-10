function updateWinWid() {
	document.getElementById("target").innerHTML = "just kidding it actually updates automatically";
}
function onWindowResise() {
	
	document.getElementById("target").innerHTML = String(Math.min(window.innerWidth, window.innerHeight));
	lowpri++
	report("", 1)
}
window.onresize = onWindowResise;

var lowpri;
function report(mess, lowpri) {
	if (lowpri == null) {
		document.getElementById("consolebutjank").innerHTML = document.getElementById("consolebutjank").innerHTML+mess+"\n";
	} else {document.getElementById("conupdbutjank").innerHTML = "Low Priority Pings: " + lowpri;}
}


window.onload = (event) => {
	lowpri = 0
	onWindowResise();
	report('page is fully loaded');
}
