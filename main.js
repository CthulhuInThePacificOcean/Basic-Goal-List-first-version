const addButton = document.querySelector('#button');
const myForm = document.querySelector('#form');
const input = document.querySelector('#goalinput');
const message = document.querySelector('#message');
const goals = document.querySelector('#currentgoals');

addButton.addEventListener("click", onSubmit);



function onSubmit(e){
    e.preventDefault();
    if(input.value == ''){
        message.innerHTML = 'Have no goals or something? If not, please enter your goal.'
        setTimeout(() => message.remove(), 3000);
    }
    else{
       const goal = document.createElement('li');
       const button = document.createElement('button');
       button.innerHTML = 'delete';
       goal.appendChild(document.createTextNode(`${input.value}`));
       goals.appendChild(goal);
       goals.appendChild(button);
    }

}