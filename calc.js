var numKeys = [];
var opns = [];
var res = document.querySelector("#resultArea");
var clrBtn = document.querySelector("#clrTxt");
var delBtn = document.querySelector("#del");
var eqBtn = document.querySelector("#eq");

var opnSyms = ["+", "-", "*", "/"];
var symList;
var tmpCal;
var j;

for(var i=0;i<=9;i++){
	(function(i){
    	qs = "#num" + i;
		numKeys.push(document.querySelector(qs));
		numKeys[i].addEventListener("click", function(){
			res.textContent += i;
		});
  	}(i));
}

for(var i=0;i<=3;i++){
	(function(i){
    	qs = "#op" + i;
		opns.push(document.querySelector(qs));
		opns[i].addEventListener("click", function(){
			res.textContent += opnSyms[i];
		});
  	}(i));
}

clrBtn.addEventListener("click", function(){
	res.textContent = "";
});

delBtn.addEventListener("click", function(){
    res.textContent = res.textContent.substring(0, res.textContent.length - 1);
});

eqBtn.addEventListener("click", function(){
	(function(i, j){
		symList = [];
		for(var i=0; i<opnSyms.length; i++){
			if(res.textContent.indexOf(opnSyms[i]) > -1){
				symList.push(opnSyms[i]);
			}
		}

		if(symList !== []){
			var operands = res.textContent.split("+");
			tmpCal = 0;
			for(j=0; j<operands.length;j++){
				tmpCal += Number(operands[j]);
			}
			res.textContent = tmpCal.toString();
		}
	}(i, j));
});