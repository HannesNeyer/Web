async function getData() {
                try {
                    const response = await fetch("https://api.openligadb.de/getbltable/bl1/2023");
                    const contentType = response.headers.get("content-type");
                    if (!contentType || !contentType.includes("application/json")) {
                        throw new TypeError("Oops, we haven't got JSON!");
                    }
                    const data = await response.json();
                    let html ="";
                    data.forEach((element, index) => {
                        index = index+1;
                        html += "<div class='content'>" + "<div class ='index'>" + index + "</div>" + "<div class='image'><img src=" + element.teamIconUrl + " width='25vw' height='25vw'></div>" +  "<div class ='teamName'>" + element.teamName + "</div>" + "<div class ='matches'>" + element.matches + "</div>" + "<div class ='won'>" + element.won + "</div>"+ "<div class ='draw'>" + element.draw + "</div>" + "<div class ='lost'>" + element.lost + "</div>" + "<div class ='goals'>" + element.goals + "</div>"+ "<div class ='goalDiff'>" + element.goalDiff + "</div>"+ "<div class ='points'>" + element.points + "</div>" + "</div>" 
                    });
                    document.getElementById("output").innerHTML=html;
                    // process your data further
                } catch (error) {
                    console.error("Error:", error);
                }
        }

document.addEventListener("DOMContentLoaded",()=>{
    getData();
})



