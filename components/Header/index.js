// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {


     // create elements
    var Div = document.createElement("div"); 
    var date = document.createElement("span"); 
    var header = document.createElement("h1"); 
    var temp = document.createElement("span"); 
    // append elements
    Div.appendChild(date)
    Div.appendChild(header)
    Div.appendChild(temp)
    // Add Classes
    date.className = 'date';
    temp.className = 'temp';
    //apend to dom
    headercontainer = document.querySelector('body > div.header-container');
    headercontainer.appendChild(Div)

}
  Header();