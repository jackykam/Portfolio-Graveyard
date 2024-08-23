//Documentation begins here
//Started June 24th, 2021
//Jacky Kam

//Definitions:
    //Home Page: The first page shown to a new web user
    //Project Table: The project selection table
        //Project Page: A page for a specific project selected from the project table
    //Contact Page: The page where all relevant contact information can be sourced

//------Declare Variables-----//
//projectsComplete: Array of completed projects
var projectsComplete = [
    //Sorted by completion date
    //Project1 : SumoBot
    {
        title: "SumoBot",
        img: "Assets/iconProject1.jpg",
        classifiers: "Physical",
        date: "November 2017",
        page:"projectMain1",
        bannerImg: "Assets/proj1/sumobot1.jpg",
        mechanical: "2/10",
        electrical: "2/10",
        software: "0/10",
        desc: "Competition featuring player-driven sumobots. Chassis created from sheet metal, controller from wood, and components hand soldered."
    },
    //Project2 : JavaScript Game
    {
        title: "JavaScript Game",
        img: "Assets/iconProject2.png",
        classifiers: "Software",
        date: "March 2018",
        page:"projectMain2",
        bannerImg: "Assets/proj2/proj2Banner.png",
        mechanical: "0/10",
        electrical: "0/10",
        software: "5/10",
        desc: "High-school game. Choice driven storyline with turn-style combat in-line with Pokemon, Final Fantasy, etc. Coded using HTML, CSS, Javascript, and PHP."
    },
    //Project3 : Wakandan Shield
    {
        title: "Shield Design",
        img: "Assets/iconProject3.jpg",
        classifiers: "Physical",
        date: "May 2019",
        page:"projectMain3",
        bannerImg: "Assets/proj3/proj3Banner.jpg",
        mechanical: "4/10",
        electrical: "0/10",
        software: "0/10",
        desc: "High-school metalwork project. Recreation of the Captain America's Wakandan Shield made from 18-gauge steel."
    },
    //Project4 : CAD Keychain
    {
        title: "CAD Keychain",
        img: "Assets/iconProject4.png",
        classifiers: "Drafting",
        date: "October 2019",
        page:"projectMain4",
        bannerImg: "Assets/proj4/proj4Banner.png",
        mechanical: "3/10",
        electrical: "0/10",
        software: "0/10",
        desc: "Interactable gear keychain designed in the OnShape CAD program, with final design voted as a Top 10 model among 1000+ peers."
    },
    //Project5 : Cardboard Chair
    {
        title: "Cardboard Chair",
        img: "Assets/iconProject5.jpg",
        classifiers: "Drafting | Physical",
        date: "November 2019",
        page:"projectMain5",
        bannerImg: "Assets/proj5/proj5Banner.jpg",
        mechanical: "5/10",
        electrical: "0/10",
        software: "0/10",
        desc: "University Year 1 design project. Design a sturdy and portable chair utilizing sustainable resources. Capable of supporting 200+ lbs, with < 30s assembly time."
    },
    //Project6 : Robotic Claw
    {
        title: "Robotic Claw",
        img: "Assets/iconProject6.png",
        classifiers: "Drafting | Physical | Software",
        date: "February 2020",
        page:"projectMain6",
        bannerImg: "Assets/proj6/proj6Banner.jpg",
        mechanical: "5/10",
        electrical: "3/10",
        software: "3/10",
        desc: "University Year 1 project. Design and fabricate a device capable of retrieving an assortment of objects in a given period of time. Body created from aluminum, coded for Arduino in C++."
    },
    //Project7 : Line Following Robot
    {
        title: "Line Following Robot",
        img: "Assets/iconProject7.jpg",
        classifiers: "Drafting | Physical | Software",
        date: "December 2020",
        page:"projectMain7",
        bannerImg: "Assets/proj7/proj7Banner.jpg",
        mechanical: "4/10",
        electrical: "5/10",
        software: "5/10",
        desc: "University Year 1 project. Design and code a robot which utilizes IR sensors to follow a black line unassisted and in a short time."
    },
    //Project8 : Audio Synthesizer Glove
    {
        title: "Audio Synth Glove",
        img: "Assets/iconProject8.jpg",
        classifiers: "Drafting | Software",
        date: "April 2021",
        page:"projectMain8",
        bannerImg: "Assets/proj8/proj8Banner.png",
        mechanical: "5/10",
        electrical: "5/10",
        software: "7/10",
        desc: "University Year 2 capstone. A glove capable of translating hand and finger movements into basic audio. ESP32 used as microcontroller, with information being sent and decoded over WiFi to a JavaScript UI."
    }
];
//projectsOngoing: Array of WIP projects 
var projectsOngoing = [
    //Sorted by start date
    //Website
    {
        title: "Site",
        img: "Assets/iconProjectOngoing1.png",
        classifiers: "Software",
        date: "Started June 2021",
        page:"projectOngoingMain1",
        bannerImg: "Assets/projOngoing1/projOngoing1Banner.png",
        mechanical: "0/10",
        electrical: "0/10",
        software: "7/10",
        desc: "This current webpage. Learning to apply Bootstrap and Javascript, while practicing web design."
    },
    //Figgle Jiggle
    {
        title: "FIGJIG",
        img: "Assets/iconProjectOngoing3.jpg",
        classifiers: "Drafting | Physical | Software",
        date: "Started July 2021",
        page:"projectOngoingMain2",
        bannerImg: "Assets/projOngoing2/projOngoing2Banner.jpeg",
        mechanical: "6/10",
        electrical: "8/10",
        software: "9/10",
        desc: "An assistive device designed to help afflicted individuals suppress hand tremors using myoware sensors and machine learning."
    },
    //DivEye
    {
        title: "Diveye",
        img: "Assets/iconProjectOngoing2.jpeg",
        classifiers: "Drafting | Physical | Software",
        date: "Started August 2021",
        page:"projectOngoingMain3",
        bannerImg: "Assets/projOngoing3/projOngoing3Banner.jpeg",
        mechanical: "7/10",
        electrical: "7/10",
        software: "5/10",
        desc: "Diving goggles with integrated components to provide a heads-up-display which shows pressure, time underwater, etc."
    },
];
//Project List: Used when sorting projects by specific categories
var projectList = [
    //All Projects, ordered from most recent
    [8,7,6,5,4,3,2,1],
    //Drafting Projects
    [6,5,4],
    //Physical Projects
    [7,6,3,1],
    //Software Projects
    [8,7,6,2]
];



