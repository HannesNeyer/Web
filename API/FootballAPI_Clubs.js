async function getData() {
    try {
        const response = await fetch("https://api.openligadb.de/getavailableteams/bl1/2023");
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new TypeError("Oops, we haven't got JSON!");
        }
        const data = await response.json();
        let html ="";
        html += "<h1>Zahlen</h1>"
        data.slice(0, 4).forEach((element, index) => {
            html +="<div class='content'>" + "<div class='icons'><img src=" + element.teamIconUrl + " width='80vw' height='80vw'></div>" +  "<div class ='teamName'>" + element.teamName + "</div>" + "</div>" 
        });
        document.getElementById("output").innerHTML=html;

        html ="";
        html += "<h1>B</h1>"
        data.slice(4, 7).forEach((element, index) => {
            html += "<div class='content'>" + "<div class='icons'><img src=" + element.teamIconUrl + " width='80vw' height='80vw'></div>" +  "<div class ='teamName'>" + element.teamName + "</div>" + "</div>" 
        });
        document.getElementById("output1").innerHTML=html;

        html ="";
        html += "<h1>E</h1>"
        data.slice(7, 8).forEach((element, index) => {
            html += "<div class='content'>" + "<div class='icons'><img src=" + element.teamIconUrl + " width='80vw' height='80vw'></div>" +  "<div class ='teamName'>" + element.teamName + "</div>" + "</div>" 
        });

        document.getElementById("output2").innerHTML=html;

        html ="";
        html += "<h1>F</h1>"
        data.slice(8, 10).forEach((element, index) => {
            html += "<div class='content'>" + "<div class='icons'><img src=" + element.teamIconUrl + " width='80vw' height='80vw'></div>" +  "<div class ='teamName'>" + element.teamName + "</div>" + "</div>" 
        });
        document.getElementById("output3").innerHTML=html;

        html ="";
        html += "<h1>R</h1>" 
        data.slice(10, 11).forEach((element, index) => {
            html += "<div class='content'>" + "<div class='icons'><img src=" + element.teamIconUrl + " width='80vw' height='80vw'></div>" +  "<div class ='teamName'>" + element.teamName + "</div>" + "</div>" 
        });
        document.getElementById("output4").innerHTML=html;

        html ="";
        html += "<h1>S</h1>"
        data.slice(11, 13).forEach((element, index) => {
            html += "<div class='content'>" + "<div class='icons'><img src=" + element.teamIconUrl + " width='80vw' height='80vw'></div>" +  "<div class ='teamName'>" + element.teamName + "</div>" + "</div>" 
        });
        document.getElementById("output5").innerHTML=html;

        html ="";
        html += "<h1>T</h1>"
        data.slice(13, 14).forEach((element, index) => {
            html += "<div class='content'>" + "<div class='icons'><img src=" + element.teamIconUrl + " width='80vw' height='80vw'></div>" +  "<div class ='teamName'>" + element.teamName + "</div>" + "</div>" 
        });
        document.getElementById("output6").innerHTML=html;

        html ="";
        html += "<h1>V</h1>"
        data.slice(14, 17).forEach((element, index) => {
            html += "<div class='content'>" + "<div class='icons'><img src=" + element.teamIconUrl + " width='80vw' height='80vw'></div>" +  "<div class ='teamName'>" + element.teamName + "</div>" + "</div>" 
        });
        document.getElementById("output7").innerHTML=html;

        html ="";
        html += "<h1>W</h1>"
        data.slice(17, 18).forEach((element, index) => {
            html += "<div class='content'>" + "<div class='icons'><img src=" + element.teamIconUrl + " width='80vw' height='80vw'></div>" +  "<div class ='teamName'>" + element.teamName + "</div>" + "</div>" 
        });
        document.getElementById("output8").innerHTML=html;
        // process your data further8
    } catch (error) {
        console.error("Error:", error);
    }
}

document.addEventListener("DOMContentLoaded",()=>{
getData();
})


