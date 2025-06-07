console.log('hello')
// Update the sadness level upon change
const sadnessText = document.querySelector('.sadness-level-text');
const sadnessRange = document.getElementById('sadness-level');


sadnessRange.addEventListener('input', (event) => {
    sadnessText.textContent = event.target.value
})
//



//Make the status container visible only when yes is checked for 'was the sock a matched pair?' 
const radioYes = document.getElementById('pair-yes');
const radioNo = document.getElementById('pair-no');
const statusContainer = document.getElementById('status-container');


const toggleHandler = () => {
    if (radioYes.checked) {
        statusContainer.classList.remove('hidden');
    } else {
        statusContainer.classList.add('hidden');
    }

}


radioYes.addEventListener('change', toggleHandler)
radioNo.addEventListener('change', toggleHandler)





// Make the invalid style avaialble only after trying to submit once


const form = document.getElementById('report-missing-sock');
const submitButton = document.querySelector('form button[type="submit"]');


form.addEventListener('submit', (event) => {
    console.log('submitting')

    if (!form.checkValidity()) {
        event.preventDefault();        
    }
});

submitButton.addEventListener('click', (event)=> {
    form.querySelectorAll('input, select, textarea, .declaration checkbox').forEach((input) => {
        input.classList.add('was-validated');
        console.log('check')
    });
})