//-----Global functions-----//
//menuPage(page)
    //On icon select, display the specific page (home, projects, contact)
function menuPage(page){
    document.getElementById("homeSpan").style.display="none";
    document.getElementById("projectSpan").style.display="none";
    document.getElementById("contactSpan").style.display="none";
    document.getElementById("projectMain").style.display="none";

    document.getElementById(page).style.display="block";
}

//-----Home Page Functions-----//
//collapseMe(element)
    //element: The ID of the element to collapse / expand
function collapseMe(element){
    current = document.getElementById(element).offsetHeight - 10;
    if (current != 0){
        document.getElementById(element).style.height = "0px";
        document.getElementById(element).style.maxHeight = "0px";
    }
    else{
        document.getElementById(element).style.height = "fit-content";
        document.getElementById(element).style.maxHeight = "200px";
    }
}

//-----Project Table functions-----//
//Project Table Page
//createTable(sorter)
    //sorter: The category of which the table is sorted by
    //Creates 3 by x table where x is rows of 3, created in order of most recent
function createTable(sorter){
    //Clear the existing table
    document.getElementById("projectTable").innerHTML="";
    var amount = projectList[sorter].length - 1;
    var i = 0;
    while(i <= amount){
        //Create row
        var row = document.createElement("div");
        row.className = "row flex-md-row mx-md-n5 justify-content-center";
        //Append row to table
        document.getElementById("projectTable").appendChild(row);
        //Create cells in groups of 3 per row
        for(let j=0; j<3; j++){
            var current = projectsComplete[(projectList[sorter][i] - 1)];
            //Check if project exists: Empty projects are undefined, will end loop in that case
            if (typeof current != "undefined"){
            //Create a cell
            var cell = document.createElement("div");
                //Add Class
                cell.className="projectSq col-md-4";
                (function(index){cell.id="td" + index})(i);
                //Add function onclick
                (function(index){
                    var goPage = projectsComplete[(projectList[sorter][index] - 1)].page; 
                    var skillMech = "mechanical" + (projectList[sorter][index]);
                    var skillElec = "electrical" + (projectList[sorter][index]);
                    var skillSoft = "software" + (projectList[sorter][index]);
                    var skillBar = "skillBar" + (projectList[sorter][index]);
                    var carousel = "carousel" + (projectList[sorter][index]);
                    cell.addEventListener("click", function(){
                        closeAll();
                        displayProject(goPage), 
                        descShow('Overview', (projectList[sorter][index])),
                        //Assign all the Banner stuff
                        document.getElementById("banner").src=projectsComplete[(projectList[sorter][index] - 1)].bannerImg;
                        document.getElementById("bannerTitle").innerHTML=projectsComplete[(projectList[sorter][index] - 1)].title;
                        document.getElementById("bannerClassifier").innerHTML=projectsComplete[(projectList[sorter][index] - 1)].classifiers;
                        document.getElementById("bannerDate").innerHTML=projectsComplete[(projectList[sorter][index] - 1)].date;
                        //Setup all of the Skillbar stuff
                        document.getElementById(skillBar).style.display="block";
                        document.getElementById(skillMech).innerHTML=projectsComplete[(projectList[sorter][index] - 1)].mechanical;
                        document.getElementById(skillMech).style.width= (parseInt(projectsComplete[(projectList[sorter][index] - 1)].mechanical, 10)*10) + '%';
                        document.getElementById(skillElec).innerHTML=projectsComplete[(projectList[sorter][index] - 1)].electrical;
                        document.getElementById(skillElec).style.width= (parseInt(projectsComplete[(projectList[sorter][index] - 1)].electrical, 10)*10) + '%';
                        document.getElementById(skillSoft).innerHTML=projectsComplete[(projectList[sorter][index] - 1)].software;
                        document.getElementById(skillSoft).style.width= (parseInt(projectsComplete[(projectList[sorter][index] - 1)].software, 10)*10) + '%';
                        //Set the given image carousel
                        document.getElementById(carousel).style.display="block";
                    });
                })(i)
                //Create image
                    var container = document.createElement("div");
                        container.classList.add("iconImageCon");
                    var pic = document.createElement("img");
                    //Add class
                    pic.classList.add("iconImage");
                    pic.src = current.img;
                    //Append image to cell
                    container.appendChild(pic)
                    cell.appendChild(container);
                //Create icon banner
                    var iconInfo = document.createElement("text");
                    //Add class
                    iconInfo.classList.add("iconTitle");
                    iconInfo.innerHTML = current.title;
                    //Add linebreak
                    var br = document.createElement("br");
                        iconInfo.appendChild(br);
                    //Add classifiers
                    var classifier = document.createElement("text");
                        classifier.classList.add("iconClassifier");
                        classifier.innerHTML = current.classifiers;
                        iconInfo.appendChild(classifier);
                    //Append icon banner to cell
                    cell.appendChild(iconInfo);
                //Create project descriptor
                    var descContainer = document.createElement("div");
                        descContainer.classList.add("iconDesc");
                    var descTitleCon = document.createElement("div");
                        descTitleCon.classList.add("descTitle");
                    var descTitle = document.createElement("text");
                        descTitle.classList.add("descTitle");
                    var desc = document.createElement("text");
                        desc.classList.add("descText");
                    var myLine = document.createElement("div");
                        myLine.classList.add("descLine");
                    descTitle.innerHTML = current.title;
                    descTitleCon.appendChild(descTitle);
                    desc.innerHTML = current.desc;
                    descContainer.appendChild(descTitleCon);
                    descContainer.appendChild(desc);
                    descContainer.appendChild(myLine);
                    cell.appendChild(descContainer);
            }
            //Append cell to the row and increment to move to the next project in list
            row.appendChild(cell);
            i++;
        }
    }
    //Add a snazzy sequential animation
    for(let k=0; k<=amount; k++){
        (function(index){
            setTimeout(()=>{
                var current = "td" + index;
                var cell = document.getElementById(current);
                cell.classList.add("animate");
            },index*50);
        })(k)
    }
}
//ongoingTable()
    //Same as createTable(sorter)
    //Only shows ongoing projects
