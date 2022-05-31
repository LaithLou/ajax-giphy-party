"use strict";
console.log("Let's get this party started!");

$("<form id='main'>").appendTo("body");
$('<input id="search" placeholder="search">').appendTo("form");
$('<input id="button" value="search" type="button">').appendTo("form");
let $container = $('<div id="container">').appendTo("body");
//axios.get("giphy.com", { parma: { a: 1, b: 2 } });

$('#main').on('submit', function(){

  async function api() {
    let response = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: { q: "CATS", api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
    });
    return response;
  }


  let $search = $("#search").val();

  })



})

async function api() {
  let response = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { q: "CATS", api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
  });
  return response;
}
