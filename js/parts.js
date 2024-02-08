// For Toggle SideBar
let toggleSide = $("#toggle-sidebar")[0];
toggleSide.addEventListener("click", (e) => {
    $("main")[0].classList.toggle("right-padding");
    let sidebar = $(".sidebar")[0];
    if (sidebar.getAttribute("data-status") == "visible") {
        sidebar.setAttribute("data-status", "hidden");
        sidebar.style.width = "0px";
    } else {
        sidebar.setAttribute("data-status", "visible");
        sidebar.style.width = "250px";
    }
});

window.onresize = (e) => {
    let winSize = e.target.innerWidth;
    let searchForm = $(".productSearch")[0];
    if (winSize < 768) {
        if (searchForm.parent(".sidebar") == undefined) {
            $(".sidebar")[0].appendChild(searchForm);
        }
    } else {
        if (searchForm.parent(".right") == undefined) {
            $("nav .right")[0].appendChild(searchForm);
        }
    }
}