function ongoingTable(){
    //Clear the existing table
    document.getElementById("projectTable").innerHTML="";
    var amount = projectsOngoing.length - 1;
    var i = 0;
    while(i <= amount){
        //Create row
        var row = document.createElement("div");
        row.className = "row flex-md-row justify-content-center";
        //Append row to table
        document.getElementById("projectTable").appendChild(row);
        //Create cells in groups of 3 per row
        for(let j=0; j<3; j++){
            var current = projectsOngoing[i];
            if (typeof current != "undefined"){
            //Create a cell
            var cell = document.createElement("div");
                //Add Class
                cell.className="projectSq col-md-4";
                (function(index){cell.id="td" + index})(i);
                //Add function
                (function(index){
                    var goPage = projectsOngoing[index].page;
                    var skillMech = "mechanicalOngoing" + (index + 1);
                    var skillElec = "electricalOngoing" + (index + 1);
                    var skillSoft = "softwareOngoing" + (index + 1);
                    var skillBar = "skillBarOngoing" + (index + 1); 
                    //var carousel = "carouselOngoing" + (index + 1);
                    cell.addEventListener("click", function(){
                        closeAll();
                        displayProject(goPage), 
                        descShowOngoing('OngoingOverview', (index+1));
                        document.getElementById("banner").src=projectsOngoing[index].bannerImg;
                        document.getElementById("bannerTitle").innerHTML=projectsOngoing[index].title;
                        document.getElementById("bannerClassifier").innerHTML=projectsOngoing[index].classifiers;
                        document.getElementById("bannerDate").innerHTML=projectsOngoing[index].date;
                        document.getElementById(skillBar).style.display="block";
                        document.getElementById(skillMech).innerHTML=projectsOngoing[index].mechanical;
                        document.getElementById(skillMech).style.width= (parseInt(projectsOngoing[index].mechanical, 10)*10) + '%';
                        document.getElementById(skillElec).innerHTML=projectsOngoing[index].electrical;
                        document.getElementById(skillElec).style.width= (parseInt(projectsOngoing[index].electrical, 10)*10) + '%';
                        document.getElementById(skillSoft).innerHTML=projectsOngoing[index].software;
                        document.getElementById(skillSoft).style.width= (parseInt(projectsOngoing[index].software, 10)*10) + '%';
                        //document.getElementById(carousel).style.display="block";
                    });
                })(i)
                //Create image
                    var container = document.createElement("div");
                        container.classList.add("iconImageCon");
                    var pic = document.createElement("img");
                    //Add class
                    pic.classList.add("iconImage");
                    pic.src = current.img;
                    //Append image to cell
                    container.appendChild(pic)
                    cell.appendChild(container);
                //Create icon banner
                    var iconInfo = document.createElement("text");
                    //Add class
                    iconInfo.classList.add("iconTitle");
                    iconInfo.innerHTML = current.title;
                    //Add linebreak
                    var br = document.createElement("br");
                        iconInfo.appendChild(br);
                    //Add classifiers
                    var classifier = document.createElement("text");
                        classifier.classList.add("iconClassifier");
                        classifier.innerHTML = current.classifiers;
                        iconInfo.appendChild(classifier);
                    //Append icon banner to cell
                    cell.appendChild(iconInfo);
                //Create project descriptor
                    var descContainer = document.createElement("div");
                        descContainer.classList.add("iconDesc");
                    var descTitleCon = document.createElement("div");
                        descTitleCon.classList.add("descTitle");
                    var descTitle = document.createElement("text");
                        descTitle.classList.add("descTitle");
                    var desc = document.createElement("text");
                        desc.classList.add("descText");
                    var myLine = document.createElement("div");
                        myLine.classList.add("descLine");
                    descTitle.innerHTML = current.title;
                    descTitleCon.appendChild(descTitle);
                    desc.innerHTML = current.desc;
                    descContainer.appendChild(descTitleCon);
                    descContainer.appendChild(desc);
                    descContainer.appendChild(myLine);
                    cell.appendChild(descContainer);
            }
            row.appendChild(cell);
            i++;
        }
    }
    for(let k=0; k<=amount; k++){
        (function(index){
            setTimeout(()=>{
                var current = "td" + index;
                var cell = document.getElementById(current);
                cell.classList.add("animate");
            },index*50);
        })(k)
    }
}
//displayProject(project)
    //project: The name of the page we want to display (home, projects, contact)
    //Closes all spans including any current project page, displays selected span
