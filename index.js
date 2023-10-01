function addingEventListener() {
    const input=document.getElementById(`button`);
    input.addEventListener(`click`,function(){
        alert(`I was clicked On the Main`)
    })
}
addingEventListener();

function divEventListenera(){
    const event=document.getElementById(`button2`)
    event.addEventListener(`click`, function(){
        alert(`Mandem You Clicked on Div 1`)
    })
}
divEventListenera();

function divEventListenerb(){
    const event = document.getElementById(`button3`)
    event.addEventListener(`click`,function(){
        alert(`Okay I am button with input ID button 3`)
    })
}
divEventListenerb()

function divEventListenerc(){
    const event=document.getElementById(`button4`)
    event.addEventListener(`click`, function(){
        alert(`I am button number 4`)
    })
}
divEventListenerc()

function divEventListenerd(){
    const event=document.getElementById(`button5`)
    event.addEventListener(`click`,function(){
        alert(`I am the last JEDI`)
    })
}
divEventListenerd()

function divEventListenere(){
    const event=document.getElementById(`button6`)
    event.addEventListener(`click`,function(){
        alert(`I am the one and only DARTH VADER!!!! `)
    })
}
divEventListenere()