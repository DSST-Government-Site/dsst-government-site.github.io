function updateWinWid() {
	document.getElementById("target").innerHTML = "just kidding it actually updates automatically";
}
function onWindowResise() {
	
	document.getElementById("target").innerHTML = String(Math.min(window.innerWidth, window.innerHeight));
	lowpri++;
	report("", "low");
	report("actually both");
}
window.onresize = onWindowResise;

var lowpri;
function report(mess, lowpri) {
	if (lowpri == "low") {
		document.getElementById("conupdbutjank").innerHTML = "Low Priority Pings: " + lowpri;
	} else {document.getElementById("consolebutjank").innerHTML = document.getElementById("consolebutjank").innerHTML+mess+"\n";}
}


window.onload = (event) => {
	//lowpri = 0;
	onWindowResise();
	report('page is fully loaded');
}