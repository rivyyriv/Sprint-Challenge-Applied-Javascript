// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function cardMaker (headline, img, name){
    const card = document.createElement('div')
    const mainHead = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authorIMG = document.createElement('img')
    const authorName = document.createElement('span')

    card.classList.add('card')
    mainHead.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    mainHead.textContent = headline
    authorIMG.src = img
    authorName.textContent = name

    card.append(mainHead)
    card.append(author)
    author.append(imgContainer)
    imgContainer.append(authorIMG)
    author.append(authorName)

    return card
}


axios.get('https://lambda-times-backend.herokuapp.com/articles')

    .then( article => {
        const articles = article.data.articles
        const cards = document.querySelector('.cards-container')
        console.log(article)

        articles.javascript.forEach( attr => {
            cards.append(cardMaker(attr.headline, attr.authorPhoto, attr.authorName))
        })

        articles.bootstrap.forEach( attr => {
            cards.append(cardMaker(attr.headline, attr.authorPhoto, attr.authorName))
        })

        articles.technology.forEach( attr => {
            cards.append(cardMaker(attr.headline, attr.authorPhoto, attr.authorName))
        })

        articles.jquery.forEach( attr => {
            cards.append(cardMaker(attr.headline, attr.authorPhoto, attr.authorName))
        })

        articles.node.forEach( attr => {
            cards.append(cardMaker(attr.headline, attr.authorPhoto, attr.authorName))
        })

    })

    .catch( error => {
        console.log('Stuck in catch' + error)
    })
    


