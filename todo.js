function consoleIt(){
    let Topicx = document.getElementById("topicId").value;
    let Datex = document.getElementById("dateid").value;
    let Detailsx = document.getElementById("detailsId").value;
    console.log("Topic" , Topicx)
    console.log("Date", Datex)
    console.log("Details", Detailsx)

    alert("Pre Mature Alert 01")
    function myObject(tpc,dt,dtl,...rest){
        this.Topic = tpc;
        this.Date = dt;
        this.Details = dtl;
        console.log(`Object In Function ${myObject}Topic: ${tpc}Date:${dt} Details:${dtl}`)
        return;
    }
    alert("Pre Mature Alert 02")    
    const NewList = new myObject(Topicx,Datex,Detailsx);
    console.log("Modern List",NewList);

    alert("Pre Mature Alert 02.2")
        const ToDoArr = []
    ToDoArr.push(NewList)
    

    alert("Pre Object Alert00")
    alert("In Between Object Alert 01")
    console.log("To Do Array 00",ToDoArr);
    console.log("To Do Array 01",ToDoArr[0]);
    console.log("To Do Array 02",ToDoArr[1]);
    alert("In Between Object Alert 01.1")
    var ReterivedArray = localStorage.getItem("ProgrammerF");
    console.log("ReterivedArray B4",ReterivedArray)
    alert("In Between Object Alert 02")
    if (ReterivedArray === null){
        alert("In IF")
        localStorage.setItem("ProgrammerF",JSON.stringify(NewList))
        var ReterivedArray00 = JSON.parse(localStorage.getItem("ProgrammerF"))
        var ReterivedArray01 = localStorage.getItem("ProgrammerF")
        var ReterivedArray02 = localStorage.getItem.ProgrammerF
        // var ReterivedArray03 = JSON.parse(localStorage.getItem("ProgrammerF"))
        // var ReterivedArray = NewList
        console.log("ReterivedArray00 After",ReterivedArray00)
        console.log("ReterivedArray01 After",ReterivedArray01)
        console.log("ReterivedArray02 After",ReterivedArray02)
        // console.log("ReterivedArray03 After",ReterivedArray03)
        alert("In Between Object Alert 03")
    }
    else{
        alert("In Else")
            var ReterivedArray = ReterivedArray.concat(JSON.stringify(NewList))
        localStorage.setItem("ProgrammerF",ReterivedArray)
        alert("CheckPoint")
        var ReterivedArrayy =  localStorage.getItem("ProgrammerF")
            console.log("ReterivedArray IZ",ReterivedArray);
            alert("Be Alert")
        }
    alert("Post Array Alert")
    return; 
};

