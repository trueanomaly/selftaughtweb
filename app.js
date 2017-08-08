document.getElementById("multiply").onclick = function() { 
	var one = document.getElementById("numone").value;
	var two = document.getElementById("numtwo").value;
	var result = one * two;
	document.getElementById("result-target").innerHTML = result;
};
