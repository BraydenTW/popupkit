// document.head.innerHTML += "<style>@import url(https://fonts.googleapis.com/css2?family=Muli:wght@300;700&display=swap);.popupkit-container{position:fixed;top:0;left:0;right:0;bottom:0;z-index:100}.popupkit{position:fixed;top:50%;left:50%;font-family:Muli;padding:10px 70px 10px 15px;border-radius:15px;overflow:hidden;opacity:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:opacity .35s;transition:opacity .35s}.popupkit-simple-light{background:#fff;border:solid 2px #aaa}.popupkit-simple-dark{background:-webkit-gradient(linear,left top,left bottom,from(#33334e),to(#1c1c2e));background:linear-gradient(to bottom,#33334e,#1c1c2e);color:#fff;border:solid 2px #33334e}.popupkit-simple-dark .popupkit-message{color:#ccc}.popupkit-blackandwhite{border:solid 2px #000}.popupkit-blackandwhite .popupkit-title{background:#000}.popupkit-blueandwhite{border:solid 2px #3498db}.popupkit-blueandwhite .popupkit-title{background:#3498db}.popupkit-greenandwhite{border:solid 2px #2ecc71}.popupkit-greenandwhite .popupkit-title{background:#2ecc71}.popupkit-redandwhite{border:solid 2px #e74c3c}.popupkit-redandwhite .popupkit-title{background:#e74c3c}.popupkit-yellowandwhite{border:solid 2px #f1c40f}.popupkit-yellowandwhite .popupkit-title{background:#f1c40f}.popupkit-blackandwhite,.popupkit-blueandwhite,.popupkit-greenandwhite,.popupkit-redandwhite,.popupkit-yellowandwhite{background:#fff}.popupkit-blackandwhite .popupkit-title,.popupkit-blueandwhite .popupkit-title,.popupkit-greenandwhite .popupkit-title,.popupkit-redandwhite .popupkit-title,.popupkit-yellowandwhite .popupkit-title{color:#fff}.popupkit-blackandwhite .popupkit-message,.popupkit-blueandwhite .popupkit-message,.popupkit-greenandwhite .popupkit-message,.popupkit-redandwhite .popupkit-message,.popupkit-yellowandwhite .popupkit-message{color:#666}.popupkit-blackandwhite .popupkit-button:hover,.popupkit-blueandwhite .popupkit-button:hover,.popupkit-greenandwhite .popupkit-button:hover,.popupkit-redandwhite .popupkit-button:hover,.popupkit-yellowandwhite .popupkit-button:hover{color:#fff}.popupkit-blueandwhite .popupkit-button,.popupkit-greenandwhite .popupkit-button,.popupkit-redandwhite .popupkit-button,.popupkit-yellowandwhite .popupkit-button{color:rgba(255,255,255,.45)}.popupkit-button{position:absolute;background:0 0;top:5px;right:10px;font-size:40px;font-family:sans-serif;color:#888;text-align:center;width:40px;height:40px;border:none;outline:0;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:color .5s;transition:color .5s;cursor:pointer}.popupkit-button:hover{color:#444}.popupkit-title{position:absolute;top:0;left:0;right:0;font-size:1.8em;font-weight:700;padding:10px 20px}.popupkit-message{position:relative;top:46px;left:0;right:0;font-size:1.1em;font-weight:300;color:#666;max-height:150px;min-height:30px;min-width:175px;margin:10px -55px 45px 0;padding:0 10px 0 0;overflow-y:scroll}.popupkit-message::-webkit-scrollbar{width:8px;background:0 0}.popupkit-message::-webkit-scrollbar-thumb{background:#ccc;border-radius:4px}.popupkit-message::-webkit-scrollbar-thumb:hover{background:#aaa}</style>";

function popupkit_scroll(title) {
    setTimeout(() => {
        let scrollInterval = setInterval(() => {
            if (title.scrollLeft >= title.scrollWidth - title.clientWidth - 10) {
                clearInterval(scrollInterval);
                setTimeout(() => {
                    title.scrollLeft = title.scrollWidth - title.clientWidth - 10;
                    scrollInterval = setInterval(() => {
                        if (title.scrollLeft === 0) {
                            clearInterval(scrollInterval);
                            setTimeout(() => {
                                title.scrollLeft = 0;
                                popupkit_scroll(title);
                            }, 1000);
                        }
                        title.scrollLeft--;
                    }, 16);
                }, 1000);
            }
            title.scrollLeft++;
        }, 8);
    }, 1000);
    
}

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
            if (title === "") {
                title = "-";
            }
            popup_title.appendChild(document.createTextNode(title));
            popup_title.setAttribute("class", "popupkit-title");
            popup_title.title = title;
    
            let popup_message = document.createElement("DIV");
            popup_message.appendChild(document.createTextNode(message));
            popup_message.setAttribute("class", "popupkit-message");
    
            popup.appendChild(popup_title);
            popup.appendChild(popup_message);
            popup.appendChild(popup_button);
    
            container.appendChild(popup);
    
            document.body.appendChild(container);
    
            setTimeout(() => {
                popup.style.opacity = "1";
            }, 1)
    
            setTimeout(() => {
                popupkit_scroll(popup_title);
            }, 351);

            popup_button.addEventListener("click", () => {
                popup.style.opacity = "0";
                setTimeout(() => {
                    container.remove();
                    if (whenDone != undefined) {
                        whenDone();
                    }
                }, 350)
            });
            
        }
    },
    "simpleLight": (title, message, whenDone) => {
        popupkit.makeDefault(title, message, "popupkit-simple-light", whenDone);
    },
    "simpleDark": (title, message, whenDone) => {
        popupkit.makeDefault(title, message, "popupkit-simple-dark", whenDone);
    },
    "blackAndWhite": (title, message, whenDone) => {
        popupkit.makeDefault(title, message, "popupkit-blackandwhite", whenDone);
    },
    "blueAndWhite": (title, message, whenDone) => {
        popupkit.makeDefault(title, message, "popupkit-blueandwhite", whenDone);
    },
    "redAndWhite": (title, message, whenDone) => {
        popupkit.makeDefault(title, message, "popupkit-redandwhite", whenDone);
    },
    "yellowAndWhite": (title, message, whenDone) => {
        popupkit.makeDefault(title, message, "popupkit-yellowandwhite", whenDone);
    },
    "greenAndWhite": (title, message, whenDone) => {
        popupkit.makeDefault(title, message, "popupkit-greenandwhite", whenDone);
    }
}