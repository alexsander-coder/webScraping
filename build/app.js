"use strict";
fetch('http://127.0.0.1:3339/finish')
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    const tableElement = document.getElementById("dataTable"); // Defina o tipo para HTMLTableElement
    data.forEach((item) => {
        const row = tableElement.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        const cleanedName = item.name.replace(/\[\d+\]/g, '').trim();
        cell2.innerHTML = cleanedName;
        cell3.innerHTML = item.party;
        cell4.innerHTML = item.duration;
        cell5.innerHTML = item.vice;
        cell6.innerHTML = item.eleicao;
        const imgElement = document.createElement("img");
        imgElement.src = item.image.startsWith("//") ? "https:" + item.image : item.image;
        imgElement.alt = item.name;
        imgElement.width = 55;
        imgElement.height = 55;
        cell1.appendChild(imgElement);
    });
})
    .catch((error) => console.error('Error:', error));
