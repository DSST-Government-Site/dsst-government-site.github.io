function updateWinWid() {
	document.getElementById("target").innerHTML = "just kidding it actually updates automatically";
}
function onWindowResise() {
	document.getElementById("main-block").style.max-width = window.innerHeight;
	document.getElementById("target").innerHTML = String(window.innerHeight);
	repping();
	//report("actually both");
}
window.onresize = onWindowResise;

function report(mess, lowpri) {
	document.getElementById("consolebutjank").innerHTML = document.getElementById("consolebutjank").innerHTML+mess+"\n";
}
var lowpri = 0;
function repping() {
	lowpri++;
	document.getElementById("conupdbutjank").innerHTML = "Low Priority Pings: " + lowpri;
}


window.onload = (event) => {
	//lowpri = 0;
	onWindowResise();
	report('page is fully loaded');
}