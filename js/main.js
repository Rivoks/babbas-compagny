// Main JS //

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});
var easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', {easing: 'easeInOutQuad'});


if(!('ontouchstart' in window)) {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });
}
