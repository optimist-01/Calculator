const element = document.getElementsByTagName('li');
const screen = document.querySelectorAll('p')[0];
const clear = document.getElementsByClassName('clear')[0];

for(let i = 0;i<element.length; i+=1){
    if(element[i].innerHTML === '='){
        element[i].addEventListener("click",calculate(i));
    }else{
        element[i].addEventListener("click",addToCurrentValue(i));
    }
}

function addToCurrentValue(i){
    return function(){
        if (element[i].innerHTML === 'x'){
            screen.innerHTML += '*';
        }else{
            screen.innerHTML += element[i].innerHTML;
        }
    }
}

function calculate(i){
    return function(){
        screen.innerHTML = eval(screen.innerHTML);
    }
}

clear.onclick = function(){
    screen.innerHTML = " ";
}
