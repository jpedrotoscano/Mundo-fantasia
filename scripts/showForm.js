const showFormBtn = document.querySelector("#show-form")
const closeFormBtn = document.querySelector("#sub-form")
const modal = document.querySelector("#form-container")

showFormBtn.onclick = () => {
    modal.show()
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
}

function escClose(event) {
    if(event.key === 'Escape' || event.keyCode === 27) {
        document.body.style.overflow = "auto";
        document.body.style.height = "auto"; 
        modal.close()
    }
}

window.onclick = (event) => {
    if(event.target == modal) {
        document.body.style.overflow = "auto";
        document.body.style.height = "auto"; 
        modal.close()

    }
}

closeFormBtn.onclick = () => {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    modal.close()
}

document.addEventListener('keydown', escClose)