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


    let section = document.createElement(div);
    let date = document.createElement(span);
    let header = document.createElement(h1);
    let temp = document.createElement(span);

    section.appendChild(date);
    section.appendChild(header);
    section.appendChild(temp);

    section.classList.add("header");
    date.classList.add("date");
    temp.classList.add("temp");

    var x = document.getElementsByClassName("header-container");
    x.appendChild(section)

}


