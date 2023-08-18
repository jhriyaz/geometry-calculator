const targetButton = document.querySelector('body')

targetButton.addEventListener('click', function (events) {
    console.log(events.target.innerText)
    if (events.target.innerText !== 'CALCULATE') {
        return
    }
    const firstInput = events.target.parentElement.parentElement.children[3].children[0].children[0]
    const secondInput = events.target.parentElement.parentElement.children[3].children[1].children[0]
    const firstInputValue = parseFloat(firstInput.value)
    const secondInputvalue = parseFloat(secondInput.value)
    let shapeId = events.target.parentElement.parentElement.children[0].id
    let total;
    if (shapeId === 'shapeTittleEllipse') {
        total = Math.PI * firstInputValue * secondInputvalue

    }
    if (shapeId === 'shapeTittleRhombus' || shapeId === 'shapeTittlePentagon') {
        total = 0.5 * firstInputValue * secondInputvalue
    } else {
        total = firstInputValue * secondInputvalue
    }
    if (isNaN(total) || secondInputvalue < 0 || firstInputValue < 0) {
        return alert('please provide positive number on both input')
    } let classRemoval = events.target.parentElement.parentElement.children[2]
    classRemoval.classList.remove('hidden')
    events.target.parentElement.parentElement.children[2].children[1].children[0].innerText = total
    firstInput.value = ''
    secondInput.value = ''

})