$('document').ready( ()=>{
    'use strict';
//code here
let techURL = 'https://softspotdatabase.herokuapp.com/tech';

$.get(techURL)
.then(addTechProfile)

let reviewsURL = 'https://softspotdatabase.herokuapp.com/reviews';

$.get(reviewsURL)
.then(addReview)

$.get(techURL)
.then(addRelatedTech)

});

function addTechProfile(data) {
  $('#tech-name').append(data[0].name);
  if (data[0].category === 'TE') {
    $('#category-name').append('Text Editor');
  }
  $('#description').append(data[0].description);
}

function addReview(data) {
  for (var i=0; i<data.length; i++) {
    if (data[i]['tech_name']  === 'Atom') {
      $('#reviews').append(data[i].body);
    }
  }
}

function addRelatedTech(data) {
  for (var i=0; i<data.length; i++) {
    if (data[i]['category']  === 'TE') {
      $('#related-tech').append(data[i].name);
    }
  }
}
