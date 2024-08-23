//Documentation begins here
//Started: June 24th, 2021
//Last Edit: May 7th, 2022
//Jacky Kam

//Definitions:
    //Home Page: The first page shown to a new web user
    //Project Table: The project selection table
        //Project Page: A page for a specific project selected from the project table
    //Contact Page: The page where all relevant contact information can be sourced

//------Declare Variables-----//
//Array of Project Objects - Sorted chronologically by oldest first
//Title: Name of project
//Classifiers: Allows user to sort projects
    //None: All projects
    //Coding: Any project needing microcontrollers, UI, back-end coding
    //Design: Any project related to drawings, detailed design, CAD
    //Fabrication: Any project requiring ample manufacturing and physical fabrication
    //Ongoing: Any ongoing project still in the works
//Thumbnail: Image to display in the table
//Date: Start and end date of project
//Desc: Brief description of project, displayed on hover
//ButtonText: Cute text to entice user to click
var projectsComplete = [
    //Project 1: The Penstares - The Game
    {
        title: "JavaScript Game",
        page: "1",
        classifiers: ["none", "coding"],
        thumbnail: "assets/project1-jsgame/thumbnail.png",
        date: "October 2017 - March 2018",
        tags: ["JavaScript", "HTML", "CSS", "PHP", "UI-Design"],
        desc: "An high-school introduction to JavaScript and webdesign. Character information saved using PHP, UI designed using HTML and CSS.",
        buttonText: "Assets loading!",
    },

    //Project 2: Wakanda Forever
    {
        title: "Metalwork Shield",
        page: "2",
        classifiers: ["none", "fabrication"],
        thumbnail: "assets/project2-shield/thumbnail.jpg",
        date: "October 2018 - May 2019",
        tags: ["Metalwork", "Fabrication", "MIG Welding"],
        desc: "High-school metalwork project. Wearable recreation of the Captain America's Wakandan Shield made from 18-gauge sheet metal.",
        buttonText: "A cosplayer's dream!",
    },
    //Project 3: CADChain
    {
        title: "CAD Keychain",
        page: "3",
        classifiers: ["none", "design"],
        thumbnail: "assets/project3-keychain/thumbnail.png",
        date: " September 2019 - October 2019",
        tags: ["CAD", "OnShape", "3D-Printing"],
        desc: "Interactable gear keychain designed in OnShape. First-year student competition with final design voted as a Top 10 model among 1000+ peers.",
        buttonText: "Gearing up!",
    },
    //Project 4: Free-Thinker Bot
    {
        title: "Line-Following Robot",
        page: "4",
        classifiers: ["none", "design", "coding"],
        thumbnail: "assets/project4-linebot/thumbnail.jpg",
        date: "October 2010 - December 2020",
        tags: ["Arduino", "Design", "Hardware", "Microcontrollers", "Circuitry"],
        desc: "Second-year design project. Designed and coded a robot which utilizes IR sensors to follow a black line unassisted with accuracy and speed in mind.",
        buttonText: "Get in line!",
    },
    //Project 5: ControllerUtilizingMovementSensors&HapticOperatedTechnology
    {
        title: "Audio Synth Glove",
        page: "5",
        classifiers: ["none", "fabrication", "coding"],
        thumbnail: "assets/project5-audioglove/thumbnail.jpg",
        date: "January 2021 - April 2021",
        tags: ["Soldering", "UI-Design", "HTML", "CSS", "JavaScript", "Microcontrollers", "Data Communication", "Circuitry"],
        desc: "Second-year capstone. A glove capable of translating hand and finger movement into basic audio. Flex and movement sensor data communicated to a user interface over WiFi.",
        buttonText: "Literal jazz hands!",
    },
    //Project 6: Torque-Inducing Tremor Stabilizer: WearableApparatusNeedingKerasMyowareEMG&OtherFlywheelFixtures
    {
        title: "Tremor Stabilization Glove",
        page: "6",
        classifiers: ["none", "design", "fabrication", "coding"],
        thumbnail: "assets/project6-tremorglove/thumbnail.jpg",
        date: "September 2022 - April 2022",
        tags: ["CAD", "SolidWorks", "Metalwork", "Project Management", "Soldering", "Fabrication", "Lathing", "Waterjet Cutting", "Python", "Microcontrollers", "EMG", "Neural Network", "3D-Printing", "Circuitry"],
        desc: "Third-Year capstone. A glove utilizing gyroscopic stabilization to dampen the effect of tremor in the hands. Machine learning algorithm detects the occurence and intensity of tremor.",
        buttonText: "A shaky start!",
    },
    //Project 7: Ataksak
    {
        title: "Drone Claw Assembly",
        page: "7",
        classifiers: ["none", "design", "fabrication"],
        thumbnail: "assets/project7-uas2022/thumbnail.png",
        date: "November 2021 - May 2022",
        tags: ["CAD", "SolidWorks", "FEA", "Waterjet Cutting", "Laser Cutting", "Fabrication", "Metalwork", "3D-Printing", "Hardware", "Soldering"],
        desc: "Served as mechanical designer and integration specialist of a package retrieval system for the Unmanned Systems Canada 2022 competition. Aided in the fabrication and integration of landing gear for the drone.",
        buttonText: "To new heights!",
    },
]

