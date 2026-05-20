function consoleIt(){
    let Tapic = document.getElementById("topicId").value;
    let Date = document.getElementById("dateid").value;
    let Details = document.getElementById("detailsId").value;
    console.log("Topic" , Tapic)
    console.log("Date", Date)
    console.log("Details", Details)

    const ToDoObj ={
        Topic:Tapic,
        Date:Date,
        Details:Details
    }
    console.log(ToDoObj);

    const ToDoArr = []
    ToDoarr.push(ToDoObj)
    console.log(ToDoArr);
    alert("asdf")
    return;
};