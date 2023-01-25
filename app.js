const cardNameInput = document.getElementById('credit-card-name')
const cardNumberInput = document.getElementById('credit-card-number')
const cardExpiryMonth = document.getElementById('credit-card-expiry-month')
const cardExpiryYear = document.getElementById('credit-card-expiry-year')
const cardCvc = document.getElementById('credit-card-cvc')

const confirmBtn = document.getElementById('confirm-btn');

function validateNumbersOnly(input) {
    return /^[0-9]+$/.test(input);
}

function validateNonEmpty(input){
    return input.length !== 0;
}

function validateName(value){
    let errorMsg = '';
    if (!validateNonEmpty(value)){
        errorMsg = "Can't be blank";
    }
    return errorMsg;
}

function validateNumber(value){
    console.log(value);
    let errorMsg = '';
    if (!validateNumbersOnly(value)){
        errorMsg = 'Wrong format, numbers only'
    }
    if (!validateNonEmpty(value)){
        errorMsg = "Can't be blank";
    }
    return errorMsg;
}

function convertToCardFormat(number) {
    let result = '';
    for (let i = 0; i < number.length; i++){
        if (i % 4 === 0){
            result += ' ';
        }
        result += number[i];
    }
    return result;
}

cardNameInput.addEventListener('input', e => {
    const msg = validateName(e.target.value);
    const nameError = document.querySelector('.error.name');
    nameError.textContent = msg;
    cardNameInput.style.borderColor = msg ? 'hsl(0, 100%, 66%)' : 'hsl(270, 3%, 87%)';
    document.querySelector('.card-name').innerHTML = e.target.value;
})
cardNumberInput.addEventListener('input', e => {
    const msg = validateNumber(e.target.value.trim());
    const numberError = document.querySelector('.error.number');
    numberError.textContent = msg;
    cardNumberInput.style.borderColor = msg ? 'hsl(0, 100%, 66%)' : 'hsl(270, 3%, 87%)';
    document.querySelector('.card-number').innerHTML = convertToCardFormat(e.target.value);
})
cardExpiryMonth.addEventListener('input', e => {
    const msg = validateName(e.target.value);
    const numberError = document.querySelector('.error.expiry');
    numberError.textContent = msg;
    cardExpiryMonth.style.borderColor = msg ? 'hsl(0, 100%, 66%)' : 'hsl(270, 3%, 87%)';
    document.querySelector('.card-expiry-month').innerHTML = e.target.value;
})
cardExpiryYear.addEventListener('input', e => {
    const msg = validateName(e.target.value);
    const numberError = document.querySelector('.error.expiry');
    numberError.textContent = msg;
    cardExpiryYear.style.borderColor = msg ? 'hsl(0, 100%, 66%)' : 'hsl(270, 3%, 87%)';
    document.querySelector('.card-expiry-year').innerHTML = e.target.value;
})
cardCvc.addEventListener('input', e => {
    const msg = validateName(e.target.value);
    const numberError = document.querySelector('.error.cvc');
    numberError.textContent = msg;
    cardCvc.style.borderColor = msg ? 'hsl(0, 100%, 66%)' : 'hsl(270, 3%, 87%)';
    document.querySelector('.card-cvc').innerHTML = e.target.value;
})

confirmBtn.addEventListener('click', () => {
    if (!validateName(cardNameInput.value) && !validateNumber(cardNumberInput.value) && !validateName(cardExpiryMonth.value) && !validateName(cardExpiryYear.value) && !validateName(cardCvc.value)){
        console.log('all good');
        document.querySelector('form').style.display = 'none';
        document.querySelector('.confirmation').style.display = 'flex';
    }
});