//------Functions Start Here-----//
//---Syntax---//
//Function Name
//Function Purpose
//Function Inputs / Outputs (If applicable)

//Window preloader
//Animates a preloader while window loads content behind it
document.addEventListener("DOMContentLoaded", function(){
    var loader = document.getElementById("preloader");
    //First begin fade upwards
    setTimeout(()=> {
        loader.classList.add("animate");
    }, 4000);
    //Buffer hiding element until animation completes
    setTimeout(()=> {
        loader.style.display = "none";
    }, 5000);
})

//resetAll()
//Function used to reset states of all pages including dropdowns and hidden elements
function resetAll(){
    createTable('none');
    document.getElementById("proj5Collapse").classList.remove("animate");
    document.getElementById("aboutCourseTable").classList.remove("animate");
    document.getElementById("courseDrop").src = 'assets/icons/dropDown.png';
    document.getElementById("courseText").innerHTML = "Expand Course Table";
}

//toTop()
//Brings user back to top of page via scroll
//scrollButton: This button is a child to a parent page which we wish to scroll to the top of
function toTop(scrollButton){
    //Grab the parent div of the current button
    let div = scrollButton.parentNode;
    //Scroll to top position
    div.scrollTo({top: 0, behavior: 'smooth'});
}

//mediaText(text)
//Shows text on hover in the media section, clear div on hover out
//text: The text to be shown
function mediaText(text){
    document.getElementById("mediaText").innerHTML = text;
}

//menuPage(page)
//Changes current page shown when user navigates from nav bar
//page: The page to go show
function menuPage(page){
    //First hide all pages
    document.getElementById("homeSpan").style.display="none";
    document.getElementById("projectSpan").style.display="none";
    document.getElementById("aboutSpan").style.display="none";
    document.getElementById("contactSpan").style.display="none";
    closeAll();
    //Show selected page
    document.getElementById(page).style.display="block";
}

//createTable(sort)
//Creates and places project squares on the project page
    //Project objects are contained within projectsComplete
    //Items display a brief description on hover, bring to page on click
