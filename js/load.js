setTimeout(function() {
    $('#loader').addClass('loaded');
    $('#loaderlabel').fadeOut(1000);
    var colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#f1c40f', '#e67e22', '#e74c3c', '#f39c12', '#d35400', '#c0392b'];
    $('.block').each(function(i, obj) {
        var random_color = colors.splice(Math.floor(Math.random() * colors.length),1)[0];
        $(this).css("background-color", random_color);
    });
    setTimeout(function() {
        var width = $('#loader').width();
        var count = 0;
        for(var i = 0; i < 4; i++){
            for(var j = 0; j < 4-i; j++){
                $('.block').eq(count).css("visibility", "visible").css("top", width*i+"px").css("left", width*j+"px").delay(2000);
                count++;
            }
        }
        $('.parallax').css("overflow-y", "scroll").css("overflow-x","hidden");
        $('#page1base').css("background-color", "#112233");
        $('#intro').hide().delay(2000).fadeIn(1000)
    }, 2000);
}, 2000); 