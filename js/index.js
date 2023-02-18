

//  Create a new date object and store it in a variable named today

// hint: new Date() constructor
//  Retrieve the current year from your date object and store it in a variable named thisYear
var today = new Date();
console.log(today)
var thisYear = today.getFullYear()
console.log(today.getFullYear());

// hint: getFullYear method
//  Using "DOM Selection", select the <footer> element from the DOM and store it in a variable named footer
var myFooter = document.getElementById("myFooter");


// hint: querySelector method
//  Create a new paragraph (p) element and store it in a variable named copyright
// console.log (copyright)
// hint: createElement method
const para = document.createElement("p");
para.innerText = "Raheim " + thisYear;
//  Set the inner HTML of your copyright element to display your name and the current year
myFooter.appendChild(para)
// hint: use thisYear variable from earlier
//  Using "DOM Manipulation", append the copyright element to the footer


//  List your technical skills by creating an Array of String values and store it in a variable named skills
const skills = ["Research and reporting", "Proficient in Microsoft Excel, Word, PowerPoint", "Intermediate Knowledge of R programming", "Beginner Knowledge Java Script"];
//  Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection
// hint: querySelector or getElementById method
skillsSection = document.querySelector('#skills')
console.log(skillsSection)

// Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element and store it in a variable named skillsList
skillsList = document.querySelector('#skillslist');
 console.log(skillsList)

//  Create a for loop to iterate over your skills Array, starting at index 0
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li")
    skill.innerText = skills[i]
    skillsList.appendChild(skill)
}

function opentab(tabname, event) {
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}



let messageForm = document.getElementsByName("leave_message")
console.log(messageForm)
messageForm[0].addEventListener("submit", function (event) {
    event.preventDefault()
    let name = event.target.name
    console.log(name.value) // .value hidden attrubite 
    let email = event.target.email
    console.log(email.value)
    let message = event.target.message
    console.log(message.value)

    let messageSection = document.getElementById("message")
    let newMessage = document.createElement('li')
    newMessage.innerHTML = `<a href="mailto:${email.value}">${name.value} </a> <span>${message.value} </span>`
    event.target.reset()


    messageList.appendChild(newMessage)

    let removeButton = document.createElement("button")
    removeButton.innerText = "Remove"
    removeButton.type = "button"; //attribute is the type 
    removeButton.addEventListener("click", function () {
        let entry = removeButton.parentNode
        entry.remove()

    })
    newMessage.appendChild(removeButton)
})



//  Inside the callback function, above the other code you just wrote, add a new line to prevent the default refreshing behavior of the "submit" event
// hint: preventDefault method
//  Save and refresh your browser
//  Fill out the HTML form in your browser and hit "Submit"
// You should see that the page does not refresh and your values are logged in the console
// Note: at this point, you should notice that the form is submitting properly but the form fields are not reset after submit

//  Inside the callback function, on the very last line, add a new line of code to clear the form
// hint: reset method
//  Save and refresh your browser
// Display Messages in List
//  Open index.js and start inside the event listener callback function on the line above where you reset the form

//  Using "DOM Selection", select the #messages section by id and store it in a variable named messageSection



//  Using "DOM Selection", query the messageSection (instead of the entire document) to find the <ul> element and store it in a variable named messageList

//  Create a new list item (li) element and store it in a variable named newMessage
//  On the next line, set the inner HTML of your newMessage element with the following information:
// <a> element that displays the "name" and links to the "email" (hint: use the mailto: prefix)
// <span> element that displays the "message"
//  Create a new <button> element and store it in a variable named removeButton
// Set the inner text to "remove"
// Set the type attribute to "button"
// Add an event listener to the removeButton element that handles the "click" event
// Inside the callback function, find the button's parent element using DOM Traversal (hint: parentNode property) and store it in a variable named entry
// Remove the entry element from the DOM (hint: remove method)
//  Append the removeButton to the newMessage element
// hint: appendChild method
//  Append the newMessage to the messageList element
//  Save and refresh your browser

// #### Fetch GitHub Repositories

// - [ ] Open your `index.js` file and start at the bottom
// - [ ] Create a new `XMLHttpRequest` object and store it in a variable named `githubRequest`
// - [ ] Call the `open` method on your `githubRequest` object and pass the necessary arguments
//   - [ ] 1. `method`: the method of your request (in this case, "GET")
//   - [ ] 2. `url`: the url of your request (in this case, "https://api.github.com/users/{GITHUB_USERNAME}/repos")
// - [ ] Finally, call the `send` method on your `githubRequest` object to actually send the request
// - [ ] Save and refresh your browser
//   - You should see your XHR request in the DevTools "Network" tab (see screenshot)

// <img src="..assets/section-6/../../../assets/section-6/lesson-6-1-xhr.png" alt="XHR Request in Network Tab" width="700" />

// > Note: at this point, you have made a request to GitHub for your public repository data but nothing is being done with the data that is returned from the server

//let githubRequest = new XMLHttpRequest
// githubRequest.open("GET", "https://api.github.com/users/Rjjayy/repos")
// githubRequest.send()
// githubRequest.addEventListener("load", function () {
//     repositories = JSON.parse(this.response)
//     console.log(repositories)

//     projectSection = document.getElementById("projects")
//     projectlist = projectSection.children[1]
//     for (let index = 0; index < repositories.length; index++) {
//         let project = document.createElement('li')
//         project.innerText= repositories[index]["name"]
//         projectlist.appendChild(project)
//     }
// })

fetch("https://api.github.com/users/Rjjayy/repos")
  .then(response => response.json())
  .then(repositories => {
    projectSection = document.getElementById("projects");
    projectlist = projectSection.children[1];
    for (let index = 0; index < repositories.length; index++) {
      let project = document.createElement("li");
      project.innerText = repositories[index]["name"];
      projectlist.appendChild(project);
    }
  })
  // Add this to your JavaScript code
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var submitBtn = document.getElementById("submitBtn");
var nameInput = document.getElementById("nameInput");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks on the submit button, display the welcome message and increment the visitor count
submitBtn.onclick = function() {
  var visitorCount = parseInt(localStorage.getItem("visitorCount"));
  if (isNaN(visitorCount)) {
    visitorCount = 1;
  } else {
    visitorCount++;
  }
  localStorage.setItem("visitorCount", visitorCount);
  var welcomeMsg = "Welcome, " + nameInput.value + "! You are the " + visitorCount + getOrdinalSuffix(visitorCount) + " visitor!";
  alert(welcomeMsg);
  modal.style.display = "none";
}

// When the user clicks on the close button, close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Display the modal when the page loads, unless the visitor has already been welcomed
window.onload = function() {
  var visitorCount = parseInt(localStorage.getItem("visitorCount"));
  if (isNaN(visitorCount) || visitorCount == 0) {
    modal.style.display = "block";
  }
}

// Helper function to get the correct ordinal suffix for the visitor count
function getOrdinalSuffix(number) {
  if (number == 11 || number == 12 || number == 13) {
    return "th";
  }
  switch (number % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

//Wrap the immage//
<div class="message-header-container">
  <img src="RaheimWB/Flower.png" alt="Floweronly" width="50" height="50">
  <h3>Message</h3>
</div>