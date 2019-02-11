

// function textSucess(response) {
//     console.log(response)
//     $('p').append(response.data.quoteAutho);
//     $('h6').append(response.data.quoteText);
// }

// function textFall(error) {
//     console.log(error);
// }


axios({
    method: 'get',
    url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
})

    // .then(textSucess)
    // .catch(textFall);






    .then((response) => {

        console.log(response)
        console.log('hel')
        const author = response.data.quoteAuthor
        $('body').append(`<h3>${author}</h3>`)
        const text = response.data.quoteText
        $('body').append(`<p>${text}</p>`)



    })
    .catch((error) => {

    });

