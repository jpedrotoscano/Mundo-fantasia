const showFormBtn = document.querySelector("#show-form")

showFormBtn.addEventListener("click", function() {
    const formConteiner = document.querySelector("#form-container")

    formConteiner.classList.remove("hidden")
    formConteiner.scrollIntoView({ behavior: "smooth" })

})