
let buttonDOM = document.getElementById('task');
let listDOM = document.getElementById('list');
let liElementsDOM = document.getElementsByTagName('li');

//adding all existing list elements click event listener
for (let i = 0; i < liElementsDOM.length; i++)
{
    let list = liElementsDOM[i];
    list.addEventListener('click', clicked);

    let delButton = document.createElement('span');
    delButton.textContent = "\u00D7";
    delButton.classList.add('close');
    delButton.onclick = delElement;
    list.append(delButton); 
}


function newElement() 
{   
    // if there isn't an empty value, create a list element and write the value of the input to it
    if (buttonDOM.value.trim() != "") {
        let liElementDOM = document.createElement('li');
        listDOM.appendChild(liElementDOM);
        liElementsDOM = document.getElementsByTagName('li');

        liElementDOM.innerHTML = buttonDOM.value;
        liElementDOM.addEventListener('click', clicked);
    }
}

function clicked()
{
    this.classList.toggle("checked");
}

function delElement()
{
    this.parentElement.remove();
}