var countryComponent = {
    // selected: [],
    data: [],

    init: function() {
        data = this.getApi('country');
        console.log(data);
    },

    getApi: async function(state) {
        const country_api_url= "https://restcountries.com/v3.1/all";
        url2 = 'https://newsapi.org/v2/top-headlines?country='+state+'&apiKey=cef36fa629f641e7a1dc6d7198c0bff9'
        if (state == 'country'){
            url = country_api_url
        }else{
            url = url2
        }
        // Storing response
        const response = await fetch(url);
        
        // Storing data in form of JSON
        var data = await response.json();
        console.log(data);
        // if (response) {
        //     hideloader();
        // }
        if (state == 'country')
            this.showCountry(data);
        else
            this.showNews(data);
    },

    showCountry: function (data) {
        let tab = ``;
        
        // Loop to access all rows 
        for (let i = 0; i < data.length; i++) {
            tab += `
            <li class = 'country-flag'> 
                <img src = ${data[i]['flags']['png']} onclick = 'countryComponent.getApi("${data[i]['cca2']}")'>
                <span class = 'header h2'>${data[i]['name']['common']}</span>
            </li>`;
        }
        // Setting innerHTML as tab variable
        document.getElementById("countryList").innerHTML = tab;
        // console.log(data);
    },

    showNews: function(data){
        let tab = ``;
        my_list = data['articles']
        console.log(my_list)
        if (my_list.length == 0){
            tab = `<h2 class='header h2'>No News for this country</h2>`
        }
        for (let i = 0; i < my_list.length; i++) {
            tab += `
            <li class = 'country-news'>
                <img src = ${my_list[i]['urlToImage']}>
                <h2 class = 'header h2'>${my_list[i]['title']}</h2>
                <p>${my_list[i]['content']}</p>
            </li>
            `;
        }
        document.getElementById("news-list").innerHTML = tab;
    }
}
countryComponent.init();


//     cacheElements: function() {
//         this.$countries = $("#container1-countryModule");
//         this.$countryList = $countries.find("#country-list");
//         this.$button = $countries.find("button");
//     }
// }



// api url

  
// Defining async function
// async function getApi(state) {
//     const country_api_url = "https://restcountries.com/v3.1/all";
//     url2 = 'https://newsapi.org/v2/top-headlines?country='+state+'&apiKey=cef36fa629f641e7a1dc6d7198c0bff9'
//     if (state == 'country'){
//         url = country_api_url
//     }else{
//         url = url2
//     }
//     // Storing response
//     const response = await fetch(url);
    
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
//     // if (response) {
//     //     hideloader();
//     // }
//     if (state == 'country')
//         showCountry(data);
//     else
//         showNews(data);
// }

// getApi('country');

// function showCountry(data) {
//     let tab = ``;
    
//     // Loop to access all rows 
//     for (let i = 0; i < data.length; i++) {
//         tab += `
//         <li class = 'country-flag'> 
//             <img src = ${data[i]['flags']['png']} onclick = 'getApi("${data[i]['cca2']}")'>
//             <span class = 'header h2'>${data[i]['name']['common']}</span>
//         </li>`;
//     }
//     // Setting innerHTML as tab variable
//     document.getElementById("countryList").innerHTML = tab;
//     // console.log(data);
// }


// function showNews(data){
//     let tab = ``;
//     my_list = data['articles']
//     console.log(my_list)
//     if (my_list.length == 0){
//         tab = `<h2 class='header h2'>No News for this country</h2>`
//     }
//     for (let i = 0; i < my_list.length; i++) {
//         tab += `
//         <li class = 'country-news'>
//             <img src = ${my_list[i]['urlToImage']}>
//             <h2 class = 'header h2'>${my_list[i]['title']}</h2>
//             <p>${my_list[i]['content']}</p>
//         </li>
//         `;
//     }
//     document.getElementById("news-list").innerHTML = tab;
// }



//!!!!!!!!GET ATTRIBUTE
// var dataAttribute = element.getAttribute('data-name');

// console.log(fetch("https://restcountries.com/v3.1/all"));

// fetch("https://restcountries.com/v3.1/all").then(function (result){
//     console.log(result)
//     })



// async function ogaboga() {
//     let response = await fetch('https://restcountries.com/v3.1/all');
//     let data = await response.json();
//     // console.log("ogabogasodasd", data)
//     return data;
// }
// console.log(ogaboga());

// function getvals() {
//     return fetch('https://restcountries.com/v3.1/all', {
//             method: "GET",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//         })
//         .then((response) => response.json())
//         .then((responseData) => {
//             return responseData;
//         })
//         .catch(error => console.warn(error));
// }

// function func() {
//     let x;
//     getvals().then((data) => {
//         x = data;
//     });
//     console.log(x);
// }
// func();

// v2

// function checkUserHosting() {
//     return fetch('url')
//         .then((response) => { 
//             return response.json().then((data) => {
//                 return data;
//             }).catch((err) => {
//                 console.log(err);
//             }) 
//         });
// }


// function callingData() {
//     let jsonData;
//     checkUserHosting().then((data) => {
//        jsonData = data;
//     }        
// }
// url = 'https://restcountries.com/v3.1/all';
// x = 0;

// function yaRab() {
//     fetch(url)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//                 x = data;
//         })
//         };
// yaRab();


// function fetchnews(){fetch('https://restcountries.com/v3.1/all')

    // }

    
// console.log(x);



// for (let i = 0; i < x.length; i++) {
//     console.log(x[i]['name']['casual']);
//     }