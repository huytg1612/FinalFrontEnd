// JavaScript Document
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
	document.getElementById("menu").style.display="block";
	document.getElementById("Search-Button").style.display="block";
	document.getElementById("hidden-Search-Bar").style.display="none";
	document.getElementById("Search-Block").style.width="0.5px";
	document.getElementById("Search-Block").style.opacity="0";
}
function hiddenNewsContent()
{
	document.getElementById("Animation-Content").style.display="none";
	document.getElementById("Text-See").innerHTML="See all news";	
}
function showNewsContent()
{		
	document.getElementById("Animation-Content").style.display="block";
	document.getElementById("Text-See").innerHTML="Hidden news";	
}

function clickContent()
{
	var content = document.getElementById("Animation-Content");
	if(content.style.display == "none")
		showNewsContent();
	else
		hiddenNewsContent();
}