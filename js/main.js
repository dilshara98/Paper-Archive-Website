$(document).ready(function () {

// loadFirstLevelList();
readDataAndCall("data/list.txt",l1ReqListener);

});

function readDataAndCall(path, callBack) {
	var req = new XMLHttpRequest();
	req.addEventListener("load",callBack);
	req.open("GET",path,true);
	// req.withCredentials = true;
	// req.setRequestHeader("Content-Type","application/json");
	req.send();
}

function l1ChoiceHandler() {

	// first remove any current sub lists
	var menus_form = document.getElementById("menus_form");
	menus_form.removeChild(menus_form.lastChild);

	// then create new list
	var l1List = document.getElementById("level1");
	var l1SelectedValue = l1List.options[l1List.selectedIndex].value;
	var nextPath = null;
	l1SelectedValue = l1SelectedValue.replace(" ","");
	nextPath = "data/"+l1SelectedValue+"/list.txt";

	// check if this is the end of the line
	var end = readDataAndCall(nextPath,checkEOL);
	if(!end) {
		createList(nextPath,"2");
		readDataAndCall(nextPath,l2ReqListener);
	}
}

function createList(path,id) {
	document.getElementById("menus_form").appendChild(document.createElement("br"));
	var newList = document.createElement("SELECT");
	newList.className = "form-control";
	newList.id = "level"+id;
	newList.addEventListener("change", function() {
		choiceHandler(id);
	}); /// Assuming a generalized CHOICE HANDLER function
	document.getElementById("menus_form").appendChild(newList);
}

function choiceHandler(level) {
	// first remove any current sub lists
	// var menus_form = document.getElementById("menus_form");
	// menus_form.removeChild(menus_form.lastChild);
	console.log("Level " + level + "choice handler invoked");
}

function l2ReqListener() {
	var l2List = document.getElementById("level2");
	var data = this.responseText.split("\r\n");
	for(var i = 0; i < data.length; i++) {
		l2List.options[i] = new Option(data[i],data[i]);
	}
}

function l1ReqListener() {
	var l1List = document.getElementById("level1");
	var data = this.responseText.split("\r\n");
	for (var i = 0; i < data.length; i++) {
		l1List.options[i] = new Option(data[i],data[i]);
	}
}

function checkEOL(data) {
	var text = this.responseText.split("\r\n");
	if(text[0] == 'END') {
		return true;
	}
	else {
		return false;
	}
}

// function loadFirstLevelList() {
// 	var l1Request = new XMLHttpRequest();
// 	l1Request.addEventListener("load",l1ReqListener);
// 	l1Request.open("GET","data/list.txt");
// 	l1Request.send();
// }

// function reqListener() {
// 	console.log(this.responseText);
// 	console.log(typeof(this.responseText));
// 	console.log(this.responseText.split("\r\n"));
// }

// function getFoodItem(){
 
//             var list1 = document.getElementById('firstList');
//             var list2 = document.getElementById("secondList");
//             var list1SelectedValue = list1.options[list1.selectedIndex].value;
             
//             if (list1SelectedValue=='Snacks')
//             {
                 
//                 list2.options.length=0;
//                 list2.options[0] = new Option('--Select--', '');
//                 list2.options[1] = new Option('Burger', 'Burger');
//                 list2.options[2] = new Option('Pizza', 'Pizza');
//                 list2.options[3] = new Option('Hotdog', 'Hotdog');
//                 list2.options[4] = new Option('Potato Chips', 'Potato Chips');
//                 list2.options[5] = new Option('French Fries', 'French Fries');
                 
//             }
//             else if (list1SelectedValue=='Drinks')
//             {
                 
//                 list2.options.length=0;
//                 list2.options[0] = new Option('--Select--', '');
//                 list2.options[1] = new Option('Coca Cola', 'Coca Cola');
//                 list2.options[2] = new Option('7up', '7up');
//                 list2.options[3] = new Option('Pepsi', 'Pepsi');
//                 list2.options[4] = new Option('Coffee', 'Coffee');
//                 list2.options[5] = new Option('Tea', 'Tea');
                 
//             }
// }