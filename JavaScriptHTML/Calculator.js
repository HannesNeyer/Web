//let element = document.getElementById("content")
//console.log(element)
//document.getElementById("content").innerHTML = "TolleSache";
function buttonClicked(){
    console.log("clicked")
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let calculationSymbol = document.getElementById("CalculationTyp").value;
    let result = 0;

    switch(calculationSymbol){
        case "+":
            result = parseFloat(num1)+parseFloat(num2);
            break;
        case "-":
            result =parseFloat(num1)-parseFloat(num2);
            break;
        case ":":
            result =parseFloat(num1)/parseFloat(num2);
            break;
        case "*":
            result =parseFloat(num1)*parseFloat(num2);
            break;
    }

    console.log(result);
}

buttonClicked();