// window.onload=function () {
    var vplay=document.getElementById("vplay");//iframe
    var vip_choose=document.getElementById("vip_choose");//select选择框
    var play_btn=document.getElementById("play-btn");//解析按钮
    var adr=document.getElementById("address");
    var view=document.getElementById("view");
    play_btn.addEventListener('click',function () {
        vplay.src=vip_choose.value+adr.value+"";
        view.style.backgroundColor='none';
    })
    var author = document.getElementById("author");
    author.onclick=function (e) {
        alert("作者QQ：2550327526");
        e.preventDefault()
    }
    var show_day=new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六',);
    var time=document.getElementById("time");
    function gshTime() {
        let date = new Date();
        return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日　"+date.getHours()+"时"+date.getMinutes()+"分"+date.getSeconds()+"秒　"+show_day[date.getDay()]
    }
    time.innerHTML="当前时间 : "+gshTime();
    setInterval(function () {
        time.innerHTML="当前时间 : "+gshTime();
    },1000)
    var kg=document.getElementById("kg");
    var l_lan=document.getElementsByClassName("l-lan")[0];
    var r_lan=document.getElementsByClassName("r-lan")[0];
    var flag=false;
    kg.onclick=function () {
        flag=!flag;
        if(flag){
            r_lan.style.display="none";
            l_lan.style.display="none";
        }else {
            r_lan.style.display="block";
            l_lan.style.display="block";
        }
    }
    let wrap = document.getElementById("section");
    document.getElementById("fl").onclick=function(e){
        $.get('fl.html',function (res) {
            kg.style.display="none";
            wrap.innerHTML=res;
            document.title="福利漏洞"
        })
        e.preventDefault();
    }
    document.getElementById("bz").onclick=function(e){
        $.get('bz.html',function (res) {
            kg.style.display="none";
            wrap.innerHTML=res;
            document.title="精美壁纸"
        })
        e.preventDefault();
    }
    document.getElementById("zl").onclick=function(e){
        $.get('zl.html',function (res) {
            kg.style.display="none";
            wrap.innerHTML=res;
            document.title="学习资料"
        })
        e.preventDefault();
    }
    // $.get('zl.html',function (res) {
    //     kg.style.display="none";
    //     wrap.innerHTML=res;
    //     document.title="学习资料"
    // })
// }

