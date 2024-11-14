//append to input 
function appendToDisplay(value){
    document.getElementById('display').value +=value;
}

//clear input 
function clearDisplay(){
    document.getElementById('display').value=" ";
}

//delete last
function deleteLast(){
    let display=document.getElementById('display').value;
    document.getElementById('display').value=display.slice(0,-1);
}

//calculate function
function  calculate(){
    let display=document.getElementById('display').value;
    document.getElementById('display').value=eval(display);
}

