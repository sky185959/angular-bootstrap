(function($,doc,win){
    //判断手机横竖屏状态：
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        if (window.orientation === 180 || window.orientation === 0) {
            alert('竖屏状态！');
        }
        if (window.orientation === 90 || window.orientation === -90 ){
            alert('横屏状态！');
        }
    }, false);
//移动端的浏览器一般都支持window.orientation这个参数，通过这个参数可以判断出手机是处在横屏还是竖屏状态。
})(jQuery,document,window)