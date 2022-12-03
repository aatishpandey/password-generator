let documentStyleSheet = document.querySelector("#pageStyle");

let toggleBtn = document.querySelector(".theme-toggle");

let theme = "dark";

toggleBtn.addEventListener("click", () => {

    switch (theme) {
        case "dark": documentStyleSheet.setAttribute        ("href", "/stylesheets/style-dark-theme.css")
            break;

        case "light":documentStyleSheet.setAttribute("href", "/stylesheets/style.css");
                    break;

        default: documentStyleSheet.setAttribute        ("href", "/stylesheets/style-dark-theme.css")
        break;
    }
    theme === "dark" ? theme="light" : theme="dark";

})