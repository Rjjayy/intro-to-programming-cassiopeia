

//  Create a new date object and store it in a variable named today

// hint: new Date() constructor
//  Retrieve the current year from your date object and store it in a variable named thisYear
var today = new Date();
console.log (today)
var thisYear = today.getFullYear()
console.log (today.getFullYear());

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

// hint: appendChild method
//  Save and refresh your browser

// You should see the text "Your Name 2021" at the bottom of the page
// Add Skills Section
//  Open your index.html file
//  Above the "Connect" section, add a new <section> element with an id attribute of value "skills"
//  Inside the new section, add a <h2> element that says "Skills"
//  After the <h2> element, add an empty unordered list (<ul>) element
//  Save and refresh your browser
// You should see the new "Skills" heading
// Create List of Skills
//  Open your index.js file
//  List your technical skills by creating an Array of String values and store it in a variable named skills
const skills = ["Research and reporting","Proficient in Microsoft Excel, Word, PowerPoint", "Intermediate Knowledge of R programming", "Beginner Knowledge Java Script"];
//  Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection
// hint: querySelector or getElementById method
skillsSection = document.querySelector('#skills')
console.log(skillsSection)

// Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element and store it in a variable named skillsList
skillsList = skillsSection.nextElementSibling; // this method next ElementSibling always get the element(<ul>)next to it. 
console.log(skillsList)

//  Create a for loop to iterate over your skills Array, starting at index 0
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li")
    skill.innerText = skills[i] 
    skillsList.appendChild(skill)
}
//  Inside the loop, create a new list item (li) element and store it in a variable named skill
// hint: createElement method
//  On the next line, set the inner text of your skill variable to the value of the current Array element
// hint: access the Array element using bracket notation
//  On the next line, append the skill element to the skillsList element
// hint: appendChild method
// Save and refresh your browser
// You should see your list of skills beneath the "Skills" heading

// Create Message Form
//  Open your index.html file
//  Above the <footer> element, add an empty <section> element
//  Inside the new <section> element, create a level-two heading that says "Leave a Message"
//  After the heading, create an HTML <form> element with a name attribute that equals "leave_message"
//  Inside the <form> element, add the following:
// <input> element with attributes: type "text", name "name", and required true
// <input> element with attributes: type "email", name "email", and required true
// <textarea> element with attributes: name "message" and required true
// <button> element that says "Submit" and has type attribute equal to "submit"
// Each form field should also have a corresponding <label> element
// (Optional) Use <br> elements to stack the form fields
//  Save and refresh your browser
// Add Message List Section
//  After the <section> element from the previous step, create a new <section> element with an id of "messages"
//  Inside that element, create a level-two heading that says "Messages"
//  After the heading, add an empty unordered list (<ul>) element
//  Save and refresh your browser
// Handle Message Form Submit
//  Open your index.js file and start at the bottom
//  Using "DOM Selection", select the "leave_message" form by name attribute and store it in a variable named messageForm
//  Add an event listener to the messageForm element that handles the "submit" event
// hint: addEventListener method
//  Inside the callback function for your event listener, create a new variable for each of the three form fields and retrieve the value from the event
// hint: event.target is the form, event.target.name is the first input element
//  Inside the callback function for your event listener, add a console.log statement to log the three variables you created in the previous step
//  Save and refresh your browser
//  Fill out the HTML form in your browser and hit "Submit"
// Note: at this point, you should notice that the browser is refreshing automatically when you submit your form which is not the desired behavior

let messageForm = document.getElementsByName("leave_message") 
console.log(messageForm)
messageForm[0].addEventListener("submit", function(event) { 
    event.preventDefault()
    let name= event.target.name
    console.log(name)
    let email= event.target.email
    console.log(email)
    let message= event.target.message
    console.log(message)
  event.target.reset()
  let messageSection = document.getElementById("message")
  let newMessage = document.createElement('li')
    newMessage.innerHTML= "Hello"
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