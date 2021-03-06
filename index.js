function loadScript(src, callback) {
    var script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0];
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.src = src;
    if (script.addEventListener) {
        script.addEventListener('load', function () {
            callback();
        }, false);
    } else if (script.attachEvent) {
        script.attachEvent('onreadystatechange', function () {
            var target = window.event.srcElement;
            if (target.readyState == 'loaded') {
                callback();
            }
        });
    }
    head.appendChild(script);
}
function loadlive2d() {
    if (document.body.clientWidth > 600) {
        document.onreadystatechange = function () {
            if (document.readyState == "complete") {
                loadScript('https://npm.elemecdn.com/saiodgm-home@0.0.7/live2d.js',function(){
                    loadModel();
})
            }
        }
    }
}
loadlive2d()