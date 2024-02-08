document.onclick = function (e) {
    let target = e.target;
    if (target != $("#toggle-menu")[0]) {
        if ($("#menu")[0] != undefined) {
            if ($("#menu")[0].getAttribute('data-toggle') == 1) {
                $("#menu")[0].setAttribute('data-toggle', 0)
                $("#menu")[0].classList.remove('links-toggle-show');
            }
        }
    }
    let container;
    if ((container = $(".select-container")).length != 0) {
        container.forEach(con => {
            let opCon = con.child(".options")[0];
            if (target != opCon.parent() && target.parent(".select-container") != opCon.parent()) {
                toggleFilterMenu(opCon, e, 'ex');
            }
        })
    }
    let sidebar = $(".sidebar")[0];
    if (sidebar != undefined) {
        if (target == $("#toggle-sidebar")[0]) return;
        if (target == sidebar || target.parent(".sidebar") == sidebar) return;
        if (sidebar.getAttribute("data-status") == "visible") {
            $("main")[0].classList.toggle("right-padding");
            sidebar.setAttribute("data-status", "hidden");
            sidebar.style.width = "0px";
        }
    }
};
