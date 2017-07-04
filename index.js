;
(function($){

    let $squareForm = $('form[name=square]');
    let $linearForm = $('form[name=linear]');
    
    // This is slow but has role selector
    $squareForm.on("submit", function(event){});
    $linearForm.on("submit", function(event){});

    console.log($);
    console.log($squareForm);
    console.log($linearForm);

})($)