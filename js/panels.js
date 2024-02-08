function loginPanel() {
    return `
        <div class='position-fixed top-0 loginPanel h-100 w-100'>
            <div class='myCard position-absolute top top-50 bg-white w-50 p-4 d-flex flex-column align-items-center justify-content-between'>
                <p class="closePanel position-fixed top cursor-pointer fw-bold">CLOSE</p>
                <h3 class="myCard-title user-select-none fw-bold position-relative my-4">تسجيل الدخول</h3>
                <form action="#" class="d-flex flex-column align-items-center w-75 my-4">
                    <input type="email" name="uesrEmail" id="uesrEmail" class="form-control mt-2" placeholder="البريد الإلكتروني">
                    <input type="password" name="uesrPassword" id="uesrPassword" class="form-control my-4" placeholder="كلمة المرور">
                    <input type="button" value="تسجيل الدخول" class="btn btn-outline-primary fw-bold">
                </form>
                <p class='text-gray my-3'>ليس لديك حساب قم بـ <span class='signUpLink cursor-pointer text-create-account text-decoration-underline text-primary'>إنشاء حساب</span></p>
            </div>
        </div>
    `;
}

function singUpPanel() {
    return `
        <div class='position-fixed top-0 top loginPanel h-100 w-100'>
            <div class='myCard position-absolute top top-50 bg-white w-50 p-4 d-flex flex-column align-items-center justify-content-between'>
                <p class="closePanel position-fixed top cursor-pointer fw-bold">CLOSE</p>
                <h3 class="myCard-title user-select-none fw-bold position-relative my-4">إنشاء حساب</h3>
                <form action="#" class="d-flex flex-column align-items-center w-75 my-4">
                    <input type="text" name="userFullName" id="userFullName" class="form-control my-2" placeholder="الإسم الكامل">
                    <input type="email" name="uesrEmail" id="uesrEmail" class="form-control my-2" placeholder="البريد الإلكتروني">
                    <input type="text" name="userLocation" id="userLocation" class="form-control my-2" placeholder="الموقع">
                    <input type="password" name="uesrPassword" id="uesrPassword" class="form-control my-2" placeholder="كلمة المرور">
                    <input type="password" name="uesrRePassword" id="uesrRePassword" class="form-control my-2" placeholder="تأكيد كلمة المرور">
                    <input type="button" value="إنشاء حساب" class="btn btn-outline-primary fw-bold">
                </form>
                <p class='text-gray my-3'>لديك حساب مسبقاً قم بـ <span class='loginLink cursor-pointer text-create-account text-decoration-underline text-primary'>تسجيل الدخول</span></p>
            </div>
        </div>
    `;
}

function productDetailsPanel() {

}

function mainPagePhoto(productId, productName, productDetials, productPhotoLink) {
    return `
    <div class="col-12 col-md-6 col-lg-4 product">
        <a href="productDetails.html?id=${productId}">
            <div class="overflow-hidden rounded-4 position-relative">
                <img class="w-100 h-100 object-fit-cover" src="${productPhotoLink}" alt="">
                <div class="details d-flex flex-column justify-content-end position-absolute text-primary text-center fw-bold bg-gradient h-50 bottom-0 w-100">
                    <p class="">${productName}</p>
                    <p>${productDetials}</p>
                </div>
            </div>
        </a>
    </div>
    `;
}

function product(productID, productName, productPrice, productPhotoLink) {
    return `
    <a href="productDetails.html?id=${productID}">
        <div class="product overflow-hidden">
            <div class="productPhoto" data-id="${productID}">
                <img src="${productPhotoLink}" alt="Product Name" class="w-100">
            </div>
            <div class="productDetails text-center py-3">
                <p class="pName fw-bold text-primary text-decoration-underline">${productName}</p>
                <p class="pPrice text-gray fw-normal mt-4">السعر: ${productPrice} ريال</p>
            </div>
            <div class="actions mb-4 d-flex justify-content-evenly">
                <i class="fa-solid fa-basket-shopping cursor-pointer text-primary"></i>
                <i class="fa-solid fa-info-circle cursor-pointer text-gray"></i>
                <i class="fa-solid fa-heart cursor-pointer text-gray"></i>
            </div>
        </div>
    </a>
    `;
}

function comment(userName, userRates, userReview, userPhotoLink) {
    let com = `
    <div class="comment position-relative">
        <img src="${userPhotoLink}" alt="" class="userImg position-absolute">
        <p class="userName fw-bold mb-2 text-primary fs-5">${userName}</p>
        <div class="userRates d-flex gap-2">`;
        let i;
        for (i = 1; i <= userRates; i++) {
            com += '<i class="fa-solid fa-star text-primary"></i>';
        }
        while (i++ <= 5) {
            com += '<i class="fa-regular fa-star text-primary"></i>';
        }
        com += `</div>
        <p class="userReview text-gray my-2">${userReview}</p>
    </div>
    `;
    return com;
}