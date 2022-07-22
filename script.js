const buttons = document.querySelectorAll("[data-slider-button]")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.sliderButton === "next" ? 1 : -1
        const slides = button.closest("[data-slider]").querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        console.log(newIndex)
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
        console.log(slides.children)
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

const toggleButton = document.querySelector(".btn-mobile-nav")
const navbar = document.querySelector(".main-nav")

toggleButton.addEventListener("click", () => {
    navbar.classList.toggle("nav-open")
})
