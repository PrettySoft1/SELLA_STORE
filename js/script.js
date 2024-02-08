Object.prototype.parent = function (name) {
    if (name == undefined) {
        return this.parentElement;
    }
    let firstChar = name[0];
    let targetName = name.slice(1);
    let ele = this;
    if (firstChar == ".") {
        while (ele.parentElement != null) {
            if (ele.parentElement.classList.contains(targetName)) {
                return ele.parentElement;
            }
            ele = ele.parentElement;
        }
        return null;
    } else if (firstChar == "#") {
        while (ele.parentElement != null) {
            if (ele.parentElement.id == targetName) {
                return ele.parentElement;
            }
            ele = ele.parentElement;
        }
        return null;
    } else {
        // localName
        while (ele.parentElement != null) {
            if (ele.parentElement.localName == name) {
                return ele.parentElement;
            }
            ele = ele.parentElement;
        }
        return null;
    }
};
Object.prototype.child = function (name) {
    if (name == undefined) {
        return [...this.children];
    } else {
        return [...this.querySelectorAll(name)];
    }
}
Object.prototype.html = function (val) {
    if (val == undefined) {
        return this.innerHTML;
    } else {
        this.innerHTML = val;
    }
};
Object.prototype.text = function (val) {
    if (val == undefined) {
        return this.innerText;
    } else {
        this.innerText = val;
    }
};
function $(name) { return [...document.querySelectorAll(name)]; }

// Toggle Menu For Small Screens Expand & Unexpand
let toggle_menu = $("#toggle-menu")[0];
if (toggle_menu != undefined) {
    toggle_menu.onclick = function () {
        let menu = $("#menu")[0];
        if (menu.getAttribute('data-toggle') == 0) {
            menu.setAttribute('data-toggle', 1)
            menu.classList.add('links-toggle');
            setTimeout(() => {
                menu.classList.add('links-toggle-show');
            }, 10)
        } else {
            menu.classList.remove('links-toggle-show');
            menu.setAttribute('data-toggle', 0)
        }
    };
}
// Login & Sign Up Panels
let account = $(".account")[0];
account.onclick = function () {
    if ($(".loginPanel")[0] == null) {
        switchFunction("login", ".signUpLink");
    }
}

function switchFunction(n, e) {
    let panel = document.createElement("div");
    panel.innerHTML = showPanel(n);
    document.body.appendChild(panel);
    closeButton();
    $(e)[0].onclick = function (ev) {
        closePanel(ev.target);
        if (n == "login") {
            switchFunction("signUp", ".loginLink");
        } else {
            switchFunction("login", ".signUpLink");
        }
    }
}
function showPanel(name) {
    if (name == "login") {
        return loginPanel();
    } else if (name == "signUp") {
        return singUpPanel();
    }
}
function closeButton() {
    let closeLoginAndSignUpPanels = $(".closePanel")[0];
    if (closeLoginAndSignUpPanels != null) {
        closeLoginAndSignUpPanels.addEventListener("click", function (e) {
            closePanel(e.target);
        })
    }
}
function closePanel(e) {
    let panel = e.parent(".loginPanel") ?? e.parent(".signUpPanel");
    if (panel != undefined) {

        panel.parent("div").remove();
    }
}

