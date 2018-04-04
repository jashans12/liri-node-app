require("dotenv").config();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent);
const { window } = new JSDOM(`...`);
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
 
    var $ = require("jquery")(window);
});
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// var twitUrl = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2"

// console.log(spotify);

// fetch(twitUrl) // Call the fetch function passing the url of the API as a parameter
// .then((resp) => resp.json())
// .then(function(data) {
//   let posts = data.results;
//   console.log(posts);
// });

var twitURL = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2";
$.ajax({
  url: twitURL,
  method: 'GET'
}).then(function(response) {
  console.log(response);
});