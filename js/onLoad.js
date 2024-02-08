document.addEventListener("DOMContentLoaded", () => {

    // add some product to slider
    let slider = $(".photoSlider");
    if (slider.length != 0) {
        slider.forEach(slide => {
            for (let i = 1; i <= 5; i++) {
                slide.innerHTML += mainPagePhoto(i, "اسم المنتج", "تفاصيل عن المنتج", `imgs/${i}.jpg`);
            }
        })
        makeSlider("slider", "product");
        makeManualSlider();
    }

    // Adding some temp products
    let productContainer = $(".products");
    if (productContainer[0] != undefined) {
        for (let i = 0; i < 50; i++) {
            productContainer.forEach(PC=>
                PC.innerHTML += product(i, "اسم المنتج", 300, "imgs/1.jpg")
            );
        }
    }

    // Adding Some Comments
    let commentsContainer = $(".comments")[0];
    if (commentsContainer != undefined) {
        for (let i = 0; i < 3; i++) {
            commentsContainer.innerHTML += comment("محمد علي أبولحوم", i+1, "وُلِدّ مدمر يعيق شخص أسبرناتور لوم يمين له عمل الكبرى. لأن و كبير. ألم آخر شخص ل الحقيقة أ وذلك نتيجة انهم يسقط.تحدث مثل لذلك اكره ما الحمدون لذلك يمين. سرور ما مزايا ملموس. حب في تكون في أبداً.لو نحن العمل. العمل وسوف هو واحد جَذّاب كبير قال لكن. امتياز كان آلام -.هو الحمدون ألم. نتهم أقل فقط التي أ نكون عقل أقل متطابقة. تم يستثني أ آتي بحكمة صده سأشرح حياة سمحت حزن.حر لذلك نحن نفسه بحكمة. لوم كان إلا خيار تم الكل وذلك جوية كما الكبرى. يحب آخر رفض خيار ديون الحقيقة.من إضافي قيمة العمل ملكنا بحكمة تكون مهجور العمل يكره. -, هي و منهم المتهمون قال عمل نحن مهجور يكون. جوية مرات صده امتياز أحد أسبرناتور يصد.- تكون لكن المتهمون", "imgs/avatar.png")
        }
    }

    // Search Form In Parts Page
    let searchForm = $(".productSearch")[0];
    if (window.innerWidth < 768 && searchForm != null) {
        if (searchForm.parent(".sidebar") == undefined) {
            $(".sidebar")[0].appendChild(searchForm);
        }
    }


    // For Static Host 
    let floatIcon = $("a[href='https://static.app/']")[0];
    if (floatIcon != undefined) {
        floatIcon.remove();
    }




});