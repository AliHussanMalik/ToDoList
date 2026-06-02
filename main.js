const rawData = localStorage.getItem("Universal Key")
console.log(`rawData${rawData}`)

if(rawData) {
    
    const itemsArray = JSON.parse(rawData)
    
    const container = document.getElementById('data-container');
    
    
    itemsArray.forEach((element, index) => {
        const newDiv = document.createElement("div");
        newDiv.className = 'newDivClass'
        
        const edt = document.createElement("button")
        const del = document.createElement("button")
        
        edt.textContent = "Edit";
        del.textContent = "Delete";
        
        edt.className = 'edit-button';
        del.className = 'delete-button';
        edt.addEventListener("click", () => {
            window.location.href = `http://127.0.0.1:5500/todo.html?index=${index}`;
        });
        del.addEventListener("click", () => {
            itemsArray.splice(index,1);
            localStorage.setItem("Universal Key", JSON.stringify(itemsArray))
            newDiv.remove()
        });
        // newDiv.appendChild(edt)
        // newDiv.appendChild(del)
        
        newDiv.innerHTML = `Topic:{${element.Topic}} <br> Date:{${element.Date}}<br>Details: {${element.Details}}`;
        container.append(edt, del, newDiv);
    });
}
else{
    console.log("Else Part")
}