function onWindowResise() {
	mblock = document.getElementById("main-block")
	mblock.style["max-width"] = window.innerHeight*1.25;
	document.getElementById("target").innerHTML = String(window.innerHeight);
}
window.onresize = onWindowResise;

function activateSearch(imnp) {
	alert(document.getElementById("search-query").value)
}

window.onload = (event) => {
	//lowpri = 0;
	onWindowResise();
	report('page is fully loaded');
}