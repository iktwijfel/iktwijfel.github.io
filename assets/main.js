function spinWheel(sfx){
    const TOT_ROTATE            = 360;
    const MIDDLE_GROEN_ROTATE   = (360/14) * 3

    var random_times_turning    = Math.floor(Math.random() * 3) + 3;
    var turning_degrees         = -(TOT_ROTATE * random_times_turning) + MIDDLE_GROEN_ROTATE;
    sfx.play();
    //indicator rotation
    $("#indicator").animate({ borderSpacing: 20 },{
        step: function(now,fx){
            $(this).css('transform', 'rotate('+now+'deg)');
        }, duration: 500
    });
    //rad rotation
    $("#radimg").animate({ borderSpacing: turning_degrees }, {
        step: function(now, fx){
            $(this).css('transform', 'rotate('+now+'deg)');
        },
        duration: 8000,
        complete: function(){
            //put indicator back to normal state
            $("#indicator").animate({ borderSpacing: 0 },{
                step: function(now,fx){
                    $(this).css('transform', 'rotate('+now+'deg)');
                },
                duration: 200,
                complete: function(){
                    //change wheel image
                    $("#radimg").fadeOut(0, function() {
                        $("#radimg").attr("src","assets/groen-rad.png");
                    }).fadeIn(200);
                    //show and hide right elements
                    $("#draai-btn").hide();
                    $("h1").hide();
                    $("#logoGroen").fadeIn();
                    $("#result").fadeIn();
                    //change background
                    $("body").removeClass("grey-bg");
                    $("body").addClass("groen-bg");
                }
            });
            
        }
    });
};

$(document).ready(function(){
    var audio = new Audio('assets/ratelen.mp3');
    setTimeout(spinWheel(audio), 1000);
    $("#lees-meer").click(function(){
        window.location.replace("https://www.groensintniklaas.be/verkiezingen")
    });
});
