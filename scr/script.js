// Definition des valeurs dynamiques a parser dans le html
var myAge;
var currentYear = new Date().getFullYear();
var myFullName = 'Thomas JAULGEY';
var myName = 'JAULGEY';
var myFirstName = 'Thomas';
var myClasse = 'TSE FISA DE3';
var nbYearXP = new Date().getFullYear() - 2021;

if(nbYearXP == 1){
  nbYearXP += ' an';
}else{
  nbYearXP += ' ans';
}

$(window).on("load", function (e) {
  $('body').show();
  $('full-name').html(myFullName);
  $('first-name').html(myFirstName);
  $('last-name').html(myName);
  $('current-year').html(currentYear);
  $('classe').html(myClasse);
  $('nb-year-xp').html(nbYearXP);

  var nbImagesTotal = $('.section-list-albums .item-album').length;
  $('.nbPics span').append(nbImagesTotal);
  
  $('#toTop').hide();
  $('.infosbreves span').hide();
  
  $('.member .social #toggle-info').click(function() {
    $('.infosbreves > span').slideToggle();
  });

  $('.item-parameter.toggle-plus').click(function() {
    $('.item-parameter.toggle-plus').hide();
    $('.item-parameter.toggle-minus').show();
    $('.item-album:nth-of-type(n+9)').slideDown('swing');
    $('.item-parameter.city').show();
    $('.item-parameter.cyclisme').show();
    $('.item-parameter.ville').show();
    $('.item-parameter.nature').show();
    $('.item-parameter.all').show();
  });

  $('.item-parameter.toggle-minus').click(function() {
    $('.item-parameter.toggle-minus').hide();
    $('.item-parameter.toggle-plus').show();
    $('.item-parameter.city').hide();
    $('.item-parameter.cyclisme').hide();
    $('.item-parameter.ville').hide();
    $('.item-parameter.nature').hide();
    $('.item-parameter.all').hide();
    $('.item-album.nature').slideDown('swing');
    $('.item-album.cyclisme').slideDown('swing');
    $('.item-album.ville').slideDown('swing');        
    $('.item-album:nth-of-type(n+9)').slideUp('swing');
  });

  $('.item-parameter.all').click(function(){
    $('.item-album.nature').slideDown('swing');
    $('.item-album.cyclisme').slideDown('swing');
    $('.item-album.ville').slideDown('swing');
  });

  $('.item-parameter.city').click(function(){
    $('.item-album.nature').slideUp('swing');
    $('.item-album.cyclisme').slideUp('swing');
    $('.item-album.ville').slideDown('swing');
  });

  $('.item-parameter.cyclisme').click(function(){
    $('.item-album.nature').slideUp('swing');
    $('.item-album.cyclisme').slideDown('swing');
    $('.item-album.ville').slideUp('swing');
  });

  $('.item-parameter.nature').click(function(){
    $('.item-album.nature').slideDown('swing');
    $('.item-album.cyclisme').slideUp('swing');
    $('.item-album.ville').slideUp('swing');
  });
  

  $(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1200);
            }
        }
    });
  });

  //update progressbar on bottom of the page
  function updateProgress(num1, num2){
    var percent = Math.ceil( num1 / num2 * 100 ) + '%';
    document.getElementById('progress').style.width = percent;
  }
  
  window.addEventListener('scroll', function(){
    var top = window.scrollY;
    var height = document.body.getBoundingClientRect().height - window.innerHeight;
    updateProgress(top, height);
  });

  var tailleEcran = $('html').width();

  $(window).scroll(function(){
    if($(document).scrollTop() > 180) {
        if (tailleEcran > 980){
            $('header').css('height','60px');
            $('header').css('line-height','60px');
            $('.logo-stack').css('line-height','60px');
            $('header .icons-pane').css('line-height','60px');
            $('header .menu-title').css('height','60px');
            $(".title-sub-title-first-panel").slideUp('swing');
            $('.contact-modal').css('top', 'calc(50px + 1rem)');
        }
    } else {
      if (tailleEcran > 980){
        $('header').css('height','100px');
        $('header').css('line-height','100px');
        $('.logo-stack').css('line-height','100px');
        $('header .icons-pane').css('line-height','100px');
        $('header .menu-title').css('height','100px');
        $(".title-sub-title-first-panel").slideDown('swing');
        $('.contact-modal').css('top', 'calc(90px + 1rem)');
      }
        
    }
  });

  //toggle modal contact
  $('.icons-pane .fas.fa-envelope.contact').click(function (){
    $('.contact-modal').toggle();
    $('.icons-pane > i.fas.fa-envelope.contact').toggleClass('opened');
  });

 

});

 //defilement parallax des 3 images de bas de page
 $(window).on("load scroll", function() {
  var parallaxDiv = $(".parallax"),
    parallaxQuantity = parallaxDiv.length;
  window.requestAnimationFrame(function() {
    for (var i = 0; i < parallaxQuantity; i++) {
      var currentElement = parallaxDiv.eq(i),
        windowTop = $(window).scrollTop(),
        elementTop = currentElement.offset().top,
        elementHeight = currentElement.height(),
        viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
        scrolled = windowTop - elementTop + viewPortHeight;
      currentElement.css({
        transform: "translate3d(0," + scrolled * -0.30 + "px, 0)"
      });
    }
  });
});
