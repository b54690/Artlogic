(function() {
    const headings = document.querySelectorAll('#expandable');

    Array.prototype.forEach.call(headings, heading => {
        let btn = heading.querySelectorAll('#button-expand')[0];
        let target = heading.nextElementSibling;

        btn.onclick = () => {
            let expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !expanded);
            target.hidden = expanded;

            if (expanded) {
                btn.innerHTML = '&#9660;'
            } else {
                btn.innerHTML = '&#9650;'
            }
        }
    })
})();
