// Yes, this should be as jQ method/plugin,
// but i'm too lazy
export const serializeObject = (form) => {
    return $(form).serializeArray().reduce(function(prev, curr){
        return $.extend(prev, {[curr.name]: curr.value})
    },{})
}; // postFormWrapper