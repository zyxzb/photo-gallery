const thumbnails = document.querySelectorAll(".thumbnail img");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const popupImg = document.querySelector(".popup__img");
const arrowLeft = document.querySelector(".popup__arrow-left")
const arrowRight = document.querySelector(".popup__arrow-right")

let currentImageIndex;

const nextSlide = () => {
    if (currentImageIndex === thumbnails.length - 1) {
        currentImageIndex = 0
    } else {
        currentImageIndex += 1
    }
    console.log(currentImageIndex)
    popupImg.src = thumbnails[currentImageIndex].src
}

const prevSlide = () => {
    if (currentImageIndex === 0) {
        currentImageIndex = thumbnails.length - 1
    } else {
        currentImageIndex -= 1
    }
    console.log(currentImageIndex)
    popupImg.src = thumbnails[currentImageIndex].src
}

const hidePopup = () => {
    popup.classList.add("fade-out")
    setTimeout(() => {
        popup.classList.add("hidden")
    }, 300)
}

thumbnails.forEach((thumbnail, index) => {
    const showPopup = (e) => {
        popup.classList.remove("hidden")
        popup.classList.remove("fade-out")
        popupImg.src = e.target.src;
        currentImageIndex = index;
    }
    thumbnail.addEventListener("click", showPopup)
    thumbnail.addEventListener("keydown", (e) => {
        if (e.code === "Enter" || e.KeyCode === 13) {
            showPopup(e)
        }
    })
})

arrowRight.addEventListener("click", nextSlide)
arrowLeft.addEventListener("click", prevSlide)
popupClose.addEventListener("click", hidePopup)

document.addEventListener("keydown", (e) => {
    if (!popup.classList.contains("hidden")) {
        console.log(e)
        if (e.code === "ArrowRight" || e.keyCode === 39) {
            nextSlide()
        } else if (e.code === "ArrowLeft" || e.keyCode === 37) {
            prevSlide()
        } else if (e.code === "Escape" || e.keyCode === 27) {
            hidePopup()
        }
    }
})

document.addEventListener("click", (e) => {
    if (e.target === popup) {
        hidePopup()
    }
})