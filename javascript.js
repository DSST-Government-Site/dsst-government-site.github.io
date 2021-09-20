window.onload = (event) => {
	document.getElementById("search-query").addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			document.getElementById("search-button").click();
		}
	});
	mblock = document.getElementById("main-block");
	onWindowResise();
	report('page is fully loaded');
}

function onWindowResise() {
	mblock.style["max-width"] = window.innerHeight * 1.25;
	//document.getElementById("main-text").style["min-height"] = window.innerHeight
}
window.onresize = onWindowResise;

function activateSearch(imnp) {
	alert(document.getElementById("search-query").value)
}
