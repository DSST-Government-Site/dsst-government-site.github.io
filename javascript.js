function updateWinWid() {
	document.getElementById("target").innerHTML = "just kidding it actually updates automatically";
}
function onWindowResise() {
	
	document.getElementById("target").innerHTML = String(Math.min(window.innerWidth, window.innerHeight));
	report("Updated!")
}
window.onresize = onWindowResise;
consbjnk = document.getElementById("consolebutjank")
function report(mess) {
	consbjnk.innerHTML += mess+"\n";
}


window.onload = (event) => {
	onWindowResise();
	report('page is fully loaded');
}