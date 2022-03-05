$(document).ready(function () {

    $('.navbar-nav .nav-item').click(function(){
        $('.navbar-nav .nav-item').removeClass('active');
        $(this).addClass('active')
    })
  $(".navbar-nav .nav-link").click(function () {
    //$(this).parent().addClass("act").siblings().removeClass("act");
    $("body, html").animate(
      {
        // scrollTop = divId.offset().top
        scrollTop:
          $("#" + $(this).data("target")).offset().top -
          $(".navbar").innerHeight(),
      },
      400
    );
  });
});
