"use strict";
console.log("Let's get this party started!");
//no need for jQuery we can add it over html
$("<form id='main'>").appendTo("body");
$('<input id="search" placeholder="search">').appendTo("form");
$(
  '<button id="button" value="search" type="submit"> search </button>'
).appendTo("form");
let $container = $('<div id="container">').appendTo("body");
//axios.get("giphy.com", { parma: { a: 1, b: 2 } });

// make this do less work - less lines
$("form").on("submit", async function (evt) {
  evt.preventDefault();

  let $search = $("#search").val();

  let response = await api($search);
  console.log(response);
  //would be nice to move into the api function.
  let resultImg = response.data.data[0].images.original.url;
  //restructer
  let $img = $(`<img>`).attr("src", resultImg);
  $($img).appendTo("#container");
});

async function api(search) {
  // $("document").ready(mainfunction);
  let response = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { q: search, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
  });
  return response;
}

// update "CAT" to our submit value
// preventDefault()

// 1. get gif (variable.data.data[0].url)
// 2. append to a page (our container)
// 3.
