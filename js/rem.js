;(function(win,doc){
    var rem=20/375*doc.documentElement.clientWidth;
    doc.documentElement.style.fontSize=rem+'px';
    win.addEventListener('resize',function(){
        var rem=20/375*doc.documentElement.clientWidth;
        doc.documentElement.style.fontSize=rem+'px';
    },false);
})(window,document);

document.addEventListener("DOMContentLoaded", function () {
    var oBtn = document.querySelector('.btn');
    var oTrans = document.querySelector('.trans');
    var oClose = document.querySelector('.close');
    var oC = document.querySelector('.content-4');
    var oUl = document.getElementById('s_t');
    var x=0;
    var y=0;
    oBtn.addEventListener("click",function(){
        oTrans.style.display='block';
    },false)
    oClose.addEventListener("click",function(){
        oTrans.style.display='none';
    },false)
    oC.addEventListener("click",function(){
        oTrans.style.display='none';
    },false)
},false);

document.addEventListener('DOMContentLoaded',function(){
        var oUl = document.getElementById('s_t');
        var x=0;
        var y=0;
        oUl.addEventListener('touchstart',function(ev){
        var oTouch=ev.targetTouches[0];
        var dix=oTouch.pageX-x;
        function fnmove(ev){
            var oTouch=ev.targetTouches[0];
            x=oTouch.pageX-dix;
            oUl.style.WebkitTransform='translate3d('+x+'px,0,0)';
            oUl.style.transform='translate3d('+x+'px,0,0)';
            if(x<-440){
                oUl.style.WebkitTransform='translate3d(-440px,0,0)';
                oUl.style.transform='translate3d(-440px,0,0)';
            }
            if(x>0){
                oUl.style.WebkitTransform='translate3d(0,0,0)';
                oUl.style.transform='translate3d(0,0,0)';
            }
        }
        function fnremove(){
            document.removeEventListener('touchmove',fnmove,false);
            document.removeEventListener('touchend',fnremove,false);

        }
        document.addEventListener('touchmove',fnmove,false);
        document.addEventListener('touchend',fnremove,false);
        ev.preventDefault();
    },false)
    },false);