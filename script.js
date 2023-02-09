const input = document.getElementById('inputField');
const checkBtn = document.getElementById('checkButton');
const h1 = document.createElement('h1');

checkBtn.addEventListener('click', () => {
    if (!input.value) {
        input.placeholder = 'Please type here';   
    }
    
    let vowels = 'aeiouAEIOU';
    let valueArray = input.value.split('');
    let counter = 0;
    for (let i = 0; i < valueArray.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (valueArray[i] === vowels[j]) {
                counter++;
            }
        }
        
    }
    
    h1.innerText = '';
    h1.innerText = `There ${counter > 1 ? 'are' : 'is'} ${counter} ${counter > 1 ? 'vowels' : 'vowel'}!`;
    if (counter === 0) h1.innerText = 'no vowels found';
    document.body.append(h1);
    clearInputField();
})

const clearInputField = () => { 
    input.value = '';
    
}