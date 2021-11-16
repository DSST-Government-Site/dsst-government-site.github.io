const parser = new DOMParser();
var contentdata = 5;
fetch(new Request("./data.html"))
.then(data => data.text())
.then(data => {contentdata = parser.parseFromString(data, "text/html").body});

window.onload = (event) => {
	document.getElementById("search-query").addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			document.getElementById("search-button").click();
		}
	});
	onWindowResise();
}

function replaceDropdown() {
	let n = document.getElementById("dropdown");
	if (n!=null) {
		let p = n.parentNode;
		let bu = document.createElement("button");
		bu.onclick = function() {dropdownToggle(this.nextElementSibling.nextElementSibling.style);};
		bu.replaceChildren(n.children[0].innerHTML);
		n.children[0].remove();
		p.insertBefore(bu, n);
		let br = document.createElement("br");
		p.insertBefore(br, n);
		let nt = document.createElement("table");
		nt.innerHTML = '<tr align="left" class="whitetb"><th style="padding:2px; border-top: solid 2px black" class="whitetb"></th><th style="padding:2px; border-left: solid 2px black; border-top: solid 2px black" class="whitetb"></th><th style="padding:5px; width:100%;" class="whitetb"></th></tr>';
		nt.style = "border: 1px solid #FFFFFF; width:100%;";
		nt.style.display = "none";
		nt.children[0].children[0].children[2].replaceChildren(...n.children);
		p.insertBefore(nt, n);
		n.remove();
		replaceDropdown();
	}
}

function onWindowResise() {
	document.getElementById("main-block").style["max-width"] = window.innerHeight * 1.25;
}
window.onresize = onWindowResise;

function dropdownToggle(dis) {
	dis.display = (dis.display=="none")?"block":"none";
}

function activateSearch(imnp) {
	alert(document.getElementById("search-query").value)
}

function dropdownButtonClick(drpbt) {
	document.getElementById("main-text").innerHTML = '';
	document.getElementById("main-text").append(document.importNode(contentdata.children[drpbt], true));
	replaceDropdown();
}