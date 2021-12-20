// Definition des valeurs dynamiques a parser dans le html
var myAge;
var diff_ms = Date.now() - new Date(2000, 06, 15).getTime();
var age_dt = new Date(diff_ms); 
myAge= Math.abs(age_dt.getUTCFullYear() - 1970);
var currentYear = new Date().getFullYear();
var myFullName = 'Thomas JAULGEY';
var myName = 'JAULGEY';
var myFirstName = 'Thomas';
var myClasse = 'TSE FISA DE3';

$(window).on("load", function (e) {
  $('body').show();
  $('age').html(myAge);
  $('full-name').html(myFullName);
  $('first-name').html(myFirstName);
  $('last-name').html(myName);
  $('current-year').html(currentYear);
  $('classe').html(myClasse);

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

  //parallax scroll des 3 images de bas de page
  $(window).on("load scroll", function() {
    var parallaxElement = $(".parallax"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function() {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.25 + "px, 0)"
        });
      }
    });
  });
  
  //switch icon (up/down page) on scroll
  $(document).scroll(function() {
    var y = $(this).scrollTop();
      if(y > 70){
          $('#toTop').show();
          $('#toBottom').hide();
      }
      else{
          $('#toTop').hide();
          $('#toBottom').show();
      }
  });

  //toggle text on personal info
  $(function() {
    $('.showmoreButton').on('click', function() {
        $('.showmore').slideToggle("fast");
        $(this).text($(this).text() == '...voir moins...' ? '...voir plus...' : '...voir moins...');
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

});




