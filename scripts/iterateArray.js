var resolveList = function () {
    const questionList = document.querySelector('#toggle-list');

    questionList.innerHTML =
            '<ol class="toggle-list">' + window.questions.rows.map(function (row) {
        return  '<li class="u-margin-bottom-small u-margin-top-small">' + row.title +
                    '<button class="icon__float-right" aria-expanded="false"></button>' +
                '</li>' +
                '<p class="u-margin-bottom-medium" hidden>' + row.content +
                '</p>' +
                '<hr class="list__line-break">';
}).join('') + '</ol>';
};

window.addEventListener('load', resolveList);
