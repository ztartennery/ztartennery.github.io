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