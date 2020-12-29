$(function(){
     

    // $('.menu__btn').on('click', function(){
    //   $('.menu__list').slideToggle();
    //  });

    //  $('.menu__btn').click(function(event) {
    //    $('.menu__btn,.menu__list').toggleClass('active');
    //    $('body').toggleClass('selector');
    
    //  });
 
    // $('.menu__btn').click(function(event){
    //   $('.menu__btn, .menu__list').toggleClass('active');
    //  });

     
    $('.menu__btn').on('click',function(event){
      $('.menu__btn, .menu, .page__box').toggleClass('active')
     });
    


     var mixer = mixitup('.products__inner-box');

     $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
     $('.quantity').each(function() {
       var spinner = $(this),
         input = spinner.find('input[type="number"]'),
         btnUp = spinner.find('.quantity-up'),
         btnDown = spinner.find('.quantity-down'),
         min = input.attr('min'),
         max = input.attr('max');
 
       btnUp.click(function() {
         var oldValue = parseFloat(input.val());
         if (oldValue >= max) {
           var newVal = oldValue;
         } else {
           var newVal = oldValue + 1;
         }
         spinner.find("input").val(newVal);
         spinner.find("input").trigger("change");
       });
 
       btnDown.click(function() {
         var oldValue = parseFloat(input.val());
         if (oldValue <= min) {
           var newVal = oldValue;
         } else {
           var newVal = oldValue - 1;
         }
         spinner.find("input").val(newVal);
         spinner.find("input").trigger("change");
       });
 
     });


     $('.quantity-button').on('click', function (){
      let summ = $('.quant').val();
      $('.summ').data('quant');
      $('.summ').html('$' + summ);
    });


     let summ = $('.quant').val();
     $('.summ').data('quant');
     $('.summ').html('$' + summ);

});