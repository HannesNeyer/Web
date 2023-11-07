function generate(){
    let StartingNumber = document.getElementById("field1").value;
    let EndNumber = document.getElementById("field2").value;

    let amountOfRandomNumbers = parseInt(EndNumber) - parseInt(StartingNumber) + 1;
    let randomNumber = Math.floor(Math.random() * amountOfRandomNumbers) + parseInt(StartingNumber);
    document.getElementById("output").innerHTML = randomNumber;
}