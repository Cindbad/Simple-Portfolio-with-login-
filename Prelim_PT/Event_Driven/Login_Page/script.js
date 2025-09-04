$(document).ready(function(){
    
    $("form").submit(function(event){
    event.preventDefault()
    window.location.href = "../Homepage/index.html"; 
    })

    $(window).resize(function(){alert("Windows Change size!")});

    $("#password").change(function(){
        if($("#password").val().length < 5){
            alert("Password must be atleast 5 characters");
        }
    });

    $("#email").hover(function() { 
        $("#email").attr("placeholder", "Always put @ in your email");},
    function(){
        $("#email").attr("placeholder", "Input Email Here");
     });

    $("#pass").hover(function(){
        $("#pass").attr("placeholder", "Password must contain alphanumeric characters!")
    ;});

    $("#email").keypress(function(event) {
        if (event.key === " "){
            alert("Spaces are not allowed in email!");
            event.preventDefault();
    }
    });

    $("input").focus(function() { 
        $(this).css("background-color", "#daf3fdff");
    });

    $("input").blur(function() {
       $(this).css("background-color", ""); 
    });

    $(".left h1").click(function(){
       $(".left p").slideToggle("slow");
    });
    
    $(".right").hide().fadeIn(1500);
});
