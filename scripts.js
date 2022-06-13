function insertValues(num) {
    const input = document.getElementById('display').value
    document.getElementById('display').value = input + num
}

function calculate() {
    const input = document.getElementById('display').value
    document.getElementById('display').value = eval(input) // eval faz operações. Ele calcula.
}

function clearInput() {
    document.getElementById('display').value = ''
}

function invert() {
    calculate()
    const input = document.getElementById('display').value
    document.getElementById('display').value = input * - 1
}

function percent() {
    calculate()
    const input = document.getElementById('display').value
    const valuePercent = input / 100
    document.getElementById('display').value = valuePercent
    
}