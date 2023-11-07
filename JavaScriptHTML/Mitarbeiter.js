let data = [
    {firstName: "Hans", lastName: "Huber", points:30},
    {firstName: "Paul", lastName: "Peter", points:34},
    {firstName: "Franz", lastName: "Maller", points:35},
];

function loadPeople(){
    let html = "";

    data.forEach(element => {
        html += "<div>" + element.firstName + " " + element.lastName + "</div>"; 
    });

    document.getElementById("content").innerHTML = html;
}

loadPeople();