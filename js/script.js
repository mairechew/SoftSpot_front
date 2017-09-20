$('document').ready( () => {
    'use strict';
//code here
let reviewsURL = 'https://softspotdatabase.herokuapp.com/reviews';

$.get(reviewsURL)
.then(addMainReviews)


// $('.box-trending').slick();

});

function addMainReviews(data) {
  let source   = $("#review-feed-template").html();
  let template = Handlebars.compile(source);
  let context = {reviews: data};
  let html    = template(context)
  $('#review-box').append(html);
}
