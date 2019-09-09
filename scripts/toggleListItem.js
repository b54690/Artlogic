var toggleListItem = function () {
    var getList = document.querySelectorAll('#toggle-list li');

    Array.prototype.forEach.call(getList, (function (item) {
        var target = item.nextElementSibling;

        var btn = item.querySelectorAll('button')[0];
        btn.onclick = function () {
            var expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !expanded);
            target.hidden = expanded;
        }
    }))
};

window.addEventListener('load', toggleListItem);
