

var date=document.querySelector(".date");
var month=document.querySelector(".month");
var year=document.querySelector(".year");
var hour=document.querySelector(".hours");
var minute=document.querySelector(".minutes");
var second=document.querySelector(".seconds");
var day=document.querySelectorAll(".round");
var am=document.querySelector("#am");
var pm=document.querySelector("#pm");

var d=new Date();
	
	if(d.getDate()<=9){
		date.innerHTML="0"+(d.getDate());
	}
	else{
		date.innerHTML=d.getDate();
	}
	if(d.getMonth()<9){
	month.innerText="0"+(d.getMonth()+1);
	}
	else{
		month.innerText=d.getMonth()+1;
	}
	year.innerText=d.getFullYear();
	hour.innerText=d.getHours();
	minute.innerText=d.getMinutes();
	second.innerText=d.getSeconds();

function dates(){
	var d=new Date();
	var i=d.getDay();
	if(d.getDate()<=9){
		date.innerHTML="0"+(d.getDate());
	}
	else{
		date.innerHTML=d.getDate();
	}
	if(d.getMonth()<9){
		month.innerText="0"+(d.getMonth()+1);
	}
	else{
		month.innerText=d.getMonth()+1;
	}
	
	year.innerText=d.getFullYear();
	if(d.getHours()>12){
		hour.innerText=d.getHours()-12;
		pm.style.backgroundColor="red"
		am.style.backgroundColor="black"
	}
	else{
		hour.innerText=d.getHours();
		am.style.backgroundColor="red"
		pm.style.backgroundColor="black"
	}
	
	minute.innerText=d.getMinutes();
	second.innerText=d.getSeconds();
	day[i].style.backgroundColor="red";
}

setInterval(dates,1000)
