const ButtonsEl = document.querySelectorAll("button");

console.log(ButtonsEl);

let inputFieldEl=document.getElementById("result").innerHTML;
//document.getElementById("result").value=0;
console.log(inputFieldEl);

for(let i=0; i<ButtonsEl.length; i++){
    ButtonsEl[i].addEventListener("click",()=>{

        console.log(ButtonsEl[i].textContent);
        const buttonValue=ButtonsEl[i].textContent; 
        
        if(buttonValue==="C"){
            clearResult();
        } else if(buttonValue==="="){
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
 

}
function clearResult(){
    console.log(ButtonsEl);
    document.getElementById("result").value="";
    
}
function calculateResult(){
    console.log(ButtonsEl);
    document.getElementById("result").value = eval(document.getElementById("result").value);
    

}
function appendValue(buttonValue){
    
    // /*inputFieldEl.value*/
    // var gh = ButtonsEl[j].textContent
    // var fg = document.getElementById("result").textContent;

    // console.log(gh,' here is a value of a button!');
    // console.log(fg,'here is a value of calculator text field!');
    // var a = parseInt(fg);
    // var b = parseInt(gh);
    // var c = a +b;
    // var l =c.toString
    document.getElementById("result").value+=buttonValue;

    
    

}