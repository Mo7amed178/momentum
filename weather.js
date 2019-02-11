// axios({
//     method: 'get',
//     url: 'https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=fba2a6f689244b2d8a9c8a72d07beaba'
// })

//     .then((responce) => {
//         console.log(responce);
//     })
//     .catch((error) => {
//         console.log(error);
//     })



/* eslint-disable no-console */
// eslint-disable-next-line no-undef
axios({
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=dammam&units=metric&lang=en&appid=fba2a6f689244b2d8a9c8a72d07beaba'
})
    .then((response) => {
        console.log(response)




        const name = response.data.name;
        $('body').prepend('<h5>' + name + '</h5>')

        const description = response.data.weather[0].description;
        $('body').prepend('<h5>' + description + '</h5>')

        const temp = response.data.main.temp;
        $('body').prepend('<h4>' + temp + '</h4>')



        const icon = response.data.weather[0].icon;
        $('body').prepend('<img src= "http://openweathermap.org/img/w/' + icon + '.png"/>')

    })
    .catch((error) => {
        console.log(error);
    });