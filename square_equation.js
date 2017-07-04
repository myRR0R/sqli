function square_equation() {
  var datas = {
      a: document.square.square_a.value,
      b: document.square.square_b.value,
      c: document.square.square_c.value
  } 
  var sol_s = document.getElementById("square_sol_s");
  $.ajax ({
    url:"/dos",
    data: datas,
    method: "POST",
    dataType: 'json',
    error: function (errData) {
        console.error(errData);
    },
    success: function(resp) {
        console.log(resp);
        $('#discr').text(resp.d);
        $('#x1').text(resp.e);
        $('#x2').text(resp.f);
    }
})
//.done(function(resp){console.log(resp);})
//.fail(function(err){console.error(err);})
}