/* ----------------------------------------------------------------------------------------
* Author        : Rai Theme
* Template Name : MARK LOPEZ - Personal Portfolio Html5 Template
* File          : MARK LOPEZ main JS file
* Version       : 1.0
* ---------------------------------------------------------------------------------------- */





/* INDEX
----------------------------------------------------------------------------------------

01. Preloader js

02. change Menu background on scroll js 

03. Navigation js

04. Smooth scroll to anchor

05. Portfolio js

06. Magnific Popup js

07. Testimonial js

08. client js

09. Ajax Contact Form js

11. Mailchimp js

-------------------------------------------------------------------------------------- */




/*-----------------------------------------------------------------------------------------------*
*       01. IMPORTS Jquery Plugins                                                               *
*------------------------------------------------------------------------------------------------*/
            import mixitup from 'mixitup';//for portfolio section
            import 'owl.carousel';//for service section


/*-----------------------------------------------------------------------------------------------*
*       02. Preloader                                                                                                                         *
*-----------------------------------------------------------------------------------------------*/
            $(window).on( 'load', function(){
                            
                //hide preloader icon
                $(".preloader .preloader-icon").fadeOut("slow", function(){

                    // slide left preloader div after and reveal header and home contents
                    $(".preloader").addClass("preloader-animate slideOutLeft fast").one("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function() { 

                        //==== home intro animation ======
                        $("header").addClass(" fadeIn slower");
                        $(".home h1").addClass(" flipInX slow");
                        $(".home p").addClass("slideInDown slower");
                        $(".home a").addClass("slideInUp");
                        $(".home .home-pic").addClass("slideInUp slower");
                        //============= END =========================
                    });
                });

            }); // $(window).on end
            


            $(document).ready(function(){

                // IMPORTANT - always set scroll postion top to "0" whenever page refress to work with "scroll reveal contents" later
                $(this).scrollTop(0); 

                /*------------------------------------------------------------------------------------------------------------------------------------------------*
                *        03. scroll spy  (Bootstrap's scroll spy, it will add "active" class to the nav-link when scroll position rich to it's related id element)                                      *
                *-------------------------------------------------------------------------------------------------------------------------------------------------*/    
                            $('body').scrollspy({
                                target: '.nav-container',
                                offset: 100
                            });

                /*------------------------------------------------------------------------------------------*
                *        04. change Header background on scroll                                             *
                *-------------------------------------------------------------------------------------------*/
                                $(window).on('scroll', function () {
                                    var header = $('header');
                                    if ($(window).scrollTop() > 50) {
                                        header.addClass('bg-white shadow-sm');
                                    } else {
                                        header.removeClass('bg-white shadow-sm');
                                    }
                                });
                           
                /*-------------------------------------------------------------------------*
                *       05. Smooth scroll to anchor                                       *
                *-------------------------------------------------------------------------*/
                            // Add smooth scrolling to all links except collapse link
                            $("a").on('click', function(event) {
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

                /*--------------------------------------------------------------------------------------------*
                *       06. (SMALL SCREEN) Burger menu icon open/close AND Navigation menu slide in/out                                *
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

                /*---------------------------------------------------------------------------------------------------------------------------*
                *           07. scroll reveal contents                                                                                           *
                *-----------------------------------------------------------------------------------------------------------------------------*/
            
                            $(window).on('scroll', function ()  { 

                                //ABOUT section 
                                    $("#about .animated").each(function(){
                                        if (isScrolledIntoView($(this)) === true) {
                                            $(this).addClass("slideInUp fast");                                
                                        }
                                    });  

                                    // skills progress bar animation
                                    $(".skill .skill-per").each(function(){
                                        if (isScrolledIntoView(this) === true) {
                                            //change width of the element based on the elemet's attribute "per"
                                            $(this).css("width", $(this).attr("per"));
                                            $(this).css("opacity", "1");
                                        }
                                    });  

                                //EXPERIENCE section 
                                    $("#experience .animated").each(function(){
                                        if (isScrolledIntoView($(this)) === true) {
                                            $(this).addClass("slideInUp");                                
                                        }
                                    });  

                                // PORTFOLIO section
                                    // content reveal
                                    $("#portfolio .animated").each(function(){
                                        if (isScrolledIntoView($(this)) === true) {

                                            $(this).addClass(" slideInUp")
                                        }
                                    });

                                // SERVICES section
                                    $(".services .animated").each(function(){
                                        if (isScrolledIntoView(this) === true) {
                                            $(this).addClass(" slideInUp")
                                        }
                                    });

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

                                // Element position detect function 
                                // checks if element is scrolled into view 
                                function isScrolledIntoView(elem) {
                                    //top scroll value
                                    var winViewTop = $(window).scrollTop();
                                    //bottom scroll vlue
                                    var winViewBottom = winViewTop + $(window).height();
                    
                                    var elemTop = $(elem).offset().top;
                                    
                                    return ( (winViewBottom >= elemTop));   
                    
                                }
                            });


//         /*----------------------------------------------------------------------------------------------------------------------------*
//         *       06. Contact info show/hide on lick                                                                                    *
//         *-----------------------------------------------------------------------------------------------------------------------------*/

//                 $("#contact .card").on("click", function () {
//                     $(this).children(".icon").toggleClass("icon-active");
//                 });
                



        /*  ---------------------------------------------------------------------------------------------------------------------------  *
         *          Portfolio                                                                                                            *
         *  ----------------------------------------------------------------------------------------------------------------------------  */
                        var config = $('.portfolio-items');
                        var mixer = mixitup(config);
                       
                        











        }); // $(document).ready end
        





//     $(document).ready(function(){
        

 
 

                
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