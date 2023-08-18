function setElementById(inputId,textId){
    const inputText = document.getElementById(inputId);
    const outputText = document.getElementById(textId);
    outputText.innerText = inputText.value;
    inputText.value = '';
    }
    
document.getElementById('comment-btn').addEventListener('click',(e) => { 
    setElementById('name-input','name-output');
    setElementById('email-input','email-output');
    setElementById('mobile-input','mobile-output');
    e.preventDefault();
 })