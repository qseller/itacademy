$(document).ready(function(){
  
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
        });
          
        $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
  
});

$('body').on('input', '#phone', function(){
	this.value = this.value.replace(/[^0-9]/g, '');
});

$('body').on('input', '#name', function(){
	this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');
});

$("#cheks").click(function() {
  if (($(this).prop("checked"))) {
    $("#dis").removeAttr("disabled");
  } else {
    $("#dis").attr("disabled", "disabled");
  }
})

$("#cheksOne").click(function() {
    if (($(this).prop("checked"))) {
      $("#disOne").removeAttr("disabled");
    } else {
      $("#disOne").attr("disabled", "disabled");
    }
  })

$("#cheksFast").click(function() {
    if (($(this).prop("checked"))) {
      $("#disFast").removeAttr("disabled");
    } else {
      $("#disFast").attr("disabled", "disabled");
    }
  })
