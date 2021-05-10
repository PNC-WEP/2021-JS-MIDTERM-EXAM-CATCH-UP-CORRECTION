// Get the input element
let form = document.querySelector("form");
let color = document.querySelector("#color");
let width = document.querySelector("#width");
let isChangeToCircle = document.querySelector("#isChangeToCircle");
let shap = document.querySelector(".shap");
form.addEventListener('change', function (e) {
    e.preventDefault();
    // 1. put color style
    shap.style.background = color.value;
    // 2. put width to shap
    shap.style.width = width.value + "px";
    // 3. put height to shap
    shap.style.height = width.value + "px";
    // 4. check to change the layout if it checked put the border radius = 50%
    if (isChangeToCircle.checked) {
        shap.style.borderRadius = "50%";
    } else {
        shap.style.borderRadius = "0%";
    }
})