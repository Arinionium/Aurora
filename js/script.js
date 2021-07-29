
$(function () {
    
$( "#header__input" ).on("focus", function() {
  $("#top-bar, .main-part, #header, #header__link, #header__input, .navbar-link, #header__input").addClass("active");
  $(".sign-block-link").css("color", "#000000");
  $("#header__basket").attr("src", "/images/icons/basket-copy-black.svg");
   $("#header__search-icon").attr("src","/images/icons/Fill_1_black.svg");
  
});
  
  $("#header").on("scroll", function () {
    $("#top-bar, .main-part, #header, #header__link, #header__input, .navbar-link, #header__input").removeClass("active");
    $(".sign-block-link").css("color", "#ffffff");
    $("#header__basket").attr("src", "/images/icons/basket-copy.svg");
    $("#header__search-icon").attr("src", "/images/icons/Fill 1.svg");
  });

  const burgerBtn = $('.header__burger');

    burgerBtn.on('click', () => {
        $('.header__burger,.header__content-wrapper').toggleClass('active');
        if ($('.header__burger,.header__content-wrapper').hasClass('active')) {
            $('body').css('overflow', 'hidden');
        }
        else {
             $('body').css('overflow', 'auto');
        }
    });

  
$(".block-link-1").click(function(){
  $(".block-link-1").text($(".block-link-1").text() === 'Sign in' ? 'Hi, <Your name>' : 'Sign in');
  $(".block-link-2").toggle();
  $(".block-link-3").toggle();
  $(".header__center").toggleClass("active");
  $(".header__basket-counter").toggle();
  $(".header__basket").toggleClass("active"); 
});
  
    let header = $('#header');
    let topBar = $('#top-bar')
    
    let headerH = header.innerHeight();
    let scrollPos = $(window).scrollTop();
   
    $(window).on('scroll load', function () {

        scrollPos = $(window).scrollTop();
        if (scrollPos > headerH) {
          header.addClass('fixed');
          topBar.addClass('fixed');
           $("#top-bar, .main-part, #header, #header__link, #header__input, .navbar-link, #header__input").addClass("active");
          $(".sign-block-link").css("color", "#000000");
          $("#header__basket").attr("src", "/images/icons/basket-copy-black.svg");
          $("#header__search-icon").attr("src","/images/icons/Fill_1_black.svg");
        } else {
          header.removeClass('fixed');
          topBar.removeClass('fixed');
          $("#top-bar, .main-part, #header, #header__link, #header__input, .navbar-link, #header__input").removeClass("active");
    $(".sign-block-link").css("color", "#ffffff");
    $("#header__basket").attr("src", "/images/icons/basket-copy.svg");
    $("#header__search-icon").attr("src", "/images/icons/Fill 1.svg");
        }
    });
  

  
  $(".footer__top-part_column").click(function () {
    if ($(".footer__top-part").hasClass("only")) {
      $(".footer__top-part_column").not($(this)).removeClass("active");
    }
    $(this).toggleClass("active");
    })

  });


