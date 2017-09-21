$( 'document' ).ready( () => {
    'use strict';

//GLOBAL VARIABLES **********************************************************************************************************************************************************************

let $editTechReviewForm = $( '#$editTechReviewForm' );
let $techEditTitle = $( '#techEditTitle' );
let $techEditRating = $( "input[type='radio']" );
let $techEditText = $( '#techEditText' );

//FUNCTIONS **********************************************************************************************************************************************************************

//func to populate values of edit review form based on review being edited
function  createEditReviewFormValues (reviewObject) {


        $techEditTitle.val(reviewObject.title);
        $techEditRating.attr('checked', true); reviewObject.rating);
        $techEditText.val(reviewObject.body);
        body: $techAddText.val(),

        rating: $( "input[type='radio']:checked" ).val(),
        username_id: 1,
        tech_id: 1,
    }

}


// EVENT/CLICK HANDLERS **********************************************************************************************************************************************************************


//AJAX CALLS **********************************************************************************************************************************************************************




});
