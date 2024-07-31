const addSelectBtn = document.querySelector("#add-select")
let selectCount = 1

addSelectBtn.addEventListener("click", function() {
  selectCount++

  const select = document.createElement("select")
  select.name = "segment"
  select.id = `select-segment-${selectCount}`
  select.className = "select-segment"

  const options = [
    { value: "nursery", text: "Berçário" },
    { value: "infant-education", text: "Educação Infantil" },
    { value: "fundamental", text: "Ensino Fundamental" }
  ];

  options.forEach(optionData => {
    const option = document.createElement("option")
    option.value = optionData.value
    option.textContent = optionData.text
    select.appendChild(option)
  })

  document.getElementById("select-container").appendChild(select)


})