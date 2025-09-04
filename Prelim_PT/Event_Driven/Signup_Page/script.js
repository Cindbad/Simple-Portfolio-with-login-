$(document).ready(function(){
    
    $("form").submit(function(event){
    alert("Account Created!");
    event.preventDefault()
    window.location.href = "../Login_Page/index.html"; 
    })

    $(window).resize(function(){alert("Windows Change size!")});

    $("#email").hover(function() { 
        $("#email").attr("placeholder", "Always put @ in your email");},
    function(){
        $("#email").attr("placeholder", "Input Email Here");
     }
    );

     $("#email").keypress(function(event) {
        if (event.key === " "){
            alert("Spaces are not allowed in email!");
            event.preventDefault();
    }
    });

    $("#password").hover(function(){
        $("#password").attr("placeholder", "Password must contain alphanumeric characters!")
    ;});


    $("#password").change(function(){
        if($("#password").val().length < 5){
            alert("Password must be atleast 5 characters");
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
