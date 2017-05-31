//TAB CHANGE
function changeTab(id, name) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="pv-tabcontent" and hide them
	tabcontent = document.getElementsByClassName("pv-tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="pv-tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("pv-tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(name).style.display = "block";
	document.getElementById(id).className += " active";
}

//TAB LOAD FINISHED
function tabMenuReady() {
	//Show menu
	if(document.getElementById("pv-loading_record")){
		document.getElementById("pv-loading_record").className =
			document.getElementById("pv-loading_record").className
				.replace(new RegExp('(?:^|\\s)'+ 'pv-loading' + '(?:\\s|$)'), ' ');
			
		document.getElementById("pv-record_menu").style.display = "block";
	}
	//Default open tab
	if(document.getElementById("defaultOpenExpansion")){document.getElementById("defaultOpenExpansion").click();}
}
