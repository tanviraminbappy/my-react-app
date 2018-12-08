const changeText = () => {

    const paragraph = document.querySelector('p');
    paragraph.textContent = "I changed because of an inline event handler.";
}

const button = document.querySelector('button');
button.onclick = changeText

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


let arrExp = []

for( let i = 0; i < 10; i++){
    arrExp.push(i);
    console.log(arrExp);
}

for( let i = 10; i > 0; i--){
    arrExp.pop(i);
    console.log(arrExp);
}

let fish = [ "flounder", "salmon", "pike" ];

for(let i = 0; i < fish.length; i++){
    console.log(fish[i]);
}


function makeRequest(method, url){
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open(method, url);
        request.onload = resolve;
        request.onerror = reject;
        request.send();

    });

}

makeRequest('GET', 'https://url.json').then(event => {
    console.log(event.target.response);
}).catch(err => {
    throw new Error(err);
})