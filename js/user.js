$( 'document' ).ready( () => {
    'use strict';

    //GLOBAL VARIABLES **********************************************************************************************************************************************************************

    // jQuery Variables
    let $profileContainer = $( '#userProfile' );
    let $reviewContainer = $( '#section_UserReview-Container' );
    let $proSkillContainer = $( '#proSkills' );

    let $skillId = $( '#skillId' );

    // JAVASCRIPT vars
    const userURL = 'https://softspotdatabase.herokuapp.com/users';
    const technologyURL = 'https://softspotdatabase.herokuapp.com/tech';
    let techDataArray;
    var allReviews;
    var allSkills;






    //FUNCTIONS **********************************************************************************************************************************************************************



    // add user Info to Profile Section
    function addUserInfo( userId ) {
        ///BUG CANNOT GET USER PROFILE INFO
        $.get( `${userURL}/byId?id=${userId}`, function ( user ) {
            let thisUser = user;

        } ).then( ( thisUser ) => {
            //get user skill endorsement...need route for this
            thisUser.forEach( ( user ) => {

                // BUG NEED TO ADD ROUTE TO DB TO GET endorsements
                let endorsements = Math.floor( Math.random() * 50 + 1 );
                // set below vars to be values from thisUser Object
                let userImage = user.img;
                let userName = user.name;
                let userBio = user.bio;

                let profile = `<div class="tile is-parent is-info">
                <article class="tile is-child is-info box">
                    <div class="columns">
                        <div class="column is-2">
                            <div class="image is-128x128 avatar">
                                <img id="userImage" src="${userImage}">
                            </div>
                        </div>
                    <div class="column name">
                        <p><span id="userName" class="title is-bold">${userName}</span>
                        </p>
                        <p id="userBio" class="tagline">${userBio}</p>
                    </div>
                    <div class="column is-2 followers has-text-centered">
                        <p id="userEndorsTotal" class="title is-bold">${endorsements}</p>
                        <p class="stat-key">Endorsements</p>
                    </div>
                </div>
            </article>
        </div>`;

                $profileContainer.append( profile );
            } );
        } );
    }

    // add user Reviews  to Review Section
    function addUserReviews( userId ) {

        $.get( `${userURL}/${userId}/reviews`, function ( reviews ) {

            allReviews = reviews;
        } ).then( allReviews => {

            allReviews.forEach( ( review ) => {
                let techN;
                /// match each review.tech_id to a techDataArray id and use its name
                techDataArray.forEach( ( tech ) => {
                    let techId = tech.id;
                    let techName = tech.name;
                    if ( review.tech_id === techId ) {
                        techN = techName;
                    }
                } );

                // let tech = review.tech_id;
                let title = review.title;
                let body = review.body;
                let rating = review.rating;
                let reviewEach =
                `<div class="tile is-parent is-info review">
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
            } );
        } );
    }


    // add Pro Skills to Skills Section

    function addUserSkills( userId ) {
        $.get( `${userURL}/${userId}/skills`, function ( skills ) {
            allSkills = skills;
        } ).then( allSkills => {

            allSkills.forEach( ( skill ) => {
                let name = skill.name;
                let id = skill.id;

                //revise this section to match html
                let skillEach =
                `<div class="tile is-parent is-info">
                    <article class="tile is-child is-info box"><div class="control">
                        <div class="tags has-addons">
                            <span id="skillId" class="tag is-info" data-skillId="${id}">${name}</span>
                            <a class="tag "><i class="fa fa-plus" aria-hidden="true"></i></a>
                        </div>
                    </article>
                </div>`;

                $proSkillContainer.append( skillEach );
            } );
        } );

    }

    // EVENT/CLICK HANDLERS **********************************************************************************************************************************************************************


    //AJAX CALLS **********************************************************************************************************************************************************************

    // get all tech data objects/info to use
    $.get( technologyURL, ( techData ) => {
        techDataArray = techData;
    } ).then( () => addUserReviews( currentUserId ) );

    //Function CALLS *********************************************************************************************************************************************************************

    addUserInfo( currentUserId);
    addUserSkills( currentUserId );

} );
