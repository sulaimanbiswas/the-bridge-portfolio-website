'use strict';

$( document ).ready(function() {
  //preloader js code
  var preloader = $('.preloader');
  setTimeout(function() {
      preloader.addClass('active');
  }, 500);

});

// menu options custom affix
var fixed_top = $(".header");
$(window).on("scroll", function(){
    if( $(window).scrollTop() > 50){  
        fixed_top.addClass("animated fadeInDown menu-fixed");
    }
    else{
        fixed_top.removeClass("animated fadeInDown menu-fixed");
    }
});

// mobile menu js
$(".navbar-collapse>ul>li>a, .navbar-collapse ul.sub-menu>li>a").on("click", function() {
  const element = $(this).parent("li");
  if (element.hasClass("open")) {
    element.removeClass("open");
    element.find("li").removeClass("open");
  }
  else {
    element.addClass("open");
    element.siblings("li").removeClass("open");
    element.siblings("li").find("li").removeClass("open");
  }
});

const widgetBtn = $('.sidebar-widget .title-btn');
const widgetBody = $('.sidebar-widget__body');

widgetBtn.each(function(){
  $(this).on('click', function(){
    $(this).parent().siblings(widgetBody).slideToggle();
  });
});

const selectMenuItem = $('.select-menu-list > li');
selectMenuItem.each(function(){
  $(this).on('click', function(){
    var el = $(this);
    if (el.hasClass('active')) {
      el.toggleClass('active').siblings().show();
    }else{
      el.toggleClass('active').siblings().hide();
    }
  });
});

// wow js init
new WOW().init();

// lightcase plugin init
$('a[data-rel^=lightcase]').lightcase();

// main wrapper calculator
var bodySelector = document.querySelector('body');
var header = document.querySelector('.header');
var footer = document.querySelector('.footer');
(function(){
  if(bodySelector.contains(header) && bodySelector.contains(footer)){
    var headerHeight = document.querySelector('.header').clientHeight;
    var footerHeight = document.querySelector('.footer').clientHeight;

    // if header isn't fixed to top
    // var totalHeight = parseInt( headerHeight, 10 ) + parseInt( footerHeight, 10 ) + 'px'; 
    
    // if header is fixed to top
    var totalHeight = parseInt( footerHeight, 10 ) + 'px'; 
    var minHeight = '100vh';
    document.querySelector('.main-wrapper').style.minHeight = `calc(${minHeight} - ${totalHeight})`;
  }
})();

// Animate the scroll to top
$(".scroll-top").on("click", function(event) {
	event.preventDefault();
	$("html, body").animate({scrollTop: 0}, 300);
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    boundary: 'window'
  })
});

$('.select2-basic').select2();

$('.datepicker-here').datepicker({
  language: 'en'
});

// action-sidebar js 
const actionSidebar = $('.action-sidebar');
const actionSidebarOpenBtn = $('.action-sidebar-open');
const actionSidebarCloseBtn = $('.action-sidebar-close');

actionSidebarOpenBtn.on('click', function(){
  actionSidebar.addClass('active');
});
actionSidebarCloseBtn.on('click', function(){
  actionSidebar.removeClass('active');
});

/* ==============================
					slider area
================================= */

$('.location-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  arrows: true,
  prevArrow: '<div class="prev"><i class="las la-angle-left"></i></div>',
  nextArrow: '<div class="next"><i class="las la-angle-right"></i></div>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// trip-slider 
$('.trip-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  dots: true,
  infinite: false,
  arrows: false,
  prevArrow: '<div class="prev"><i class="las la-angle-left"></i></div>',
  nextArrow: '<div class="next"><i class="las la-angle-right"></i></div>',
  responsive: [
    {
      breakpoint: 1650,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// testimonial-slider js 
$('.testimonial-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  infinite: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});