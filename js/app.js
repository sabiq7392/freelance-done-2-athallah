document.querySelector("#show").addEventListener("click", show)
    function show() {
        if (document.querySelector("#show").checked == true) {
            document.querySelector("#password").setAttribute("type", "text");
            document.querySelector("#mata").style.opacity = "0";
            document.querySelector("#buta").style.opacity = "1";
        }
        else {
            document.querySelector("#password").setAttribute("type", "password");
            document.querySelector("#mata").style.opacity = "1";
            document.querySelector("#buta").style.opacity = "0";
        }
    }
// ===== Show Hide Password

