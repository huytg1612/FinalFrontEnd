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

/*var slide1Index=0;
slideShow1();
function slideShow1()
{
	var i;
	var slides = document.getElementsByClassName("mySlide1");
	if(slide1Index < 0) slide1Index = slides.length-1;
	if(slide1Index >= slides.length) slide1Index = 0;
	for(i = 0;i<slides.length;i++)
		slides[i].style.display="none";
	setTimeout(slideShow1,4000);
	slide1Index++;
}*/