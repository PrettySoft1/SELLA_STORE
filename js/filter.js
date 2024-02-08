// Custom Select

function toggleFilterMenu(container, e, type) {
    if (e != undefined) {
        if (e.target.classList.contains("option")) {
            if (e.target.parent(".options") == container) {
                container.parent().querySelector(".selectedItem").html(e.target.html());
                container.parent().querySelector(".selectedItem").setAttribute("data-value", e.target.getAttribute("data-value"));
            }
        }
    }
    if (container.classList.contains("hidden") && type != "ex") {
        let opHeight = container.child();
        opHeight = Array.from(opHeight).reduce((a, b) => a + b.offsetHeight, 0);
        container.classList.remove("hidden");
        container.style.height = opHeight + "px";
    } else {
        container.classList.add("hidden");
        container.style.height = "0px";
    }
}

(function () {
    let selectContainer = $(".select-container");
    if (selectContainer != undefined) {
        selectContainer.forEach(container => {
            let options = container.querySelectorAll("select option");
            let optionContainer = document.createElement("div");
            optionContainer.className = "options position-absolute w-100 d-flex flex-column hidden position-absolute top-100";
            options.forEach(option => {
                let op = document.createElement("span");
                op.className = "option";
                op.html(option.html());
                op.setAttribute("data-value", option.getAttribute("value"));
                optionContainer.appendChild(op);
            })
            container.appendChild(optionContainer);
            container.onclick = function (e) {
                toggleFilterMenu(optionContainer, e);
            };
        });
    
        let selectElement = $(".select-container select");
    
        selectElement.forEach(select => {
            select.remove()
        });
    }
})();


// Expand Filter
(function () {
    let toggle = $("#toggle-filter")[0];
    if (toggle != undefined) {
        toggle.addEventListener("click", function (e) {
            let filterContainer = e.target.parent(".fliter").child(".filter-group")[0].querySelector("div");
            let flag;
            if (filterContainer.classList.contains("hidden")) {
                filterContainer.parent(".filter-group").style.height = filterContainer.offsetHeight + "px";
                filterContainer.classList.remove("hidden");
                flag = setTimeout(() => {
                    filterContainer.parent(".filter-group").classList.remove("overflow-hidden");
                }, 100);
            } else {
                clearTimeout(flag);
                filterContainer.parent(".filter-group").style.height = "0px";
                filterContainer.classList.add("hidden");
                filterContainer.parent(".filter-group").classList.add("overflow-hidden");
            }
        });
    }
})();
