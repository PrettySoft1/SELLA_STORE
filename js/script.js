function $(name) {
    return [...document.querySelectorAll(name)];
}

document.onclick = function(e) {
    if (e.target != $("#toggle-menu")[0]) {
        if ($("#menu")[0].getAttribute('data-toggle') == 1) {
            $("#menu")[0].setAttribute('data-toggle', 0)
            $("#menu")[0].classList.remove('links-toggle-show');
        }
    }
};


// Toggle Menu For Small Screens Expand & Unexpand
let toggle_menu = $("#toggle-menu")[0];
toggle_menu.onclick = function() {
    let menu = $("#menu")[0];
    if (menu.getAttribute('data-toggle') == 0) {
        menu.setAttribute('data-toggle', 1)
        menu.classList.add('links-toggle');
        setTimeout(()=>{
            menu.classList.add('links-toggle-show');
        },10)
    } else {
        menu.classList.remove('links-toggle-show');
        menu.setAttribute('data-toggle', 0)
    }
};
