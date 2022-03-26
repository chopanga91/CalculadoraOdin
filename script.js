//operaciones basicas

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


// numbers[0].addEventListener("click", displayNumbers(0));

// numbers.forEach(number => { 
//     number.addEventListener("click", displayNumbers(number.innerHTML));
// });

function clearNumbers() {
    display.innerHTML = "";
}

function displayNumbers(evento){
display.innerHTML += evento;
let displayValue = display.innerHTML;
return displayValue;
};


