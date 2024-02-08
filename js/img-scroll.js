function makeSlider(sliderID, sliderItemsClass) {
    let slider = $(`#${sliderID}`)[0];
    let imgs = $(`#${sliderID} .${sliderItemsClass}`);
    let canMove = false;
    let imgScroll = (imgs.length * imgs[0].offsetWidth);// + ((imgs.length - 1) * 16);

    window.onresize = () => {
        imgScroll = (imgs.length * imgs[0].offsetWidth) + ((imgs.length - 1) * 16);
    };

    slider.innerHTML += "";

    imgs.forEach(img => {
        slider.appendChild(img);
    })
    console.log(imgScroll, imgs[0].offsetLeft);

    let imgMove = setInterval(move, 50, undefined, slider, imgScroll);


    // For Mouse Movement
    // slider.addEventListener("mousedown", function () {
    //     canMove = true;
    //     clearInterval(imgMove);
    // });
    // slider.addEventListener("mouseup", function (e) {
    //     e.preventDefault();
    //     canMove = false;
    //     imgMove = setInterval(move, 50, undefined, slider, imgScroll)
    // });
    // slider.addEventListener("mouseleave", function () {
    //     canMove = false;
    // });
    // slider.addEventListener("mousemove", function (e) {
    //     if (canMove) {
    //         e.preventDefault();
    //         move(e, slider, imgScroll)
    //     }
    // });
}

// Move Products Forward & Backward
function makeManualSlider() {

    let leftArrows = $(".left-arrow");
    let rightArrows = $(".right-arrow");

    leftArrows.forEach(leftArrow => {
        leftArrow.onclick = function (event) {
            let Container = event.target.parent().child(".row")[0];
            let item = event.target.parent().child(".product")[0];
            move(-1, Container, item);
        };
    })

    rightArrows.forEach(rightArrow => {
        rightArrow.onclick = function (event) {
            let Container = event.target.parent().child(".row")[0];
            let item = event.target.parent().child(".product")[0];
            move(1, Container, item);
        };
    })
}
function move(e, container, item) {
    if (e == undefined) {
        container.scrollLeft -= 1;
        if ((container.scrollLeft * -1) >= item + 16) {
            container.scrollLeft = 0;
        } else if (container.scrollLeft == 0) container.scrollLeft = -item;
    } else if (Math.abs(e) == 1) {
        container.scrollLeft += (item.offsetWidth * e);
    } else {
        // Mouse Move
        // container.scrollLeft += (-1 * e.movementX);
        // console.log(container.scrollLeft * -1);
        // if ((container.scrollLeft * -1) >= item + 16) container.scrollLeft = container.scrollLeft % item;
        // if (container.scrollLeft == 0) container.scrollLeft = -item;
    }
}