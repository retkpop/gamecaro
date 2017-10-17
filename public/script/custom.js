$(document).ready(function(){
    $("#submitLogin").on("click", function(){
        var username = $("#userNameLg").val();
        var password = $("#passwordLg").val();
        $.ajax({
            url: "/singin",
            cache: false,
            type: "POST",
            data: { "username": username, "password": password},
            success: function (datas) {
                console.log(datas);
                if (datas.Code == 200) {
                    
                } else {
                   
                }
            }
        });
    });
});