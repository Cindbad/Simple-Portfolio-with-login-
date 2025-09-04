$(document).ready(function(){
    
    $("form").submit(function(event){
    alert("Account Created!");
    event.preventDefault()
    window.location.href = "../Login_Page/index.html"; 
    })

    $(window).resize(function(){alert("Windows Change size!")});

    $("#password").change(function(){
        if(this.value.length < 5){
            alert("Password must be atleast 5 characters");
        }
    });

    $("input").focus(function() {
    $(this).css("background-color", "#daf3fdff");
    });

    $("input").blur(function() {
     $(this).css("background-color", ""); 
    });

});
