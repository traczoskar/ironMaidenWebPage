# Iron Maiden Fan WebPage
### **What is it about?**

Iron Maiden Fan WebPage is a fan made project to test and develop HTML, CSS and Java Script skills. I made this webpage as my version of official Iron Maiden's band site. It's divided for a few main sections which you can find in the navigation bar (just below the main logo of the page):
- **THE BAND**
- **TOUR**
- **DISCOGRAPHY**

In **"THE BAND"** section you can find a short band's history and genesis. There are also 2 interactive buttons, 1st for **HIDE/SHOW PHOTO** of the band and 2nd for **HIDE/SHOW TEXT** which reveals additional paragraph about the band and its members. The buttons are interactive because of the JS script. 

In the **"TOUR"** and **"DICSOGRAPHY"** section's you can find 2 differently styled and modified tables. I used several modifier classes to point the tickets availability which are visible in the right column of **"TOUR"** section. Also both table's rows got **hover** effects applied which make them more interesting to explore. 

At the footer there's also a background color changing button named **DARK/LIGHT BACKGROUND**. The name of the button depends of the actual state. It's also made by JS scripts. On the right side of this button there's a navigation link which takes a viewer to the top of the page after click.

Below there's a link where visitors can see the page:

### **[Iron Maiden Fan WebPage - link](https://traczoskar.github.io/ironMaidenWebPage/)**

## Features

- fanpage divided into 3 sections
- navigation bar at the top of the page
- 3 interactive buttons (2 that are hiding/showing elements and one which changes the background color of the page)
- 2 differently styled tables

## Used technologies and conventions

- BEM convention
- **camelCase** class and functions naming
- **CSS:** (normalize.css) applied
- **CSS:** (border-box: box-sizing) applied
- **JS:** Arrow functions

## Interactive elements

All the buttons are coded using **ternary operator** and class toggle atribute, example:

```javascript
const toggleBackground = (buttonChangeBackground) => {

        const body = document.querySelector(".body");
        const header = document.querySelector(".header");

        body.classList.toggle("light");
        header.classList.toggle("light");
        buttonChangeBackground.innerText = body.classList.contains("light")
            ? "DARK BACKGROUND"
            : "LIGHT BACKGROUND";
    }
```
There's also one main function ```init``` which is starting other functions script.:
```javascript
 const init = () => {

        const hideShowTextButton = document.querySelector(".js-hideShowTextButton");
        const hideShowPhotoButton = document.querySelector(".js-hideShowPhotoButton");
        const buttonChangeBackground = document.querySelector(".js-footer__button");

        hideShowTextButton.addEventListener("click", () => {
            showOrHideText(hideShowTextButton)
        });
        hideShowPhotoButton.addEventListener("click", () => {
            showOrHidePhoto(hideShowPhotoButton)
        });
        buttonChangeBackground.addEventListener("click", () => {
            toggleBackground(buttonChangeBackground)
        });
    }
```

### Thanks for visiting my repository.
This is only fan page so all informations about the **Iron Maiden** band are possibly not actual and not official.