let firstNumberEl = document.getElementById("firstNumber")
let secondNumberEl = document.getElementById("secondNumber")
let input = document.getElementById("userInput")
let result = document.getElementById("gameResult")

function generateRandomNumbers() {
    let num1 = Math.ceil(Math.random() * 100)
    let num2 = Math.ceil(Math.random() * 100)

    firstNumberEl.textContent = num1
    secondNumberEl.textContent = num2

    result.textContent = ""
    result.style.backgroundColor = "#f5f7fa"
    input.value = ""
}

function checkResult() {
    let num1 = parseInt(firstNumberEl.textContent)
    let num2 = parseInt(secondNumberEl.textContent)
    let userAnswer = parseInt(input.value)

    if (userAnswer === num1 + num2) {
        result.textContent = "Congratulations! You got it right"
        result.style.color = "ffffff"
        result.style.backgroundColor = "#028a0f"
    } else {
        result.textContent = "Please Try Again"
        result.style.color = "ffffff"
        result.style.backgroundColor = "#1e217c"
    }
}

function restartGame() {
    generateRandomNumbers()
}

generateRandomNumbers()