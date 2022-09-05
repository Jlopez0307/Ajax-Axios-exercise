console.log("Let's get this party started!");
// API Key: JaXOIPLjwNgHONY0hVnw2xKgBkIdNMIN
//Gif Search URL: api.giphy.com/v1/gifs/search

const gifSection = document.querySelector('#gifs')

const form = document.querySelector('form');
const searchGif = document.querySelector('#search-bar')
const removeGifBtn = document.querySelector('#remove-gif')



//Creates an asynchronous function
// async function getGif(search){
//     //Waits for the promise to have a value, returns that value
//     const gifResponse = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=JaXOIPLjwNgHONY0hVnw2xKgBkIdNMIN&q=${search}&lang=en`);
//     // console.log(gifResponse)

//     //Gets arrays from data response
//     let responseData = gifResponse.data.data
//     // console.log(responseData)

//     let urlArr = []
//     //Iterates over arrays and looks for URLs
//     for(let gifURL of responseData){
//         urlArr.push(gifURL.images.downsized.url)
//     }
//     return urlArr[Math.floor(Math.random() * urlArr.length)];
// }

form.addEventListener('submit', async function(e){
    //Prevents page reload
    e.preventDefault();
    //Gets user search value
    const userSearch = searchGif.value;
    //Awaits for api response, saves value
    const gifResponse = await axios.get(`https://api.giphy.com/v1/gifs/search`,
    {params: {
        q: userSearch,
        api_key: 'JaXOIPLjwNgHONY0hVnw2xKgBkIdNMIN'
    }});
    // console.log(gifResponse)

    //Gets all search results
    let responseData = gifResponse.data.data;
    console.log(responseData);

    let urlArr = [];
    //Iterates over responseData urls
    for(let gifURL of responseData){
        urlArr.push(gifURL.images.downsized.url);
    }
    //selects random index in urlArr
    let randomURL = Math.floor(Math.random() * urlArr.length);


    const gifImg = document.createElement('img');
     //Sets URL value to div background
     gifImg.classList.add('new-gif');

     //Uses gif random gif url, sets background
     gifImg.src = `${urlArr[randomURL]}`;

     //Appends div to section
     gifSection.append(gifImg);
    //Searches API based on Search bar value

    // //resets the form
    form.reset();
})

removeGifBtn.addEventListener('click', function(e){
    console.log(e.target)
    gifSection.innerHTML = '';
})