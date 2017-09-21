$( 'document' ).ready( () => {
    'use strict';

//GLOBAL VARIABLES **********************************************************************************************************************************************************************

// jQuery Variables
let $profileContainer = $('#userProfile');
let $reviewContainer = $("#section_UserReview-Container");

// JAVASCRIPT vars
const userURL = 'https://softspotdatabase.herokuapp.com/users';
const technologyURL = 'https://softspotdatabase.herokuapp.com/tech';
let techDataArray;
var allReviews;
let currentUserId;




//FUNCTIONS **********************************************************************************************************************************************************************

// add user Info to Profile Section
function addUserInfo (userId) {
    ///BUG CANNOT GET USER PROFILE INFO
$.get(`${userURL}/${userId}`, function (user) {

let thisUser = user;
console.log(thisUser);


}).then( (thisUser)   =>{
    //get user skill endorsement...need route for this
    let endorsements;
    // set below vars to be values from thisUser Object
    let userImage = thisUser.img;
    let userName= thisUser.name;
    let userBio= thisUser.bio;



    let profile = `<div class="columns">
        <div class="column is-2">
            <div class="image is-128x128 avatar">
                <img id="userImage" src="${userImage}">
            </div>
        </div>
        <div class="column name">
            <p>
                <span id="userName" class="title is-bold">${userName}</span>
            </p>
            <p id="userBio" class="tagline">T${userBio}</p>
        </div>
        <div class="column is-2 followers has-text-centered">
            <p id="userEndorsTotal" class="stat-val">${endorsements}</p>
            <p class="stat-key">Endorsements</p>
        </div>
    </div>`;

    $profileContainer.append(profile);

});

}

// add user Reviews  to Review Section
function addUserReviews( userId ) {

    $.get(`${userURL}/${userId}/reviews`, function (reviews) {

        allReviews = reviews;

    }).then(allReviews => {

        allReviews.forEach((review)=>{
            let techN;
        /// match each review.tech_id to a techDataArray id and use its name
            techDataArray.forEach((tech)=>{
                let techId= tech.id;
                let techName = tech.name;
                if (review.tech_id === techId) {
                    techN = techName;
                }
            });

            // let tech = review.tech_id;
            let title = review.title;
            let body = review.body;
            let rating =review.rating;
            let reviewEach = `<div class="tile is-parent is-info review">
                <article class="tile is-child is-info box">
                    <p class="title">${techN}</p>
                    <p class="subtitle">${title}</p>
                     <p class="subtitle"Rating:${rating}</p>
                    <div class="content">
                        <p>${body}.</p>
                    </div>
                </article>
            </div>`;

            $reviewContainer.append( reviewEach );
        });
    });
}


// EVENT/CLICK HANDLERS **********************************************************************************************************************************************************************


//AJAX CALLS **********************************************************************************************************************************************************************

// get all tech data objects/info to use
$.get(technologyURL, (techData)=>{
    techDataArray = techData;
}).then(() => addUserReviews(5));

//Function CALLS **********************************************************************************************************************************************************************

addUserInfo(2);


});
