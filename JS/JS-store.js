function appearSearchBlock()
{
	document.getElementById("menu").style.display="none";
	document.getElementById("Search-Button").style.display="none";
	document.getElementById("hidden-Search-Bar").style.display="block";
	document.getElementById("Search-Block").style.width="300px";
	document.getElementById("Search-Block").style.opacity="1";
}
function hiddenSearchBlock()
{
	document.getElementById("Search-Block").style.width="0.5px";
	document.getElementById("Search-Block").style.opacity="0";
	document.getElementById("hidden-Search-Bar").style.display="none";
	document.getElementById("menu").style.display="block";
	document.getElementById("Search-Button").style.display="block";
}// JavaScript Document