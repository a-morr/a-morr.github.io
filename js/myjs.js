$(document).ready(function(){

    selectWord(".about");

    $("li a.nav").click(function() {

        var classClicked = this.className.toString()
        // remove the nav from the tag
        .replace(/ nav/g, '');
        console.log(classClicked);
        classClicked = "." + classClicked;

        if (classClicked != activeMenu){
            unselectAll();
            selectWord(classClicked);
        }
        else{
            //console.log("activeMenu matches the clicked item");
            return;
        }
    });

})

var activeMenu = "";
var dict = {}
dict[".about"] = "#load-about";
dict[".resume"] = "#load-resume";
dict[".projects"] = "#load-projects";
dict[".publications"] = "#load-publications";
dict[".contact"] = "#load-contact";


function selectWord(id) {
    $(dict[activeMenu]).toggle(250);
    console.log("settign the activeMenu as: " + id);
    activeMenu = id;

    $(id).css("font-weight", "bold");
    $(id).css("font-size", "20px");
    $(id).css("text-decoration", "underline");

    $(dict[id]).toggle(250);
}

function unselectWord(id) {
    $(id).css("font-weight", "normal");
    $(id).css("font-size", "16px");
    $(id).css("text-decoration", "none");
}

function unselectAll(){
    unselectWord(".about");
    unselectWord(".resume");
    unselectWord(".projects");
    unselectWord(".publications");
    unselectWord(".contact");
}

