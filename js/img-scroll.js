function $(name) { return [...document.querySelectorAll(name)]; }
document.addEventListener("DOMContentLoaded", function () {

    let slider = $("#slider")[0];
    let imgs = $("#slider .product");
    let canMove = false;
    let imgScroll = (imgs.length * imgs[0].offsetWidth) + ((imgs.length - 1) * 16);

    window.onresize = () => {
        imgScroll = (imgs.length * imgs[0].offsetWidth) + ((imgs.length - 1) * 16);
    };

    slider.innerHTML += "";

    imgs.forEach(img => {
        slider.appendChild(img);
    })

    

    let imgMove = setInterval(move, 50, undefined, slider);


    // For Mouse Movement
    slider.addEventListener("mousedown", function () {
        canMove = true;
        clearInterval(imgMove);
    })

    slider.addEventListener("mouseup", function () {
        canMove = false;
        imgMove = setInterval(move, 50, undefined, slider)
    })
    slider.addEventListener("mouseleave", function () {
        canMove = false;
    })

    slider.addEventListener("mousemove", function (e) {
        if (canMove) {
            move(e, slider)
        }
    })


    // Move Products Forward & Backward
    let leftArrows = $(".left-arrow");
    let rightArrows = $(".right-arrow");

    leftArrows.forEach(leftArrow=> {
        leftArrow.onclick = function(event) {
            move(-1, event.target.parentElement.children[2]);
        };
    })

    rightArrows.forEach(rightArrow=> {
        rightArrow.onclick = function() {
            move(1, event.target.parentElement.children[2]);
        };
    })



    function move(e, container) {
        if (e == undefined) {
            container.scrollLeft -= 1;
            if ((container.scrollLeft * -1) >= imgScroll + 16) {
                container.scrollLeft = 0;
            } else if (container.scrollLeft == 0) container.scrollLeft = -imgScroll;
        } else if (Math.abs(e) == 1) {
            container.scrollLeft += (imgs[0].offsetWidth * e);
        } else {
            container.scrollLeft += (-1 * e.movementX);
            if ((container.scrollLeft * -1) >= imgScroll + 16) container.scrollLeft = container.scrollLeft % imgScroll; 
            if (container.scrollLeft == 0) container.scrollLeft = -imgScroll;
        }
    }
});