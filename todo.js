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
// console.log(` Query String {${queryString}} Url Params {${urlParams}} Page{${page}} NewHeading{${NewHeading}} SavedTasks {${SavedTasks}} Task Index {${taskIndex}} current Task {${currentTask}}`)
if (page) {
    NewHeading.innerHTML = 'Edit Your Task';
    submitButton.value = 'Update Task';

    topicInput.value = currentTask.Topic;
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
    var currentArray = [];

    if (page) {
        let storedData = localStorage.getItem("Universal Key");
        currentArray = JSON.parse(storedData);

        currentArray[page].Topic = Topicx;
        currentArray[page].Date = Datex;
        currentArray[page].Details = Detailsx;
    }
    else {
        function MyObject(tpc, dt, dtl) {
            this.Topic = tpc;
            this.Date = dt;
            this.Details = dtl;
        }
        const NewList = new MyObject(Topicx, Datex, Detailsx);

        let storedData = localStorage.getItem("Universal Key");

        if (storedData === null) {
            currentArray.push(NewList);
        } else {
            currentArray = JSON.parse(storedData);
            currentArray.push(NewList);
        }
    }
    localStorage.setItem("Universal Key", JSON.stringify(currentArray));
    return;
}