let body = document.querySelector(".body");
let header = document.querySelector(".header");
let light = document.querySelector(".light");
let buttonChangeBackground = document.querySelector(".js-footer__button");
let hideShowTextButton = document.querySelector(".js-hideShowTextButton");
let jsDiv = document.querySelector(".js-div");
let hideShowPhotoButton = document.querySelector(".js-hideShowPhotoButton");
let ironMaidenPhoto = document.querySelector(".js-section__photo");

hideShowTextButton.addEventListener("click", () => {
    jsDiv.classList.toggle("js-section__paragraph--display");
    hideShowTextButton.innerText = jsDiv.classList.contains("js-section__paragraph--display")
        ? "READ MORE"
        : "HIDE TEXT";
});

hideShowPhotoButton.addEventListener("click", () => {
    ironMaidenPhoto.classList.toggle("js-section__paragraph--display");
    hideShowPhotoButton.innerText = ironMaidenPhoto.classList.contains("js-section__paragraph--display")
        ? "SHOW PHOTO"
        : "HIDE PHOTO";
});

buttonChangeBackground.addEventListener("click", () => {
    body.classList.toggle("light");
    header.classList.toggle("light");
    buttonChangeBackground.innerText = body.classList.contains("light")
        ? "DARK BACKGROUND"
        : "LIGHT BACKGROUND";
});