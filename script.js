//operaciones basicas
let a = 0;
let b = 0;

const sumar = function(a, b) {
    return a + b;    
};
  
const restar = function(a, b) {
      return a - b;
};

  const multiplicar = function(a, b){
      return a * b;
};

  const dividir = function(a, b){
    return a / b;
};
//FUNCION OPERATIVA
  const operar = function(operacion, a, b){

    return operacion(a, b);
};



const numbers = Array.from(document.querySelectorAll('button'));
console.log(numbers);

const display = document.getElementById("display");


function clearNumbers() {   //Limpiar display
    display.innerHTML = "";
}

function displayNumbers(evento){     //Mostrar numeros ingresados en el display
display.innerHTML += evento;
let displayValue = display.innerHTML;
return displayValue;
};


//INTENTANDO HACER UNA FUNCION QUE LEA EL DISPLAY Y PUEDA OPERAR

function convertirDisplayAOperacion(){
  let segundoNumero;
  let primerNumero;
  let displayArray = display.innerHTML.split("");
  let displayArrayNumerico = [];

  // for(let i = 0; i < displayArray.length ; i++){
    
  //   displayArrayNumerico[i] = parseInt(displayArray[i]); 
  // }
  // console.log(displayArrayNumerico);
  let i = 0;
    while(!isNaN(displayArray[i])){
      primerNumero += (displayArray[i]);
      i++
      if(isNaN(displayArray[i])){
      tipoDeOperacion = displayArray[i];
      i++;
      for(i ; i < displayArray.length ; i++) {
        segundoNumero += displayArray[i];
      }
      break;
      }
    }
    
  
  // while( !isNaN(displayArray.pop())){
  //    segundoNumero = segundoNumero + parseInt(displayArray.pop());
  // } 
  // let tipoDeOperacion = displayArray.pop();
  // while( !isNaN(displayArray.pop())){
  //    primerNumero = primerNumero + parseInt(displayArray.pop());
  // }
  console.log(segundoNumero);
  console.log(tipoDeOperacion);
  console.log(primerNumero);
  return
}





// Create the functions that populate the display when you click the number buttons… 
// you should be storing the ‘display value’ in a variable somewhere for use in the next step.
// Make the calculator work! You’ll need to store the first number that is input into the calculator
//  when a user presses an operator, and also save which operation has been chosen and then operate() 
//  on them when the user presses the “=” key.
// You should already have the code that can populate the display, so once operate() has been called,
//  update the display with the ‘solution’ to the operation.
// This is the hardest part of the project. You need to figure out how to store all the values and 
// call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.