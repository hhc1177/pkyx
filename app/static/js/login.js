/**
 * Created by tonnie on 15/10/25.
 */
$(function(){
       $("#login").on({
           click: function(ev) {
               $('.ui.modal').modal('show');
           }
       });
        $("#lg_form").on({
            submit: function(ev) {
                ev.preventDefault();
                $.ajax({
                    url: "/users/login",
                    type: "POST",
                    data: $(this).serialize(),
                    beforeSend: function(xhr) {
                        $('.message').hide();
                    },
                    success: function(resp) {
                        if(resp.status == true) {
                            $("#success").html("<p>"+resp.reason+"</p>").show();
                            $("#sign_in").addClass("loading");
                            setTimeout(function(){
                                window.location.href = resp.redirect_url;
                            }, 1000);
                        } else {
                            $("#error").html("<p>"+resp.reason+"</p>").show();
                        }
                    }.bind(this),
                    error: function(xhr, error, exp) {

                    }
                })
            }
        });
    });