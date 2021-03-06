// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


function addTabs(newArray){

    const subjects = document.querySelector('.topics')

    newArray.forEach( topic => {

        const tabs = document.createElement('div')
        tabs.classList.add('tab')
        tabs.textContent = topic
        subjects.append(tabs)
        // console.log(topic)
    })
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')

    .then( response => {
        console.log(response)
        addTabs(response.data.topics)
    })
    .catch( error => {
        console.log('Error with initial get request to /topics')
    })
