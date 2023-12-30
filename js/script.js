{
    const showOrHideText = (hideShowTextButton) => {

        const jsDiv = document.querySelector(".js-div");

        jsDiv.classList.toggle("js-section__paragraph--display");
        hideShowTextButton.innerText = jsDiv.classList.contains("js-section__paragraph--display")
            ? "READ MORE"
            : "HIDE TEXT";
    }

    const showOrHidePhoto = (hideShowPhotoButton) => {

        const ironMaidenPhoto = document.querySelector(".js-section__photo");

        ironMaidenPhoto.classList.toggle("js-section__paragraph--display");
        hideShowPhotoButton.innerText = ironMaidenPhoto.classList.contains("js-section__paragraph--display")
            ? "SHOW PHOTO"
            : "HIDE PHOTO";
    }

    const toggleBackground = (buttonChangeBackground) => {

        const body = document.querySelector(".body");
        const header = document.querySelector(".header");

        body.classList.toggle("light");
        header.classList.toggle("light");
        buttonChangeBackground.innerText = body.classList.contains("light")
            ? "DARK BACKGROUND"
            : "LIGHT BACKGROUND";
    }

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

    init();
}

