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