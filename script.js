const input = document.getElementById('inputField');
const checkBtn = document.getElementById('checkButton');

checkBtn.addEventListener('click', () => {
    if (!input.value) return
    
    let vowels = 'aeiouAEIOU';
    let valueArray = input.value.split('');

    for (let i = 0; i < valueArray.length; i++) {
        if (valueArray[i] === vowels[i]) {
            console.log(vowels[i]);
        }
    }
})