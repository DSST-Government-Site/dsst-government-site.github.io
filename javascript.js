function updateWinWid() {
	document.getElementById("target").innerHTML = "just kidding it actually updates automatically also test 4";
}
function onWindowResise() {
	document.getElementById("target").innerHTML = String(window.innerWidth);
	report("Updated!")
}
window.onresize = onWindowResise;
//consbjnk = document.getElementById("consolebutjank").innerHTML
function report(mess) {
	document.getElementById("consolebutjank").innerHTML = document.getElementById("consolebutjank").innerHTML+mess+"\n";
}


window.onload = (event) => {
	onWindowResise();
	report('page is fully loaded');
}
