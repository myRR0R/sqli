;
(function($){

    const $mainForm = $('form[name=square]');
    const $formSwitcher = $mainForm.find('button[data-form-state]')

    function countAjax(){
        return function(data){
                $.ajax({
                type: "POST",
                dataType: 'json',
                url: data.url,
                data: data
            })
            .fail(function(error){
                $('#status-alert p')
                // #TODO Set queue
                    .removeClass('active')
                    .first('.alert-danger')
                // #TODO Invoke templater
                    .text(error.statusText)
                    .addClass('active')                
            })
            .success(function(data){
                    $('#status-alert p')
                    // #TODO Set queue
                        .removeClass('active')
                        .first('.alert-success')
                    // #TODO Invoke templater
                        .text("Zaebal\' bled D=" + data.d + " X1=" + data.e + " X2=" + data.f)
                        .addClass('active')
            })
        }
    }// countAjax

    function postFromWrapper(form){
        return $(form).serializeArray().reduce(function(prev, curr){
            return $.extend(prev, {[curr.name]: curr.value})
        },{})
    }; // postFormWrapper

    $mainForm.on("submit", function(event){
        event.preventDefault();
        postFormWrapper(this)
    }); // form.submit

})($)