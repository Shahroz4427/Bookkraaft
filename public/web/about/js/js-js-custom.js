$(".market-slider").slick({
    dots: !1,
    arrows: !0,
    infinite: !1,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {slidesToShow: 3, slidesToScroll: 3, infinite: !0, dots: !0}
    }, {breakpoint: 600, settings: {slidesToShow: 2, slidesToScroll: 2}}, {
        breakpoint: 480,
        settings: {slidesToShow: 1, slidesToScroll: 1}
    }]
}), $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    fade: !0,
    asNavFor: ".slider-nav"
}), $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: !0,
    centerMode: !0,
    focusOnSelect: !0
}), $(".tab_slider").slick({
    dots: !0,
    infinite: !0,
    speed: 300,
    autoplay: !0,
    slidesToShow: 3,
    slidesToScroll: 1
}), $(".client_strip_slider").slick({
    dots: !1,
    arrows: !1,
    infinite: !0,
    speed: 300,
    autoplay: !0,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {slidesToShow: 3, slidesToScroll: 3, infinite: !0, dots: !0}
    }, {breakpoint: 767, settings: {slidesToShow: 2, slidesToScroll: 1}}]
}), window.matchMedia("(max-width: 767px)").matches ? ($(".mb_slider").removeClass("row"), $(".mb_slider").slick({
    dots: !1,
    arrows: !1,
    infinite: !0,
    speed: 300,
    autoplay: !0,
    slidesToShow: 1,
    slidesToScroll: 1
})) : ($(".mb_slider").removeClass("mb_slider"), $(".mb_slider").addClass("row")), $(function () {
    new WOW().init()
}), $(function () {
    $("#menu").slicknav()
}), $(".testi-sldier").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !0,
    dots: !1,
    arrows: !0,
    lazyLoad: "progressive",
    focusOnSelect: !0,
    prevArrow: '<i class="fas fa-caret-left slick-prev key1"></i>',
    nextArrow: '<i class="fas fa-caret-right slick-next key2"></i>',
    responsive: [{breakpoint: 568, settings: {slidesToShow: 1, slidesToScroll: 1}}]
});
var days, hours, minutes, seconds, target_date = new Date().getTime() + 1728e5,
    countdown = document.getElementById("tiles");

// function getCountdown() {
//     var s = new Date().getTime(), e = (target_date - s) / 1e3;
//     days = pad(parseInt(e / 86400)), e %= 86400, hours = pad(parseInt(e / 3600)), e %= 3600, minutes = pad(parseInt(e / 60)), seconds = pad(parseInt(e % 60)), countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"
// }
//
// function pad(s) {
//     return (s < 10 ? "0" : "") + s
// }
//
// getCountdown(), setInterval(function () {
//     getCountdown()
// }, 1e3);
