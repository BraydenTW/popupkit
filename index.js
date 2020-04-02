document.head.innerHTML += "<style>@import url(https://fonts.googleapis.com/css2?family=Muli:wght@200;300;400;500;600;700;800;900&display=swap);.popupkit{position:absolute;background:#fff;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-family:Muli;border:solid 2px #aaa;border-radius:15px;padding:10px 70px 10px 15px;-webkit-box-shadow:0 15px 25px #bbb;box-shadow:0 15px 25px #bbb;opacity:0;-webkit-transition:opacity .35s;transition:opacity .35s}.popupkit-button{position:absolute;background:0 0;top:10px;right:10px;width:40px;height:40px;border:none;cursor:pointer;text-align:center;font-size:40px;font-family:sans-serif;color:#888;-webkit-transition:color .5s;transition:color .5s;-webkit-transform:rotate(45deg);transform:rotate(45deg);outline:0}.popupkit-button:hover{color:#444}.popupkit-title{font-size:1.8em;font-weight:700;padding:3px 0}.popupkit-message{font-size:1.1em;font-weight:300;color:#666;padding:10px 0}</style>";

const popupkit = {
    "simple": (title, message) => {
        let popup = document.createElement("DIV");
        popup.setAttribute("class", "popupkit popupkit-simple");

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

        document.body.appendChild(popup);

        popup.style.opacity = "1";

        popup_button.addEventListener("click", () => {
            popup.style.opacity = "0";
            setTimeout(() => {

                popup.remove();
            }, 350)
        });
    }
}