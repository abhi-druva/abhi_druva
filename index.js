$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar script 

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn .i').toggleClass("active");
    });

    // typing animation script 
    var typed = new Typed(".typing", {
        strings: ["Software Enigneer","Web-Developer","Sql-Developer"],
        typingSpeed: 900,
        backSpeed: 60,
        loop: true
    })
});