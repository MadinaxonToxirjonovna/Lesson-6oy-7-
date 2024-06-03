let cards = document.querySelector(".cards")



async function fetchComments() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/comments')


        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        let comments = await response.json();

        displayComments(comments.slice(0,20));
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function displayComments(comments) {
  comments.forEach(comment => {

    let card = document.createElement('div');
    card.classList.add('card')

    let cardId = document.createElement('h5');
        cardId.classList.add('cardId')
        cardId.textContent = comment.id

    let name = document.createElement('h2');
        name.classList.add('name')
        name.textContent = comment.name


        let email = document.createElement('p');
        email.classList.add('email')
        email.textContent = comment.email


        let body = document.createElement('h3');
        body.classList.add('body')
        body.textContent = comment.body

        // console.log(count);


        card.append(cardId, name, email, body)
        cards.appendChild(card)


    });
};

fetchComments();

