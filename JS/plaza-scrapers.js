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




