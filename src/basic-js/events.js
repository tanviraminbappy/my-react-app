// const changeText = () => {

//     const paragraph = document.querySelector('p');
//     paragraph.textContent = "I changed because of an inline event handler.";
// }

// const button = document.querySelector('button');
// button.onclick = changeText

const p = document.querySelector('p');
const button = document.querySelector('button');

const changeText = () => {
    p.textContent = "Will I change?";
}

const alertText = () => {
    alert('Will I alert?');
}

// Events can be overwritten
button.addEventListener('click', changeText);
button.addEventListener('click', alertText);

document.addEventListener('keydown', event => {
    console.log('key: ' + event.keyCode);
    console.log('key: ' + event.key);
    console.log('code: ' + event.code);
});