(function() {
    Array.prototype.forEach.call(document.querySelectorAll('#toggle-list li'),heading => {
        var target = heading.nextElementSibling;

        var btn = heading.querySelectorAll('button')[0];
        btn.onclick = function() {
            var expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !expanded);

            target.hidden = expanded;
        }
    }
})();


// (function () {
//     var getList = document.querySelectorAll('#toggle-list li');
//
//     Array.prototype.forEach.call(getList, (function (item) {
//         console.log()
//         var target = item.nextElementSibling;
//
//         var btn = item.querySelectorAll('button')[0];
//         btn.onclick = function () {
//             var expanded = btn.getAttribute('aria-expanded') === 'true';
//             btn.setAttribute('aria-expanded', !expanded);
//             target.hidden = expanded;
//         }
//     }))
// });
