

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