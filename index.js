document.head.innerHTML += "<link rel='stylesheet' href='./css/all.min.css'>";

const popupkit = {
    "makeDefault": (title, message, theme, whenDone) => {
        if (theme === undefined) {
            console.error("Error in making the popup \nYou must fill in at least 3 parameters");
        } else {
            let container = document.createElement("DIV");
            container.setAttribute("class", "popupkit-container");
    
            let popup = document.createElement("DIV");
            popup.setAttribute("class", "popupkit " + theme);
    
            let popup_button = document.createElement("BUTTON");
            popup_button.appendChild(document.createTextNode("+"));
            popup_button.setAttribute("class", "popupkit-button");
    
            let popup_title = document.createElement("DIV");
            popup_title.appendChild(document.createTextNode(title));
            popup_title.setAttribute("class", "popupkit-title");
    
            let popup_message = document.createElement("DIV");
            popup_message.appendChild(document.createTextNode(message));
            popup_message.setAttribute("class", "popupkit-message");
    
            popup.appendChild(popup_title);
            popup.appendChild(popup_message);
            popup.appendChild(popup_button);
    
            container.appendChild(popup);
    
            document.body.appendChild(container);
    
            popup.style.opacity = "1";
    
            popup_button.addEventListener("click", () => {
                popup.style.opacity = "0";
                setTimeout(() => {
                    container.remove();
                }, 350)
                if (whenDone != undefined) {
                    whenDone();
                }
            });
        }
    },
    "simpleLight": (title, message, whenDone) => {
        popupkit.makeDefault(title, message, "popupkit-simple-light", whenDone);
    },
    "simpleDark": (title, message, whenDone) => {
        popupkit.makeDefault(title, message, "popupkit-simple-dark", whenDone);
    }
}