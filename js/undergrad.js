$(document).ready(function () {
	uniChangeHandler();
});

function facultyChangeHandler() {
	var list = document.getElementById("facultySelector");
	var selectedFac = list.options[list.selectedIndex].value;
	
	var resList = document.getElementById("degreeSelector");
	resList.options = null;

	if(selectedFac == 'science') {
		resList.options[0] = new Option('B.Sc. in Mathematics','B.Sc. in Mathematics');
		resList.options[1] = new Option('B.Sc. in Physics','B.Sc. in Physics');
		resList.options[2] = new Option('B.Sc. in Chemistry','B.Sc. in Chemistry');
	}
	else if(selectedFac == 'law') {
		resList.options[0] = new Option('LLB','LLB');
	}
	else if(selectedFac == 'arts') {
		resList.options[0] = new Option('B.A. (special) in English','B.A. (special) in English');
		resList.options[1] = new Option('Bachelor of Arts','Bachelor of Arts');
		resList.options[2] = new Option('B.A. in Sociology','B.A. in Sociology');
	}
	else if(selectedFac == 'mgmt') {
		resList.options[0] = new Option('B.Mgt in Tourism and Hospitality Management','B.Mgt in Tourism and Hospitality Management');
	}
	else if(selectedFac == 'agri') {
		resList.options[0] = new Option('B.Sc. in Biology','B.Sc. in Biology');
		resList.options[1] = new Option('B.Sc. in Agriculture','B.Sc. in Agriculture');
	}
	else if(selectedFac == 'geo') {
		resList.options[0] = new Option('Bachelor in Geomatics','Bachelor in Geomatics');
	}
	else if(selectedFac == 'med') {
		resList.options[0] = new Option('MBBS','MBBS');
	}
	else if(selectedFac == 'it') {
		resList.options[0] = new Option('B.Sc. in Computer Science','B.Sc. in Computer Science');
		resList.options[1] = new Option('B.Sc. in Information Technology','B.Sc. in Information Technology');
	}
	else if(selectedFac == 'eng') {
		resList.options[0] = new Option('B.Sc. in Electrical and Eletronic Engeering','B.Sc. in Electrical and Eletronic Engeering');
		resList.options[1] = new Option('B.Sc. in Civil Engineering','B.Sc. in Civil Engineering');
	}

}

function uniChangeHandler() {
	var list = document.getElementById("uniSelector");
	var selectedStream = list.options[list.selectedIndex].value;

	var resList = document.getElementById("facultySelector");
	resList.options = null;

	if(selectedStream == 'uoc') {
		resList.options[0] = new Option('Faculty of Science','science');
		resList.options[1] = new Option('Faculty of Law','law');
		resList.options[2] = new Option('Faculty of Arts','arts');
		resList.options[3] = new Option('Faculty of Management','mgmt');
	}
	else if(selectedStream == 'susl') {
		resList.options[0] = new Option('Faculty of Applied Sciences','science');
		resList.options[1] = new Option('Faculty of Social Sciences and Languages','arts');
		resList.options[2] = new Option('Faculty of Agriculture','agri');
		resList.options[3] = new Option('Faculty of Geomatics','geo');
	}
	else if(selectedStream == 'saitm') {
		resList.options[0] = new Option('Faculty of Medicine','med');
		resList.options[1] = new Option('Faculty of IT','it');	
	}
	else if(selectedStream == 'uop') {
		resList.options[0] = new Option('Faculty of Arts','arts');	
		resList.options[1] = new Option('Faculty of Medicine','med');	
		resList.options[2] = new Option('Faculty of Engineering','eng');	
		resList.options[3] = new Option('Faculty of Agriculture','agri');	
	}
	else if(selectedStream == 'mora') {
		resList.options[0] = new Option('Faculty of Engineering','eng');	
		resList.options[1] = new Option('Faculty of IT','it');	
		resList.options[2] = new Option('Faculty of Management','mgmt');	
	}

	facultyChangeHandler();
}