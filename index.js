document.head.innerHTML += "<style>@import url(https://fonts.googleapis.com/css2?family=Muli:wght@200;300;400;500;600;700;800;900&display=swap);.popupkit-container{position:fixed;top:0;left:0;right:0;bottom:0;z-index:100}.popupkit{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-family:Muli;padding:10px 70px 10px 15px;opacity:0;-webkit-transition:opacity .35s;transition:opacity .35s}.popupkit-simple-light{background:#fff;border:solid 2px #aaa;border-radius:15px}.popupkit-simple-dark{background:-webkit-gradient(linear,left top,left bottom,from(#33334e),to(#1c1c2e));background:linear-gradient(to bottom,#33334e,#1c1c2e);border:solid 2px #33334e;border-radius:15px;color:#fff}.popupkit-simple-dark .popupkit-message{color:#ccc}.popupkit-simple-dark .popupkit-button{color:#bbb}.popupkit-simple-dark .popupkit-button:hover{color:#fff}.popupkit-button{position:absolute;background:0 0;top:10px;right:10px;width:40px;height:40px;border:none;cursor:pointer;text-align:center;font-size:40px;font-family:sans-serif;color:#888;-webkit-transition:color .5s;transition:color .5s;-webkit-transform:rotate(45deg);transform:rotate(45deg);outline:0}.popupkit-button:hover{color:#444}.popupkit-title{font-size:1.8em;font-weight:700;padding:3px 0}.popupkit-message{font-size:1.1em;font-weight:300;color:#666;padding:10px 0;min-width:200px;max-width:300px}</style>";

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