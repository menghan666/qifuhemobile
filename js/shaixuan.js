
function add_img(obj,radio){
	$.each($("div[class=fp-radio]"),function(i,e){
		e.style.background = "";
		e.style.border = "";
		e.style.color = "#333";
	});
	if(obj.style.background){
		obj.style.background = "";
		obj.style.border = "";
		obj.style.color = "#333";
		document.getElementById(radio).checked = false;
	}else{
		obj.style.background = "#ff9e00";
		obj.style.color = "#fff";
		document.getElementById(radio).checked = true;
	}
}
function add_imga(obj,radio){
	$.each($("div[class=fp-radioa]"),function(i,e){
		e.style.background = "";
		e.style.border = "";
		e.style.color = "#333";
	});
	if(obj.style.background){
		obj.style.background = "";
		obj.style.border = "";
		obj.style.color = "#333";
		document.getElementById(radio).checked = false;
	}else{
		obj.style.background = "#ff9e00";
		obj.style.color = "#fff";
		document.getElementById(radio).checked = true;
	}
}
function add_imgb(obj,radio){
	$.each($("div[class=fp-radiob]"),function(i,e){
		e.style.background = "";
		e.style.border = "";
		e.style.color = "#333";
	});
	if(obj.style.background){
		obj.style.background = "";
		obj.style.border = "";
		obj.style.color = "#333";
		document.getElementById(radio).checked = false;
	}else{
		obj.style.background = "#ff9e00";
		obj.style.color = "#fff";
		document.getElementById(radio).checked = true;
	}
}
function add_imgc(obj,radio){
	$.each($("div[class=fp-radioc]"),function(ic,ec){
		ec.style.background = "";
		ec.style.border = "";
		ec.style.color = "#333";
	});
	if(obj.style.background){
		obj.style.background = "";
		obj.style.border = "";
		obj.style.color = "#333";
		document.getElementById(radio).checked = false;
	}else{
		obj.style.background = "#ff9e00";
		obj.style.color = "#fff";
		document.getElementById(radio).checked = true;
	}
}
function add_imgd(obj,radio){
	$.each($("div[class=fp-radiod]"),function(ie,ed){
		ed.style.background = "";
		ed.style.border = "";
		ed.style.color = "#333";
	});
	if(obj.style.background){
		obj.style.background = "";
		obj.style.border = "";
		obj.style.color = "#333";
		document.getElementById(radio).checked = false;
	}else{
		obj.style.background = "#ff9e00";
		obj.style.color = "#fff";
		document.getElementById(radio).checked = true;
	}
}