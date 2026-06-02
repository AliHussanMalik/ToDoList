const rawData = localStorage.getItem("Universal Key")
console.log(`rawData${rawData}`)

if(rawData) {
    
    const itemsArray = JSON.parse(rawData)
    
    
    const container = document.getElementById('data-container');
    
    
    itemsArray.forEach((element, index) => {
        const newDiv = document.createElement("div");
        newDiv.className = 'newDivClass';
        newDiv.id = 'newDivId';

        newDiv.innerHTML = `Topic:{${element.Topic}} <br> Date:{${element.Date}}<br>Details: {${element.Details}}`;
        
        const edt = document.createElement("button")
        const del = document.createElement("button")
        
        edt.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>`;
        del.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M166.2-16c-13.3 0-25.3 8.3-30 20.8L120 48 24 48C10.7 48 0 58.7 0 72S10.7 96 24 96l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0-16.2-43.2C307.1-7.7 295.2-16 281.8-16L166.2-16zM32 144l0 304c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-304-48 0 0 304c0 8.8-7.2 16-16 16L96 464c-8.8 0-16-7.2-16-16l0-304-48 0zm160 72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176zm112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176z"/></svg>`;
        
        edt.className = 'edit-button';
        edt.id = 'editId';
    
        del.className = 'delete-button';
        del.id = 'deleteId';
        edt.addEventListener("click", () => {
            window.location.href = `http://127.0.0.1:5500/todo.html?index=${index}`;
        });
        
        del.addEventListener("click", () => {
            itemsArray.splice(index,1);
            localStorage.setItem("Universal Key", JSON.stringify(itemsArray))
            newDiv.remove()
        });
            newDiv.append(edt);
            newDiv.append(del);

        container.append(newDiv);
    });
}
else{
    console.log("Else Part")
}