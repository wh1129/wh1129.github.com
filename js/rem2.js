/**
 * Created by hasee on 2016/12/3.
 */
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