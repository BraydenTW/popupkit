# PopupKit 1.3.0

PopupKit is an NPM package that you can call from one line of JavaScript code to display a nice-looking popup modal.

## What's new in 1.3.0?

<ul>
<li>New theme functions:
<ul>
<li>blackAndWhite()</li>
<li>blueAndWhite()</li>
<li>redAndWhite()</li>
<li>yellowAndWhite()</li>
<li>greenAndWhite()</li>
</ul>
</li>
<li>Scrollbar added to popup</li>
<li>New max-min height/width for popup to limit size</li>
<li>Fixed issue of callback happening earlier than popup has faded</li>
</ul>

## Install

### NPM

```
npm i popupkit
```

### Yarn

```
yarn add popupkit
```

After installation, paste this into your html file's `<head>` tag:

```html
<script src="./node_modules/popupkit/index.min.js"></script>
```

#### or

### CDN

Or if you'd rather use a CDN, paste this inside the `<head>` tag instead:

```html
<script src='https://unpkg.com/popupkit@1.3.0/index.min.js'></script>
```

## Usage

All you need is one line of JavaScript code. Yep! You heard me right. <b>One</b> line is all you need.

```js
popupkit.simpleLight("This is the title", "This is the message.", () => {
    console.log("Popup is closed")
});
```

1. Call the <b>popupkit</b> object
2. Call in the theme function
3. Type title in the first parameter
4. Type title in the second parameter
5. (OPTIONAL) Write a callback function for when he user closes the popup

## Themes
| Theme function| Description |
| ------------- |-------------|
| simpleLight() | A simple light-themed popup |
| simpleDark()  | A simple dark-themed popup  |
| blackAndWhite() | A black and white popup |
| blueAndWhite()  | A blue and white popup  |
| redAndWhite() | A red and white popup |
| yellowAndWhite()  | A yellow and white popup  |
| greenAndWhite() | A green and white popup |

More to come! 😉

## License

This project is licensed under the MIT License - see the <a href="https://github.com/BraydenTW/popupkit/blob/master/LICENSE">MIT License</a> file for details.