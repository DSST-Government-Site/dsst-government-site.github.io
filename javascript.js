function updateWinWid() {
	document.getElementById("target").innerHTML = "just kidding it actually updates automatically";
}

function onWindowResise() {
	document.getElementById("target").innerHTML = String(window.innerWidth);
}

window.onresize = onWindowResise;
