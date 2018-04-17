$(".animsition").animsition({
    inClass: 'fade-in-right',
    outClass: 'fade-out-right',
    inDuration: 1000,
    outDuration: 1000,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: true,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'body',
    transition: function(url) { window.location.href = url; }
});

$('.tlt').textillate({ in: { effect: 'rollIn' } });

$('document').ready(function() {
    var options = { videoId: 'J6vN21JiMNI', start: 3 };
    $('#wrapper').tubular(options);
    // f-UGhWj1xww cool sepia hd
    // 49SKbS7Xwf4 beautiful barn sepia
});

MorphSVGPlugin.convertToPath("#star");
TweenMax.to("#eaglepng", 1, { y: -50, repeat: -1, yoyo: true, ease: Power2.easeInOut });


var tl = new TimelineMax({ repeat: -1 });
tl.to("#star", 2, { morphSVG: "#heart-simple-shape-silhouette", ease: Elastic.easeOut })
    .to("#star", 2, { morphSVG: "#thumb", ease: Elastic.easeOut })
    .to("#star", 2, { morphSVG: "#star", ease: Elastic.easeOut })


var SMCon = new ScrollMagic.Controller();

$('.section').each(function() {

    var sectionTl = new TimelineMax();

    sectionTl
        .from(this, 1, { autoAlpha: 0, ease: Power0.easeNone }, 0)
        .from(this, 1, { x: 120, ease: Power0.easeNone }, 0);

    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            duration: 550,
            triggerHook: 0.8
        })
        .setTween(sectionTl)
        .addTo(SMCon);
});

// yellow-star animation

var tlYellowStar = new TimelineMax();
tlYellowStar.to("#yellow-star", 2.7, { rotation: 250, ease: Power2.easeInOut }, 0)
    .to("#yellow-star", 2.7, {

        css: {

            top: "400px",
            left: "100%"


        },
        ease: Power2.easeInOut
    }, 0)
    .to("#yellow-star", 2.7, { scaleX: 0.5, scaleY: 0.5, ease: Power2.easeInOut }, 0)




var sceneYellowStar = new ScrollMagic.Scene({
        triggerElement: "#LifeStyle",
        duration: 0,
        triggerHook: 0.1
    })
    .setTween(tlYellowStar)
    .addTo(SMCon);