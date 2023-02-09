const input = document.getElementById('inputField');
const checkBtn = document.getElementById('checkButton');

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
    const h1 = document.createElement('h1');
    
    if (counter === 0) return 'no vowels found';
    h1.innerText = `There are ${counter} ${counter > 1 ? 'vowels' : 'vowel'}!`;
    document.body.append(h1);
    clearInputField();
})

const clearInputField = () => { 
    input.value = '';
    
}