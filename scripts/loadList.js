var loadList = function() {

    var request = new XMLHttpRequest();
    request.open('GET', '../data/data', true);
    request.setRequestHeader()

    console.log('thi is req', request)

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var array = JSON.parse(request.responseText);
            var event = new CustomEvent('listLoaded', array);
            document.dispatchEvent(event);
        }
    };

    request.onerror = function () {
        throw new Error('error loading data');
    };

    request.send();
    // https://stackoverflow.com/questions/35294633/what-is-the-vanilla-js-version-of-jquerys-getjson
};

window.addEventListener('load', loadList);
