// main.js

$.get('nav.html',function(response){ 
    $('#nav').html(response); 


    // If user is logged in
    if (localStorage.getItem("username")){
        var username = localStorage.getItem("username");
        console.log(username);
        $("#username_view").html(username);

        $("#logout").click(function(){
            localStorage.removeItem("username");
            window.location.href = "login.html";
        });
    }

});
