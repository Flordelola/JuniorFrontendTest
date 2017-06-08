
var UserSearch = function () {

    return (window.XMLHttpRequest) ? (new XMLHttpRequest()) : (new ActiveXObject('MicrosoftXMLHTTP'));
};

var xmlhttp = new UserSearch();
var xmlhttpList = new UserSearch();

function myRequest(activeXObject, callback, url) {

    activeXObject.open("GET", url, true);
    activeXObject.onreadystatechange = callback;
    activeXObject.send(null);
}

function infoUser() {

    if (this.readyState == 4 && this.status == 200) {
        var resp= xmlhttp.responseText;
        Design.displayHeader(resp);
    } else if (xmlhttp.readyState <= 3) {
        Design.toggleText("Loading...");
    } else {
        Design.displayError();
        Design.toggleText("");
    }
}

function reposList() {

    if (this.readyState == 4 && this.status == 200) {
        var resp = xmlhttpList.responseText;
        Design.displayList(resp);
        Design.toggleText("");
    }
}

function search(login) {

    login = username.value;
    myRequest(xmlhttp, infoUser, "https://api.github.com/users/" + login);
    myRequest(xmlhttpList, reposList, "https://api.github.com/users/" + login + "/repos");
    
}



