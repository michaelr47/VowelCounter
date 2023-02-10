const checkBtn = document.getElementById('checkButton');
const input = document.getElementById('inputField');
const modal = document.getElementById('modal');

const closeModal = document.getElementById('closeModal');

checkBtn.addEventListener('click', () => {
    const modalText = document.getElementById('vowelText');
    const h2 = document.createElement('h2');

    if (!input.value) {
        input.placeholder = 'Please type here';   
    }
    modal.style.display = 'block';
    
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
    
    h2.innerText = '';
    h2.innerText = `There ${counter > 1 ? 'are' : 'is'} ${counter} ${counter > 1 ? 'vowels' : 'vowel'}!`;
    if (counter === 0) h2.innerText = 'no vowels found';
    modalText.append(h2);
    clearInputField()
    closeModalContent(modal);
})

const closeModalContent = (closeModal) => {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    }) 
    
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

const clearInputField = () => input.value = '';
    
