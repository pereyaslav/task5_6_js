function timer() {
	var thisTime = new Date();
	var diff = (thisTime - beginTime) + timeFirst;
	var hour = Math.floor(diff / 1000 / 60 / 60);
	var min = Math.floor((diff - hour * 60 * 60 * 1000) / 1000 / 60);
	var sec = Math.floor(((diff - hour * 60 * 60 * 1000) - min * 60 * 1000) / 1000);
	var ms = diff % 1000;
	if (String(ms).length < 2) {
		ms = '00' + ms
	} else {;
	if (String(ms).length < 3) {
		ms = '0' + ms
	}
		   };
	if (String(sec).length < 2) {
		sec = '0' + sec
	};
	if (String(min).length < 2) {
		min = '0' + min
	};
	if (String(hour).length < 2) {
		hour = '0' + hour
	};
	document.getElementById("hour").innerHTML = hour;
	document.getElementById("min").innerHTML = min;
	document.getElementById("sec").innerHTML = sec;
	document.getElementById("ms").innerHTML = ms;
	//   console.log(hour+':'+min+':'+sec+':'+ms)
};

function handler1() {
	b1Text = document.getElementById("b1").innerHTML;
	var hourFirst = Number(document.getElementById("hour").innerHTML);
	var minFirst = Number(document.getElementById("min").innerHTML);
	var secFirst = Number(document.getElementById("sec").innerHTML);
	var msFirst = Number(document.getElementById("ms").innerHTML);
	timeFirst = msFirst + secFirst * 1000 + minFirst * 60 * 1000 + hourFirst * 60 * 60 * 1000;
	beginTime = new Date();
	if (b1Text == "Start") {
		s = setInterval(timer, 1);
		document.getElementById("b1").innerHTML = "Pause";
	};
	if (b1Text == "Pause") {
		clearInterval(s);
		document.getElementById("b1").innerHTML = "Start";
	};
};

function handler2() {
	clearInterval(s);
	document.getElementById("hour").innerHTML = "00";
	document.getElementById("min").innerHTML = "00";
	document.getElementById("sec").innerHTML = "00";
	document.getElementById("ms").innerHTML = "000";
	document.getElementById("b1").innerHTML = "Start";
};

function point() {
	if (timerPoint[0].style.visibility == 'visible') {
		timerPoint[0].style.visibility = 'hidden';
		timerPoint[1].style.visibility = 'hidden';
		timerPoint[2].style.visibility = 'hidden';
	} 	else {
		timerPoint[0].style.visibility = 'visible';
		timerPoint[1].style.visibility = 'visible';
		timerPoint[2].style.visibility = 'visible';
	};
};
var b1 = document.getElementById("b1");
b1.addEventListener("click", handler1);
var b2 = document.getElementById("b2");
b2.addEventListener("click", handler2);
var timerPoint = document.getElementsByClassName('point');
setInterval(point, 1000);