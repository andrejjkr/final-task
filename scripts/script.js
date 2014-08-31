var tabs = document.getElementsByClassName('tab'),
	pages = document.getElementsByClassName('page'),
	current = 0;

[].forEach.call(tabs, function(tab, index){
	tab.addEventListener("click", function(event){
		tabs[current].classList.remove("active_t");
		pages[current].classList.remove("active_p");
		tabs[index].classList.add("active_t");
		pages[index].classList.add("active_p");
		current = index;
	});
});

function DVTCalc(){
	var DVT = parseFloat(document.leftcalc.DVT.value);

	var A = DVT*0.925;
	var B = 182*(0.122*A);
	var C =  2*8*(A-(0.122*A));
	document.leftcalc.BCL.value=(parseFloat((B+C).toFixed(2)));

	var W = (A-(A*0.122));
	var D = 14;

	document.leftcalc.E.value=(parseFloat((W*D).toFixed(2)));

	document.leftcalc.G.value=(parseFloat((0.064*C).toFixed(2)));

	document.leftcalc.H.value=(parseFloat((3*A*0.52).toFixed(2)));

	document.combinedcalc.injections.value=(parseFloat(parseFloat(document.leftcalc.BCL.value)+parseFloat(document.rightcalc.BCR.value)).toFixed(2));
	document.combinedcalc.inrclinic.value=(parseFloat(parseFloat(document.leftcalc.E.value)+parseFloat(document.rightcalc.I.value)).toFixed(2));
	document.combinedcalc.nurse.value=(parseFloat(document.leftcalc.G.value).toFixed(2));
	document.combinedcalc.hospital.value=(parseFloat(parseFloat(document.leftcalc.H.value)+parseFloat(document.rightcalc.J.value)).toFixed(2));
};

function PECalc(){
	var PE = parseFloat(document.rightcalc.PE.value);

	var A = PE*0.85;
	var B = 182*(0.176*A);
	var C =  2*8*(A-(0.176*A));
	document.rightcalc.BCR.value=(parseFloat((B+C).toFixed(2)));

	var V = (A-(A*0.176));
	var D = 14;
	document.rightcalc.I.value=(parseFloat((V*D).toFixed(2)));

	document.rightcalc.J.value=(parseFloat((0.896*A).toFixed(2)));

	document.combinedcalc.injections.value=(parseFloat(parseFloat(document.leftcalc.BCL.value)+parseFloat(document.rightcalc.BCR.value)).toFixed(2));
	document.combinedcalc.inrclinic.value=(parseFloat(parseFloat(document.leftcalc.E.value)+parseFloat(document.rightcalc.I.value)).toFixed(2));
	document.combinedcalc.nurse.value=(parseFloat(document.leftcalc.G.value).toFixed(2));
	document.combinedcalc.hospital.value=(parseFloat(parseFloat(document.leftcalc.H.value)+parseFloat(document.rightcalc.J.value)).toFixed(2));
};