function displayProject(project){
        document.getElementById("homeSpan").style.display="none";
        document.getElementById("projectSpan").style.display="none";
        document.getElementById("contactSpan").style.display="none";
        document.getElementById("projectMain").style.display="block";
        document.getElementById(project).style.display="block";
}
//-----Project Page Functions-----//
//banner(pic)
    //pic: Source url for the image used for project banner
    //Sets the project page banner
    function banner(pic){
        document.getElementById("banner").src = pic;
    }
//All functions to close & reset project page
//closeAll()
    //Resets all sub-pages on a given project page 
function closeAll(){
    var amountComplete = projectList[0].length;
    var amountOngoing = projectsOngoing.length;
    for(i = 1; i <= amountComplete; i++){
        (function(index){
            var overview = "descOverview" + index;
            var materials = "descMaterials" + index;
            var bars = "skillBar" + index;
            var carousels = "carousel" + index;
            document.getElementById(overview).style.display = "none";
            document.getElementById(materials).style.display = "none";
            document.getElementById(bars).style.display = "none";
            document.getElementById(carousels).style.display="none";
        })(i)
    }
    for(i = 1; i <= amountOngoing; i++){
        (function(index){
            var overview = "descOngoingOverview" + index;
            var materials = "descOngoingMaterials" + index;
            var bars = "skillBarOngoing" + index;
            //var carousels = "carouselOngoing" + index;
            document.getElementById(overview).style.display = "none";
            document.getElementById(materials).style.display = "none";
            document.getElementById(bars).style.display = "none";
            //document.getElementById(carousels).style.display="none";
        })(i)
    }
    closeMe();
}
//closeMe()
    //Resets all project pages and returns to the project selection table