//sort: The classifier of project the user is filtering by (all / coding / design/ fabrication / ongoing)
function createTable(sort){
    //Apply 'sort' filter to 'projectsComplete'
    let projects = projectsComplete.filter(project => project.classifiers.includes(sort));
    //Clear table
    document.getElementById("tableContainer").innerHTML="";
    var row = document.getElementById("tableContainer");
    //Begin creation of items, one for each object in 'projects' 
    for (i=0; i < projects.length; i++){
        //Create Project Container, assign 'tableItem' class and make flex row, assign id 'projectContainer' + (index) so we don't start @ 0
        var projectContainer = document.createElement("div");
            projectContainer.className = "tableItem col-xs-12 col-sm-6 col-md-4 col-lg-3";
            (function(index){projectContainer.id="projectContainer" + projects[index].page})(i);
        //Create thumbnail img for project
        var thumbnail ='url(' + projects[i].thumbnail + ')';
            projectContainer.style.backgroundImage = thumbnail;
        //Create header for project, assign id 'projectHeader' + (index)
        var projectHeader = document.createElement("div");
            projectHeader.className ="tableHeader";
            projectHeader.innerHTML = projects[i].title;
            (function(index){projectHeader.id="projectHeader" + projects[index].page})(i);
        //Create description on hover, assign id to the containing div 'projectDesc' + (index)
        var projectDesc = document.createElement("div");
            projectDesc.className = "projectDesc";
            //Reinsert the project title
            var projectDescHeader = document.createElement("text");
                projectDescHeader.className = "projectDescHeader";
                projectDescHeader.innerHTML = projects[i].title;
            //Add brief description & date to display on hover
            var projectDescBody = document.createElement("text");
                projectDescBody.className = "projectDescBody";
                projectDescBody.innerHTML = projects[i].desc;
            var projectDescDate = document.createElement("text");
                projectDescDate.className = "projectDescDate";
                projectDescDate.innerHTML = projects[i].date;
            //Add little flavortext urging user to go to page
            var projectDescFluff = document.createElement("text");
                projectDescFluff.className = "projectDescFluff";
                projectDescFluff.innerHTML = projects[i].buttonText + " >>>";
            (function(index){projectDesc.id="projectDesc" + projects[index].page})(i);
            //Add mouseover event to display description, mouseout to hide description
            (function(index){
                projectContainer.onmouseover = function(){
                    var currentDesc = "projectDesc" + projects[index].page;
                        document.getElementById(currentDesc).classList.add("animate");
                    var currentHeader = "projectHeader" + projects[index].page;
                        document.getElementById(currentHeader).classList.add("animate");
                }
                projectContainer.onmouseout = function(){
                    var currentDesc = "projectDesc" + projects[index].page;
                        document.getElementById(currentDesc).classList.remove("animate");
                    var currentHeader = "projectHeader" + projects[index].page;
                        document.getElementById(currentHeader).classList.remove("animate");
                }
            })(i);
            //Add onclick event to direct user to the respective project page
            (function(index){
                projectContainer.onclick = function(){
                    var projectPage = "projectPage" + projects[index].page;
                    //First close all pages, then display the selected page
                    closeAll();
                    document.getElementById("projectPageContainer").style.display="block";
                    document.getElementById(projectPage).style.display = "block";
                    //Create page item, append a button to close page
                    var page = document.getElementById(projectPage);
                    var closeButton = document.createElement("img");
                        closeButton.src = "assets/icons/menuClose.png";
                        closeButton.className = "closeButton";
                        //Animates on close, buffer hiding until animation finishes
                        closeButton.onclick = function(){
                            document.getElementById(projectPage).classList.remove("animate");
                            setTimeout(()=>{closeAll();},400)
                        };
                        page.appendChild(closeButton);  //Append close button to 'page'
                    //Buffer pop-up animation until after display set to block
                    setTimeout(()=>{
                        document.getElementById(projectPage).classList.add("animate");
                    },1);
                    //All the page setup goodness
                    //Clear existing tags, fill with project tags
                    var current = "tagTable" + projects[index].page;
                    var tableRow = document.getElementById(current);
                        tableRow.innerHTML = "";
                    var tagTitle = document.createElement("text");
                        tagTitle.innerHTML = "Tags: ";
                        tagTitle.style = "font-size: 22px; color: rgb(255, 255, 255); margin-right: 10px;"
                        tableRow.append(tagTitle);
                    var tagsSorted = projects[index].tags.sort();
                        //Loop through table, append each tag to row
                        for (i=0; i<tagsSorted.length; i++){
                            var newTag = document.createElement("text");
                            newTag.innerHTML = tagsSorted[i]; 
                            newTag.className = "projectPageTag";
                            tableRow.appendChild(newTag);
                        }
                    //Add onscroll function to display 'back to top' button
                    document.getElementById(projectPage).onscroll = function() {
                        var topButton = "toTop" + projects[index].page;
                        if (this.scrollTop > 100){
                            document.getElementById(topButton).style.display = "block";
                        }
                        else{
                            document.getElementById(topButton).style.display = "none";
                        }
                    };
                }
            })(i);
        //Append all the created elements to 'projectContainer', and the project container to main table 'row'
        projectDesc.appendChild(projectDescHeader);   //Append hover description header to 'projectDesc'
        projectDesc.appendChild(projectDescBody);     //Append hover body text to 'projectDesc'
        projectDesc.appendChild(projectDescDate);     //Append hover date text to 'projectDesc'
        projectDesc.appendChild(projectDescFluff);    //Append hover flavortext to 'projectDesc'
        projectContainer.appendChild(projectDesc);    //Append 'projectDesc' to 'projectContainer'
        projectContainer.appendChild(projectHeader);  //Append main header to 'projectContainer' 
        row.prepend(projectContainer);                //Append 'projectContainer' item to the row
    }
    //Create ghost elements to pad space in table
    for (i=0; i<3; i++){
        var pad = document.createElement("i")
        pad.className = "tablePad";
        //Append ghost elements to main table
        row.appendChild(pad);
    }
    //Add a snazzy sequential animation
    for(let k=0; k < projects.length; k++){
        (function(index){
            setTimeout(()=>{
                var currentContainer = "projectContainer" + (projects[index].page);
                document.getElementById(currentContainer).classList.add("animate");
            },index*50);
        })(k)
    }
    //Proceed to next item in the filtered list
}

//closeAll()
//Closes all 'projectPage' elements
function closeAll(){
    for (i=0; i<projectsComplete.length; i++){
        var projectPage = "projectPage" + (i+1);
        document.getElementById(projectPage).classList.remove("animate");
        document.getElementById(projectPage).style.display="none";
    }
    document.getElementById("projectPageContainer").style.display="none";
}

//collapseMe()
//Expands and collapses various dropdown menus for certain pages 
function collapseMe(element){
    var current = document.getElementById(element).classList.contains("animate");
    if (current == true){
        document.getElementById(element).classList.remove("animate");
        //Only relevant in the 'about' page
        document.getElementById("courseDrop").src = 'assets/icons/dropDown.png';
        document.getElementById("courseText").innerHTML = "Expand Course Table";
    }
    else {
        document.getElementById(element).classList.add("animate");
        //Only relevant in the 'about' page
        document.getElementById("courseDrop").src = 'assets/icons/dropUp.png';
        document.getElementById("courseText").innerHTML = "Collapse Course Table";
    }
}

//resumeHover()
//Creates hover effect over the download resume button in the 'contact' page
function resumeHover(){
    var current = document.getElementById("contactResume").style.color;
    if (current == 'rgb(255, 255, 255)'){
        document.getElementById("contactResume").style.color = "rgb(0, 0, 0)";
        document.getElementById("contactResumePic").src = "assets/icons/downloadIcon2.png";
    }
    else{
        document.getElementById("contactResume").style.color = "rgb(255, 255, 255)";
        document.getElementById("contactResumePic").src = "assets/icons/downloadIcon1.png";
    }
}