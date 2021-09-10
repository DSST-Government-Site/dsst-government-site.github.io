function updateWinWid() {
	document.getElementById("target").innerHTML = "just kidding it actually updates automatically";
}
function onWindowResise() {
	document.getElementById("target").innerHTML = String(window.innerWidth);
	report("Updated!")
}
window.onresize = onWindowResise;
consbjnk = document.getElementById("consolebutjank").innerHTML
function report(mess) {
	consbjnk += mess+"<br>";
}


window.onload = (event) => {
	onWindowResise();
	report('page is fully loaded');
}
