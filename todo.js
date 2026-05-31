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

    let storedData = localStorage.getItem("Universal Key");
    var currentArray = [];

    if (storedData === null) {
        currentArray.push(NewList);
    } else {
            currentArray = JSON.parse(storedData);
            
            currentArray.push(NewList);
    }

    localStorage.setItem("Universal Key", JSON.stringify(currentArray));

    // for (let i = 0; i < currentArray.length; i++) {
    //     console.log(`Item ${i}: Topic: ${currentArray[i].Topic}, Date: ${currentArray[i].Date}`);
    // }
    return; 
}

const rawData = localStorage.getItem("Universal Key")

if(rawData){
    
    const itemsArray = JSON.parse(rawData)

    const container = document.getElementById('data-container');

    
    itemsArray.forEach((element ,index) => {
        const newDiv = document.createElement("div");
        newDiv.className = 'newDivClass'        
        
        const edt = document.createElement("button")
        const del = document.createElement("button")

        edt.textContent = "Edit";
        del.textContent = "Delete";

        edt.className = 'edit-button';
        del.className = 'delete-button';
        
        edt.addEventListener("click", (topic,date, details)=>{
            window.location.href="http://127.0.0.1:5500/todo.html";
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString)

            const Topc = urlParams.get('Topic')
            const Dat = urlParams.get('Date')
            const Dtails = urlParams.get('Details')
            console.log(`${Topc} ${Dat} ${Dtails}`)
            alert("Is it printing")
        });

        del.addEventListener("click", ()=>{
            console.log("Delete Button");
            console.log(currentArray[i])
        });

        newDiv.innerHTML=`Topic:{${element.Topic}} <br> Date:{${element.Date}}<br>Details: {${element.Details}}`;
        container.append(edt,del,newDiv)
    });
    // document.getElementById("Objecthere").innerHTML = itemsArray.map(displayArray).join("<br>");
    // function displayArray(item){
    //     return[item.Topic,item.Date,item.Details].join(" <br>");
    // }   
}
function mainHead(){
    const MainHeading = document.getElementById(MainHeading).value
    console.log(MainHeading)
    alert("MainHeading")
}
