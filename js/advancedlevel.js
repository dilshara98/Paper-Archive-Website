$(document).ready(function () {
	subjectChangeHandler();
})

function subjectChangeHandler() {
	var list = document.getElementById("ALStreamSelector");
	var selectedStream = list.options[list.selectedIndex].value;

	var resList = document.getElementById("ALSubjectSelector");
	resList.options = null;

	if(selectedStream == 'maths') {
		resList.options[0] = new Option('Combined Maths','Combined Maths');
		resList.options[1] = new Option('Physics','Physics');
		resList.options[2] = new Option('Chemistry','Chemistry');
		resList.options[3] = new Option('Information Technology','Information Technology');
	}
	else if(selectedStream == 'bio') {
		resList.options[0] = new Option('Biology','Biology');
		resList.options[1] = new Option('Chemistry','Chemistry');
		resList.options[2] = new Option('Agriculture','Agriculture');
		resList.options[3] = new Option('Physics','Physics');
	}
	else if(selectedStream == 'tech') {
		resList.options[0] = new Option('Engineering Technology','Engineering Technology');
		resList.options[1] = new Option('Science For Technology','Science For Technology');	
		resList.options[2] = new Option('Bio Systems Technology','Bio Systems Technology');	
		resList.options[3] = new Option('Information Technology','Information Technology');	

	}
	else if(selectedStream == 'arts') {
		resList.options[0] = new Option('English Literature','English Literature');	
		resList.options[1] = new Option('Sinhala Language','Sinhala Language');	
		resList.options[2] = new Option('Political Science','Political Science');	
		resList.options[3] = new Option('Logic','Logic');	
		resList.options[4] = new Option('Economics','Economics');	
		resList.options[5] = new Option('Greek Rome Civilizations','Greek Rome Civilizations');	
		resList.options[6] = new Option('French','French');	
	}
	else if(selectedStream == 'commerce') {
		resList.options[0] = new Option('Commerce','Commerce');	
		resList.options[1] = new Option('Accounting','Accounting');	
		resList.options[2] = new Option('Bussiness Studies','Bussiness Studies');	
		resList.options[3] = new Option('Economics','Economics');	
	}
}