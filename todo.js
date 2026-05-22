function consoleIt() {
    let Topicx = document.getElementById("topicId").value;
    let Datex = document.getElementById("dateid").value;
    let Detailsx = document.getElementById("detailsId").value;

    function MyObject(tpc, dt, dtl) {
        this.Topic = tpc;
        this.Date = dt;
        this.Details = dtl;
    }
  
    const NewList = new MyObject(Topicx, Datex, Detailsx);

    let storedData = localStorage.getItem("ProgrammerF");
    let currentArray = [];

    if (storedData === null) {
        currentArray.push(NewList);
    } else {
        try {
            currentArray = JSON.parse(storedData);
            
            currentArray.push(NewList);
        } catch (e) {
            console.error("Error parsing JSON from localStorage, resetting array:", e);
            currentArray = [NewList]; 
        }
    }

    // 4. Save the updated array back to localStorage as a JSON string
    localStorage.setItem("ProgrammerF", JSON.stringify(currentArray));

    // 5. Loop through and print the updated array items safely
    for (let i = 0; i < currentArray.length; i++) {
        console.log(`Item ${i}: Topic: ${currentArray[i].Topic}, Date: ${currentArray[i].Date}`);
    }
    return; 
}
