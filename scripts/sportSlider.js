document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.sport-slide')
    const navAnchors = document.querySelectorAll('.sport-anchor')
    const slider = document.querySelector('.sport-slider')
    
    let currentIndex = 0
    let autoSlideInterval

    function startAutoSlide() {
        clearInterval(autoSlideInterval)
        autoSlideInterval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % slides.length
            showSlide(nextIndex)
        }, 5000)
    }

    function showSlide(index) {
        slides[currentIndex].classList.remove('active')
        navAnchors[currentIndex].classList.remove('active')

        currentIndex = index

        slides[currentIndex].classList.add('active')
        navAnchors[currentIndex].classList.add('active')

        slider.style.transform = `translateX(-${currentIndex * 100}%)`

        startAutoSlide()
    }

    navAnchors.forEach((anchor, index) => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault()
            showSlide(index)
        })
    })

    startAutoSlide()
})