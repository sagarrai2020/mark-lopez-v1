(function($) {
    'use strict';


    //scroll spy to change nav link color when scroll rich to the cotent div
    $('body').scrollspy({
        target: '.nav-container',
        offset: 100
    });




})(jQuery);


// (function($) {

//     'use strict';

//     /*-------------------------------------------------------------------------*
//      *                  01. Preloader js                                       *
//      *-------------------------------------------------------------------------*/
//         $(window).on( 'load', function(){
            
//             //hide preloader icon
//             $(".preloader .preloader-icon").fadeOut("slow", function(){

//                     // slide left preloader div after and reveal header and home contents
//                     $(".preloader").addClass("preloader-animate slideOutLeft fast").one("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function() { 

//                         //==== home intro animation ======
//                         $("header").addClass(" fadeIn slower");
//                         $(".home h1").addClass(" flipInX slow");
//                         $(".home p").addClass("slideInDown slower");
//                         $(".home a").addClass("slideInUp");
//                         $(".home .home-pic").addClass("slideInUp slower");
//                         //============= END =========================
//                     });
//             });

//         }); // $(window).on end


//     $(document).ready(function(){
        

//         //always scroll the page to top when page refress (IMPORTANT) this will impact the scroll reveal content animation
//         $(this).scrollTop(0); 
        

        /*-------------------------------------------------------------------------*
         *             02. change Header background on scroll                         *
         *-------------------------------------------------------------------------*/
                    $(window).on('scroll', function () {
                        var header = $('header');
                        if ($(window).scrollTop() > 100) {
                            header.addClass('bg-white shadow-sm');
                        } else {
                            header.removeClass('bg-white shadow-sm');
                        }
                    }); // $(window).on('scroll' end
                        
    
        /*--------------------------------------------------------------------------------------------*
         *          03. (SMALL SCREEN) Burger icon open/close AND Navigation menu slide in/out                                *
         *---------------------------------------------------------------------------------------------*/
        
                $(".burger-container").on("click", function () {                    
                    //Burger icon open/close
                    burgerIconToggle();
                    //Navigation menu slide in/out
                    navToggle();
                });

                //Burger icon open/close
                function burgerIconToggle() {
                    $(".burger-menu-icon").toggleClass("active-burger-menu-icon");
                }
        
                //Navigation menu slide in/out
                function navToggle() {
                    //element
                    var $this = $(".nav-container");
                    var $thisList = $(".nav-item");   
                    //check class             
                    var isSlideIn = $this.hasClass("slideInRight");
                    //condition
                    if (isSlideIn){
                        $this.addClass("slideOutRight");
                        $this.removeClass("slideInRight");
                        //animate nav list item
                        $thisList.each(function(){
                            $(this).removeClass(" slideInRight");
                        });           
                    }else{
                        $this.removeClass("slideOutRight");
                        $this.addClass("slideInRight");
                        //animate list item
                        $thisList.each(function(index, elem){
                            var animationDelay = "."+index+"s";
                            $(elem).addClass(" slideInRight");
                            $(elem).css("animation-delay", animationDelay);
                        });
                    }
                    
                    // //add basic slidein/out classe to the element
                    $this.addClass("active-nav-container ");
                    $this.toggleClass("nav-container-border");
                    $thisList.addClass("active-nav-item");
                
                }
                
                // Close navbar even when click on navbar links or outside of navbar while navbar is on open state
                $("section, .nav-link").on("click", function () {
                    //selector
                    var $this = $(".nav-container");       
                    // var $thisList = $(".nav-container li");
                    //check if nav is opened
                    var isNavOpen = $this.hasClass("slideInRight");
                    //condition
                    if(isNavOpen) {
                        burgerIconToggle();
                        navToggle();
                    }       
                });
                           
    
        /*-------------------------------------------------------------------------*
         *       04. Smooth scroll to anchor                                       *
         *-------------------------------------------------------------------------*/
                // Add smooth scrolling to all links except collapse link
                $("a.nav-link").on('click', function(event) {
                    // condition
                    if (this.hash !== "") {
                        // Prevent default anchor click behavior
                        event.preventDefault();
                        // Store hash
                        var hash = this.hash;
                        // The number (600) specifies the number of milliseconds it takes to scroll to the specified area
                        $('html, body').animate({
                            scrollTop: $(hash).offset().top
                        }, 600, function(){
                            // Add hash value to URL when done scrolling (default click behavior)
                            window.location = hash;     
                        });
                    }
                });   

                
//         /*---------------------------------------------------------------------------------------------------------------------------*
//         *        05. scroll reveal contents                                                                                           *
//         *-----------------------------------------------------------------------------------------------------------------------------*/
    
//                 $(window).on('scroll', function ()  { 

//                     //ABOUT section 
//                         //content reveal
//                         $("#about .animated").each(function(){
//                             if (isScrolledIntoView($(this)) === true) {
//                                 $(this).addClass("slideInUp slow");                                
//                             }
//                         });   

//                         // skills progress bar animation
//                         $(".skill .skill-per").each(function(){
//                             if (isScrolledIntoView(this) === true) {
//                                 //change width of the element based on the elemet's attribute "per"
//                                 $(this).css("width", $(this).attr("per"));
//                             }
//                         });

//                     // SERVICES section
//                         // content reveal
//                         $("#services .animated").each(function(){
//                             if (isScrolledIntoView($(this)) === true) {

//                                 $(this).addClass(" slideInUp slow")
//                             }
//                         });

//                     // PROJECTS section
//                         $(".projects h2").each(function(){
//                             if (isScrolledIntoView(this) === true) {
//                                 $(this).addClass(" bounce")
//                             }
//                         });

//                         // portfolio image animation
//                         $("#projects .card").each(function(){
//                             if (isScrolledIntoView(this) === true) {
//                                 // animate all img
//                                 $(this).addClass(" slideInUp slow")
//                                 $(this).children("img").addClass("slideInDown slow")
//                             }
//                         });

//                     // CONTACT section
//                         $(".contact h1").each(function(){
//                             if (isScrolledIntoView(this) === true) {
//                                 $(this).addClass(" slideInUp slow")
//                             }
//                         });

//                         $(".contact p").each(function(){
//                             if (isScrolledIntoView(this) === true) {
//                                 $(this).addClass(" slideInUp slow")
//                             }
//                         });

//                         $(".contact .card").each(function(){
//                             if (isScrolledIntoView(this) === true) {
//                                 $(this).addClass(" slideInUp")
//                             }
//                         });

//                         // Element position detect function 
//                         // checks if element is scrolled into view 
//                         function isScrolledIntoView(elem) {
//                             //top scroll value
//                             var winViewTop = $(window).scrollTop();
//                             //bottom scroll vlue
//                             var winViewBottom = winViewTop + $(window).height();
            
//                             var elemTop = $(elem).offset().top;
                            
//                             return ( (winViewBottom >= elemTop));   
            
//                         }
//                 });


//         /*----------------------------------------------------------------------------------------------------------------------------*
//         *       06. Contact info show/hide on lick                                                                                    *
//         *-----------------------------------------------------------------------------------------------------------------------------*/

//                 $("#contact .card").on("click", function () {
//                     $(this).children(".icon").toggleClass("icon-active");
//                 });
                
       
    
//     }); // $(document).ready end   


// })(jQuery);