
// secnavbar
let screenHeight = $(window).height();

    $(window).scroll(function(){
        let currentHeight = $(this).scrollTop();
        // console.log(currentHeight);
        if(currentHeight > screenHeight){
           $(".navBar").addClass("sec-navbar");
        }else{
          $(".navBar").removeClass("sec-navbar");
        }
    });


// venobox.js
$(document).ready(function(){
  $('.venoboximg').venobox({
    framewidth : '400px',                            // default: ''
    frameheight: 'auto',                            // default: ''
    border     : '2px',                             // default: '0'
    bgcolor    : '#ffefca',                          // default: '#fff'
    titleattr  : 'data-title',                       // default: 'title'
    numeratio  : true,                               // default: false
    infinigall : true,                               // default: false
    share      : ['facebook', 'twitter', 'download'] // default: []
    }); 
});

//wow.js
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();



