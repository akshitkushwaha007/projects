$(document).ready(function(){
   
    // For sticky navigation
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    },{
        offset: '80px;'
    });
    
    
    
    
    // Scroll on buttons
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    

    
    // Scroll to cities
    $('a[href="#cities"]').click(function(){
        $('html, body').animate({scrollTop: $('#cities').offset().top}, 1000);
    });
    
    
    
    // Scroll to features
    $('a[href="#features"]').click(function(){
        $('html, body').animate({scrollTop: $('#features').offset().top}, 1000);
    });
    
    
    
    // Scroll to works
    $('a[href="#works"]').click(function(){
        $('html, body').animate({scrollTop: $('#works').offset().top}, 1000);
    });
    
    
    
    // Scroll to plans
    $('a[href="#plans"]').click(function(){
        $('html, body').animate({scrollTop: $('#plans').offset().top}, 1000);
    });
    
    
    
    // Animation to scroll
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    
    // Mobile nav
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
    /* Maps */
    var map = new GMaps({
      div: '.map',
      lat: 28.5747441,
      lng: 77.01,
        zoom: 17
    });
    
    map.addMarker({
      lat: 28.5747441,
      lng: 77.3538323,
      title: 'Noida',
      infoWindow: {
          content: '<p>Our Noida HQ</p>'
        }
    });
    
    /*map.addMarker({
      lat: 28.5348131,
      lng: 77.2040607,
      title: 'Delhi',
      infoWindow: {
          content: '<p>Our New Delhi HQ</p>'
        }
    });*/
    
});




