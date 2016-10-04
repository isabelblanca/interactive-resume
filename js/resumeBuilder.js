var bio ={
	"name" : "Isabel Blanco",
	"role" : "Front-End developer",
	"contacts" : {
		"mobile" : "+44 7923 259298",
		"email" : "isabelblancodura@gmail.com",
		"linkedIn" : "linkedin.com/isabelblancodura",
		"github" : "github.com/isabelblancodura",
		"location" : "Southampton",
	},
	"picture" : "images/me.jpg" ,
	"welcomeMessage" : "Hello, can I write some code for you?",
	"skills" :[
,
		"HTML5",
		"CSS3",
		"JavaScript",
		"Less",
		"Bootstrap",
		"jQuery",
		"Git, gitHub",
		"Knockout",
		"jasmine.js",
		"Responsive Design"
	],
	"display" : function(){
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		$("#header").prepend(formattedName);

		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		$("#header").prepend(formattedRole);

		var formattedImage = HTMLbioPic.replace("%data%", bio.picture);
		$("#header").append(formattedImage);

		var formattedNumber = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedlinkedIn = HTMLlinkedIn.replace("%data%",bio.contacts.linkedIn);
		var formattedGitHub = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

		$("#topContacts").append(formattedNumber + formattedEmail + formattedlinkedIn + formattedGitHub + formattedLocation);
		$("#footerContacts").append(formattedNumber + formattedEmail + formattedlinkedIn + formattedLocation);

		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}

		var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedMsg);
	}
};
var work = {
	"jobs" :[
		{
			"employer" : "Kee ltd",
			"position" : "Front End Developer",
			"dates" : "Three months",
			"location" : "Winchester,UK",
			"description" : "This job has been my first oportunity like a Front-End. I was working hand by hand with the designer team, as I were the unique Front-End at the company.  I learnt as well to keep the smal eye details on a web site using PerfectPixel  Chrome extension."
		},
		{
			"employer" : "Costa Coffee",
			"position" : "Key Holder Barista",
			"dates" : "one year and half",
			"location" : "Southampton",
			"description": "The Work in Costa Coffee have teached me quickly resolution of problems, work like a part of a team and specially organization skills. I were combining the job with web development learning, and my schedules on Costa were alternatives, so I needed to organize myself each day.",
		}		
	],
	"display" : function() {
		for (var job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].position);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

			$(".work-entry:last").append(formattedEmployerTitle + formattedDate + formattedDescription);
		}
	}
};
var education ={
	"schools" :[
		{
			"name" : "Henry Matisse",
			"location" : "Valencia",
			"degree" : "Media Produccion",
			"onlineInfo" : "www.henrymatisse.com"
		},
		{
			"name" : "La Marxadella",
			"location" : "Torrent",
			"degree" : "Multimedia Produccion",
			"onlineInfo" : "www.lamarxadella.com"
		}
	],
	"online":[
		{
			"title" : "Front End developer Nanodegree",
			"school" : "Udacity",
			"web" : "www.udacity.com",
		},
		{
			"title" : "web development foundamentals",
			"school" : "Hilton University",
			"web": "www.hiltonuniversity.com",
		}
	],
	"display" : function() {
		for (var school in education.schools) {
			$("#education:last").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolWeb = HTMLschoolDates.replace("%data%", education.schools[school].onlineInfo);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolCity + formattedSchoolWeb + "<br>");
		}
		$(".education-entry:last").append(HTMLonlineClasses);

		for (var course in education.online) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[course].school);
			var formattedOnlinedURL = HTMLonlineDates.replace("%data%", education.online[course].web);

			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlinedURL +"<br>");
		}
		for (var school in education.schools) {
			$("#education:last").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolWeb = HTMLschoolDates.replace("%data%", education.schools[school].onlineInfo);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolCity + formattedSchoolWeb + "<br>");
		}
		$(".education-entry:last").append(HTMLonlineClasses);

		for (var course in education.online) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[course].school);
			var formattedOnlinedURL = HTMLonlineDates.replace("%data%", education.online[course].web);

			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlinedURL +"<br>");
		}
	}
};
var projects ={
	"myProjects" :[
		{
			"title" : "Neighborhood Map",
			"date" : "2015",
			"description" : "The application consists of three main components: a Google Map, a Third Party API, and  a responsive design. The goal of this project was to add some of my favorite locations as markers on a Google Map. When the user clicks on the marker,  the most recent foursquare posts for the corresponding location will load into the user interface. All this content will  adapt and remain usable at various screen sizes.",
			"link" : "http://isabelblanco.github.io/neighborhood-map/"
		},
		{
			"title" : "Frogger",
			"date" : "2015",
			"description" : "Haz clic para editar la descripción del proyectoThis is a basic clone of the popular arcade game “Frogger”. All the Image Assets and game engine are provided and the objective is to create the mechanics of the game. ( Movement, Collision Detection, Animation, and Failure ). This project develops understanding of HTML5 Canvas, OOP and basic web-based game development.",
			"link" : "http://isabelblanco.github.io/arcade-game/"
		},
		{
			"title" : "Unit Testing",
			"date" : "2015",
			"description" : "The application consists of three main components: a Google Map, a Third Party API, and  a responsive design. The goal of this project was to add some of my favorite locations as markers on a Google Map. When the user clicks on the marker,  the most recent foursquare posts for the corresponding location will load into the user interface. All this content will  adapt and remain usable at various screen sizes.",
			"link" : "http://isabelblanco.github.io/FeedReder/"
		}
	],
	"display" : function() {
		for (var project in projects.myProjects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.myProjects[project].title);
			$(".project-entry:last").append(formattedProjectTitle);

			var formattedProjectDate = HTMLprojectDates.replace("%data%",projects.myProjects[project].date);
			$(".project-entry:last").append(formattedProjectDate);

			var formattedProjectDesc = HTMLprojectDescription.replace("%data%",projects.myProjects[project].description);
			$(".project-entry:last").append(formattedProjectDesc);

			var formattedProjectLink = HTMLprojectLink.replace("%data%",projects.myProjects[project].link);
			$(".project-entry:last").append(formattedProjectLink);

		}
	}
};
$("#mapDiv").append(googleMap);
bio.display();
work.display();
education.display();
projects.display();

