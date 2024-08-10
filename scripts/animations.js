const animations = document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view")
                return
            }
        })
    })

    const allAnimatedElements = document.querySelectorAll(".animate")

    allAnimatedElements.forEach((element) => observer.observe(element))
    
    gsap.from("#logo", { x: -800, duration: .8 })
    gsap.from("#nav-home", { x: 1900, duration: .8 })
    gsap.from("#nav-segments", { x: 1900, duration: .8 })
    gsap.from("#nav-contacts", { x: 1900, duration: .8 })

    const mainSliderAnimation = gsap.timeline()
        .fromTo("#slide-1", {
            scale: 0
        }, {
            scale: 1,
            duration: 1.4,
            ease: "power3.out"
        })
        .fromTo("#show-form", {
            scale: 0
        }, {
            scale: 1
        })
        .fromTo("#slider-point-1", {
            scale: 0
        }, {
            scale: 1,
            duration: .3
        })
        .fromTo("#slider-point-2", {
            scale: 0
        }, {
            scale: 1,
            duration: .3
        })
        .fromTo("#slider-point-3", {
            scale: 0
        }, {
            scale: 1,
            duration: .3
        })
})