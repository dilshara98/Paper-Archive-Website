function showAlert() {
	var parent = document.getElementById("parent");

	var child = document.createElement("div");
	child.classList.add("alert","alert-success","alert-dismissible");

	var gChild = document.createElement("strong");
	gChild.innerHTML = "Success!";

	var gChild0 = document.createElement("a");
	gChild0.classList.add("close");
	gChild0.setAttribute("href","#");
	gChild0.setAttribute("data-dismiss","alert");
	gChild0.setAttribute("aria-label","close");
	gChild0.innerHTML = "&times;";

	child.innerHTML = "Message succesfully sent.";

	parent.appendChild(child);
	child.appendChild(gChild0);
	child.appendChild(gChild);

}