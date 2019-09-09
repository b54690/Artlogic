var resolveList = function () {
    const questionList = document.querySelector('#toggle-list');

    questionList.innerHTML = '<ol class="toggle-list">' + window.questions.rows.map(function (row) {
        return  '<li class="u-margin-bottom-small u-margin-top-small" id="expandable">' + row.title +
                '<span class="icon__float-right"><button aria-expanded="false"></button></span>' +
                '</li>' + '<p class="u-margin-bottom-medium" hidden>' + row.content + '</p>' +
                '<hr class="line-break">';
    }).join('') + '</ol>';
};

window.addEventListener('load', resolveList);
