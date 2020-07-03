const input = document.getElementById('input') // Input Field
const ans = document.getElementById('ans') // Answer Field
const buttonDigit = document.querySelectorAll('#digit') // Set of buttons (digit only)
const buttonOperator = document.querySelectorAll('.operator') // Set of buttons (operator only)

const buttonClear = document.getElementById('c')

let operand1, operator, operand2, tempStr
ans.value = 0

// Clear the input and answer
buttonClear.addEventListener('click', () => { input.value = ''; ans.value = 0 }) 

// Add event to the digit buttons
buttonDigit.forEach(btn => {
    btn.addEventListener('click', setDigit)
})

// Set the digit in input field
function setDigit(e){
    input.value += e.target.innerText
}

// Add event to the operator buttons
buttonOperator.forEach(btn => {
    if(btn.textContent !== '=')
        btn.addEventListener('click', setOperator)
    else
        btn.addEventListener('click', setOperand)
})

// Set the first operand and operator
function setOperator(e){
    if(input.value !== ''){
        operand1 = parseFloat(input.value)
        operator = e.target.innerText
        input.value += `  ${e.target.innerText}  `
        tempStr = input.value.trim()
    }
    
}

// Set the second operand
function setOperand(){
    operand2 = parseFloat(input.value.substring(tempStr.length).trim())
    calculate()
}

// Calculate the problem
function calculate(){
    if(operator === '+')
        ans.value = operand1 + operand2
    else if(operator === '-')
        ans.value = operand1 - operand2
    else if(operator === 'x')
        ans.value = operand1 * operand2
    else if(operator === '/')
        ans.value = operand1 / operand2
}   

//Update answer automatically
function updateAnswer(){
    if(typeof tempStr !== 'undefined'){
        operand2 = parseFloat(input.value.substring(tempStr.length).trim())
        if(typeof operand2 !== 'undefined' && isNaN(operand2) === false)
            calculate()        
    }
}

setInterval(updateAnswer, 0)

