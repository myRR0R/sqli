function linear_equation() {
  var datal = {
      g: document.linear.linear_g.value,
      h: document.linear.linear_h.value
  }
  $.ajax ({
    url:"/dol",
    data: datal,
    method: "POST",
    dataType: 'json',
    error: function (errData) {
        console.error(errData);
    },
    success: function(resp) {
        console.log(resp);
        $('#x').text(resp.x);
    }
})
}