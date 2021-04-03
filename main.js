$(function(){
  
  // ハンバーガーメニュー
  $('.toggle_btn').on('click', function() {
    if (!$('#header').hasClass('open')) {
      $('#header').addClass('open');
    } else {
      $('#header').removeClass('open');
    }

  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });
});
});  

// ふわっと出る
$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    } else {
      $(this).stop().removeClass("is-show");
    }
  });
});



