const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');

nameInput.onkeyup = (event) => {
    if (nameInput.value === '') {
        messageP.innerText = '';
    }else {
        if (event.keyCode == 13)
            helloWorld();
    }
}

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode == 27) {
        nameInput.value = "";
    }
})

const helloWorld = () => {
    messageP.innerText = `Hello World, ${nameInput.value}!`;
}

function emptyFields(){
    nameInput.value = '';
    messageP.innerText = '';
}