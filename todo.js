document.body.style.backgroundColor = "grey";
document.title = "My Title"
// document.body.style.backgroundcolor = "black";
console.log(document);
console.dir(document);
// const Topic = document.querySelector(value="TopicValue");
const Topic = document.getElementById("topicId").value
Topic.addEventListener("click", createTopic)
console.log("Topic DUMP");
console.log(Topic);
{/* <p id="topic"></p> */}
const Date = document.getElementById("date").value;
Date.addEventListener("click", createDate)
// const Date = document.querySelector(value="TopicDate");
console.log("Date DUMP");
console.log(Date);
{/* <p id="date"></p> */}
const Details = document.getElementById("details-id").value;
Details.addEventListener("click", createDetails)
console.log("Details DUMP");
console.log(Details);
// const Details = document.querySelector(value="TopicDetials");
{/* <p id="details"></p> */}
const Submit = document.getElementById("submit");
console.log("Submit");
console.log(Submit);
console.log(5+6)
{/* <p id="submit"></p> */}
console.log("Topic ,     Date ,     Details")
console.log(Topic , Date , Details)

function createTopic(){

}
function createDate(){}
function createDetails(){}
function createObject(){
    
}
function myFunction(){
    const Topic = document.querySelector(value="TopicValue").value;
    document.querySelector.Topic;
    const Date = document.querySelector(value="TopicDate").value;
    document.querySelector.Date;
    const Details = document.querySelector(value="TopicDetials").value;
    document.querySelector.Details;
    console.log(Topic , Date , Details)
}

// const username = "Bro";
// const Welcome = document.querySelector(value ="welcome-msg-value");
// console.log("Welcome");
// console.log(Welcome);
// console.log(username);

// welcome.textContent += username === ""? 'Guest' : username;

localStorage.setItem("key","value");
localStorage.setItem("key","value");
localStorage.setItem("key","value");

const ToDoObject = {
    text: "text",
    date: "date",
    details: "details"
};

const ToDoArray =[];
ToDoArray.push(ToDoObject)

// const Fruits = document.getElementsByClassName("fruits");
// console.log(Fruits)