"use strict";
console.log("Let's get this party started!");

$("<form id='main'>").appendTo("body");
$('<input id="search" placeholder="search">').appendTo("form");
$('<input id="button" value="search" type="button">').appendTo("form");
let $container = $('<div id="container">').appendTo("body");
//axios.get("giphy.com", { parma: { a: 1, b: 2 } });
let $search = $("#search").val();

// $('#main').on('submit', api)
//   async function api() {
//     let response = await axios.get("https://api.giphy.com/v1/gifs/search", {
//       params: { q: "CATS", api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
//     });
//     return response;
//   }


//     let $search = $("#search").val();
//     await api($search)


async function api(search) {
    $('document').ready(mainfunction);
    let response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: { q: search, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
    });
    return response;
}

let apiObj = await api($search);
console.log(apiObj.data.data[0].url);

// update "CAT" to our submit value
// preventdefault()

// 1. get gif (variable.data.data[0].url)
// 2. append to a page (our container)
// 3. 