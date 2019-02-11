function imageSucess(response) {
    console.log(response.data.urls.regular)
    $('body').css('background-image', 'url("' + response.data.urls.regular + '")');
    $('body').css('background-repeat', 'no-repeat');
    $('body').css('background-size', 'cover');
}

function imageFail(error) {
    console.log(error)
}

axios({
    method: 'get',
    url: 'https://api.unsplash.com/photos/random?client_id=5c54fd7cd2e4fa023384793fb55bc0bdd26afe6aef4eaaa9c9f93c9ac2b25312',
})
    .then(imageSucess)
    .catch(imageFail);