function closeMe(){
    document.getElementById("projectMain1").style.display="none";
    document.getElementById("projectMain2").style.display="none";
    document.getElementById("projectMain3").style.display="none";
    document.getElementById("projectMain4").style.display="none";
    document.getElementById("projectMain5").style.display="none";
    document.getElementById("projectMain6").style.display="none";
    document.getElementById("projectMain7").style.display="none";
    document.getElementById("projectMain8").style.display="none";
    document.getElementById("projectOngoingMain1").style.display="none";
    document.getElementById("projectOngoingMain2").style.display="none";
    document.getElementById("projectOngoingMain3").style.display="none";
    document.getElementById("projectMain").style.display="none";
    document.getElementById("projectSpan").style.display="block";
}
//clearDesc(val)
    //val: The value of the specific project page to clear
    //A redundancy similar to closeAll(), resets the project page of only the given value
function clearDesc(val){
    var overview = "descOverview" + val;
    var details = "descDetails" + val;
    var materials = "descMaterials" + val;
    document.getElementById(overview).style.display = "none";
    document.getElementById(details).style.display = "none";
    document.getElementById(materials).style.display = "none";
}
function clearDescOngoing(val){
    var overview = "descOngoingOverview" + val;
    var details = "descOngoingDetails" + val;
    var materials = "descOngoingMaterials" + val;
    document.getElementById(overview).style.display = "none";
    document.getElementById(details).style.display = "none";
    document.getElementById(materials).style.display = "none";
}
//descShow(descPage, num)
    //descPage: The sub-page within the project page (Overview, Details, Materials)
    //num: The value of the specific project
    //Displays the named sub-page for a given project 
function descShow(descPage, num){
    var current = "desc" + descPage + num;  
    clearDesc(num);
    document.getElementById(current).style.display="block";
}
function descShowOngoing(descPage, num){
    var current = "desc" + descPage + num;  
    clearDescOngoing(num);
    document.getElementById(current).style.display="block";
}