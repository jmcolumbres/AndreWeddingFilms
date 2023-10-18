var inquireBox = document.getElementsByClassName("inquire-box")[0];
var state = true;

inquireBox.style.display = "none";

var formState = function() {
    if(state) {
        state = false;
        inquireBox.style.display = "flex";
    }
    else {
        inquireBox.style.display = "none";
        state = true;
    }
}