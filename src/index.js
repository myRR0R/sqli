import { cp, trace } from 'src/fpUtils';

;
(function($){

// jQ CASHING:
    const $mainForm = $('#count-form');
    const $formSwitcher = $mainForm.find('button[data-form-state]')
    const $statusAlerts = $('#status-alert p');

    const succesMessage = (resp) => ({})

    const errorMessage = (error) => ({})

    const pushAlert = element =>
        message => {
            $statusAlerts
                .removeClass('.active')
                .first(element)
                .text(message)
                .addClass(active)
    }; // pushAlerts

// KIND OF SERVICE:
// i think this can be the $.post method;
    const ajaxPost = ( errorHandler, successHandler ) =>
        ( data ) => {
            $.post( data.url, data )
                .fail( errorHandler )
                .success( successHandler )
    }; // ajaxPost

// LISTENERS:
    $mainForm.on("submit", cp(
        (event) => event.preventDefault(),
        (event) => event.target,
        serializeObject,
        ajaxPost(
                cp( pushAlert('.alert-warning'), errorMessage ),
                cp( pushAlert('.alert-success'), succesMessage )
            )
        // #TODO Better use cps;
    )); // form.submit

})($); // Yes! IIEF, no questions more...