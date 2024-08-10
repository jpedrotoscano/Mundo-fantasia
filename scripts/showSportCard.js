let swimming = document.getElementById("swimming")
let ballet = document.getElementById("ballet")
let soccer = document.getElementById("soccer")

swimming.addEventListener("mouseover", () => {
    if(!swimming.querySelector(".visible")) {
        const description = document.getElementById("swim-description")
        description.textContent = "Bem-vindos à nossa escolinha de natação, onde a segurança, o desenvolvimento integral e a metodologia lúdica se unem para ensinar crianças a nadar. Com infraestrutura de qualidade e instrutores qualificados, oferecemos uma experiência divertida e educativa. Venha nos conhecer!"
        description.classList.add("sport-over")
        swimming.classList.remove("btn-more")
        swimming.classList.add("sport-text")
        swimming.appendChild(description)

        requestAnimationFrame(() => {
            description.classList.add("visible")
        })
    }
})

ballet.addEventListener("mouseover", () => {
    if(!ballet.querySelector(".visible")) {
        const balletDescription = document.getElementById("ballet-description")
        balletDescription.textContent = "Nossa escolinha de ballet oferece aulas encantadoras para crianças, com professores experientes e um ambiente acolhedor. Promovemos desenvolvimento físico, disciplina e expressão artística. Venha descobrir a magia do ballet com a gente!"
        balletDescription.classList.add("sport-over")
        ballet.classList.remove("btn-more")
        ballet.classList.add("sport-text")
        ballet.appendChild(balletDescription)

        requestAnimationFrame(() => {
            balletDescription.classList.add("visible")
        })
    }
})

soccer.addEventListener("mouseover", () => {
    if(!soccer.querySelector(".visible")) {
        const soccerDescription = document.getElementById("soccer-description")
        soccerDescription.textContent = "Nossa escolinha de futebol proporciona aulas divertidas e educativas para crianças, com técnicos qualificados. Focamos no desenvolvimento físico, trabalho em equipe e habilidades esportivas. Venha jogar e aprender conosco!"
        soccerDescription.classList.add("sport-over")
        soccer.classList.remove("btn-more")
        soccer.classList.add("sport-text")
        soccer.appendChild(soccerDescription)

        requestAnimationFrame(() => {
            soccerDescription.classList.add("visible")
        })
    }
})