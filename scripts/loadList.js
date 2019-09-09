var questions;
var loadList = function() {

    var request = new XMLHttpRequest();
    request.open('GET', 'https://private-51d28-artlogic.apiary-mock.com/questions',false);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            questions = JSON.parse(request.responseText);
        }
    };

    request.onerror = function () {
        throw new Error('error loading data');
    };

    request.send();
};

window.addEventListener('load', loadList);
