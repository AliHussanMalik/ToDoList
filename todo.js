const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)

const page = urlParams.get('index')
const NewHeading = document.getElementById("todoHeading")

const topicInput = document.getElementById('topicId')
const dateInput = document.getElementById('dateId')
const detailsInput = document.getElementById('detailsId')
const submitButton = document.getElementById('submit')

const SavedTasks = JSON.parse(localStorage.getItem("Universal Key")) || [];
const taskIndex = parseInt(page);
const currentTask = SavedTasks[taskIndex];
console.log(` Query String {${queryString}} Url Params {${urlParams}} Page{${page}} NewHeading{${NewHeading}} SavedTasks {${SavedTasks}} Task Index {${taskIndex}} current Task {${currentTask}}`)
if(page) {
    console.log(`This is the Task ${page}`)
    NewHeading.innerHTML = 'Edit Your Task';
    submitButton.value = 'Update Task';

    topicInput.value = `This is the value: {${currentTask.Topic}}`;
    dateInput.value = currentTask.Date;
    detailsInput.value = currentTask.Details;
}
else {
    console.log("Page does not exist")
}



//Submit button of form 
function handleSubmit() {
    let Topicx = document.getElementById("topicId").value;
    let Datex = document.getElementById("dateId").value;
    let Detailsx = document.getElementById("detailsId").value;

    function MyObject(tpc, dt, dtl) {
        this.Topic = tpc;
        this.Date = dt;
        this.Details = dtl;
    }
    const NewList = new MyObject(Topicx, Datex, Detailsx);

    let storedData = localStorage.getItem("Universal Key");
    var currentArray = [];
        if(storedData === null) {
            currentArray.push(NewList);
        } else {
            currentArray = JSON.parse(storedData);
            currentArray.push(NewList);
        }
        localStorage.setItem("Universal Key", JSON.stringify(currentArray));
        return;
    }