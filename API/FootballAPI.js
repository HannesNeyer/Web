const loadData =()=>{
    fetch("https://api.openligadb.de/getbltabele/bl1/2022").then(
        (result)=>{
            result.json().then((data)=>{})
            fillTable();
        }
    )
}

const fillTable =()=>{
    let html;
    data.forEach(element => {
        html += "<div>" + element.teamName + "</div>"
    });

    document.getElementById("output").innerHTML=data;
}

function buttonClicked(){
    
}

loadData();

