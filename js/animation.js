var SlideUpAnimate = function(duration, callback) {
    var $element = $(".slide-up");
    var startPosition = $(window).scrollTop() + $(window).height() + $element.height();
    var finishPosition = $element.position().top;
    $element.css("top", startPosition + "px").show().animate({
        top: finishPosition + "px"
    }, duration, callback);
};

var SlideDownAnimate = function(duration, callback) {
    console.log("check")
    var $element = $(".slide-down");
    var finishPosition = $(window).scrollTop() + $(window).height() + $element.height();
    var startPosition = $element.position().top;
    $element.css("top", startPosition + "px").animate({
        top: finishPosition + "px"
    }, duration, function() {
        $element.hide();
        callback();
    });
};