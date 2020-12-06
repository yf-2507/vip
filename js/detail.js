function oneValues(){
  var result;
  var url=window.location.search; //获取url中"?"符后的字串
  if(url.indexOf("?")!=-1){
    result = url.substr(url.indexOf("=")+1);
  }
  return result;
}
var arr=['java','前端','C/C++','Python','算法与数据结构','其他编程','外语考研考试','其他内容','电子书籍','精品软件','福利白嫖'];
var zl=[
    {
      id:'1',
      arr:[
          "互联网Java突击面试(1~3季),链接: https://pan.baidu.com/s/1_pRXdYJSGE5tHiAYyXOl9g 提取码: nx9f",
          "2020谷粒商城,链接: https://pan.baidu.com/s/1aR8FHshwnlA9_LB_ApItmw 提取码: n996",
          "享学 - JAVA互联网架构师VIP课程,链接: https://pan.baidu.com/s/147tr3aRcZdRj1HkqvQWKpg 提取码: 6pmy",
          "咕泡学院Java架构师第三期完整版,链接：https://pan.baidu.com/s/1crk1SbtCqe2Fa1mLFirBjA 提取码：3kbd",
          "咕泡JAVA架构师第三期,链接：https://pan.baidu.com/s/1APE9v4TXAWFndPSLkup0IA 提取码：qlc6"
      ]
    },
    {
      id:'2',
      arr:[
        "webpack5高级进阶 课程,链接: https://pan.baidu.com/s/1dzFBFzU8sXQ84Kte_3_t4w 提取码: y1k7",
        "珠峰2019最新JS面试题精讲,链接: https://pan.baidu.com/s/1qQ8yqtTIbYHLnj96Oo8DlQ 提取码: 537v",
        "web全栈架构师合集,链接: https://pan.baidu.com/s/1hsLB0_03Iyh3nwQfsz5hgQ 提取码: 4n6l",
        "ReactNative+TypeScript仿喜马拉雅开发App,链接: https://pan.baidu.com/s/1FNUp4k95Ter4Z-dv_GA2Qg 提取码: hoh0",
        "小码哥 - Vue、Vuejs最详细教程-入门到项目实战,链接: https://pan.baidu.com/s/17uyZgVqTI8qR4oV0RM6lDQ 提取码: xd82",
        "微信小程序新版,链接: https://pan.baidu.com/s/1xK14mKysuiWrXvKqI5UO_A 提取码: ypw8",
      ]
    },
    {
      id:'3',
      arr:[
        "c、c#、c++系列教程,链接: https://pan.baidu.com/s/1x63L0#list/path=%2F",
        "C++逆向反汇编系列教程-编程魔方,链接: https://pan.baidu.com/s/1iFJ6ozCH53zXu7PHNtR66g#list/path=%2F 提取码: 40rf",
        "C语言基础班视频教程（很给力）（AGP论坛VIP课程）,链接: https://pan.baidu.com/s/1cowDEh#list/path=%2F",
      ]
    },
    {
      id:'4',
      arr:[
        "Python+人工智能2020教学环境,链接: https://pan.baidu.com/s/16sUPdNnYoM2rCeLMxZP59w#list/path=%2F 提取码: 83q8",
        "python-18天基础入门视频课程,链接: https://pan.baidu.com/share/init?surl=h4WoUJfCMLWC4NKpykD3Ow 提取码: kszn",
      ]
    },
    {
      id:'5',
      arr:[
        "算法与数据结构综合(C++)学习算法思想，修炼编程内功,链接: https://pan.baidu.com/s/1XuIhYFJbePHyWnSKAZhTUg#list/path=%2F",
        "Java-算法与数据结构,链接: https://pan.baidu.com/share/init?surl=1q7PuXvd475GhLFfaoKgzw 提取码: uczb",
        "算法与数据结构（第3版）配套光盘,链接: https://pan.baidu.com/share/init?surl=qMdkpULUX5W5Gqlme2IQcA 提取码: vga2",
      ]
    },
    {
      id:'6',
      arr:[
        "尚硅谷 Go语言核心编程课程,链接: https://pan.baidu.com/share/init?surl=4gV1QK4QvVe496t-SbwcuQ 提取码: i721",
        "go语言视频教程系列,链接: https://pan.baidu.com/share/init?surl=HMh_RsfxKKctjxZNyphYtA 提取码: srg8",
      ]
    },
    {
      id:'7',
      arr:[
        "英语考研,链接: https://pan.baidu.com/s/194pAX2RO74ScrRIBb-KWXQ#list/path=%2F",
        "20年6月新东方四级,链接: https://pan.baidu.com/s/1h0bEA5qCnjNiIQQTjDjLww 提取码: se1m",
        "考虫四级听力真题虐耳精听班,链接: https://pan.baidu.com/s/1w4b6xvFsfymO62jyi1QgCw 提取码: gxrk",
        "20年6+9月有道四级,链接: https://pan.baidu.com/s/19wrGhAV8srj1KI_kSNhDzQ 提取码: x837",
        "四级恋练有词,链接: https://pan.baidu.com/s/1X9qrBUeCKiqszU6E8_VyYw 提取码: 6rbw",
      ]
    },
    {
      id:'8',
      arr:[
        "PS教学,链接: https://pan.baidu.com/s/1moDmIOCR_5dNzSYgCvsYng 提取码: 9gzb",
        "820期 2020最新0基础到大神全套Premiere视频教程+6G素材,链接: https://pan.baidu.com/s/1VDiDsfwAeyxJ1-ljaaS_nQ 提取码: ascn"
      ]
    },
    {
      id:'9',
      arr:[
        "电子书大全一,链接: https://pan.baidu.com/share/init?surl=Y-Efuhh52AuvHhkuYZYbcQ 提取码: 6pwk",
        "电子书大全二,链接: https://pan.baidu.com/s/1lXj_Nd_zo1bRt2Oz1T6UlA#list/path=%2F",
        "电子书大全三,链接: https://pan.baidu.com/share/init?surl=uti_-yYGixP-0LyARprIcQ 提取码: i8w1",
        "2021考研数学电子书专项,链接: https://pan.baidu.com/share/init?surl=imsvj9Y2xE0Oly1ZlGY16g 提取码: jj1w",
        "Linux电子书及配套资料,链接: https://pan.baidu.com/share/init?surl=Xblm2GrU2RvQ6pyt6AkmDQ 提取码: 2b05",
      ]
    },
    {
      id:'10',
      arr:[
        "万磁搜是一款磁力搜索软件，这款软件有着强大的搜索引擎，能够同时搜索多个资源，速度快效率高,下载地址：https://ww.lanzous.com/ic97kqj",
        "讯飞输入法电脑PC版 v3.0.1725 原汁原味官方无广告纯净版,蓝奏云盘：https://pan.lanzoux.com/iOjp3j08hih",
        "论文查重降重软件,链接: https://pan.baidu.com/s/1DlQKhMDH4AGNAu7faJDLyQ 提取码: 707g",
        "搜书大师V22.2 解锁SVIP免广告 附带精品书源 看小说神器,下载地址：https://cloud.189.cn/t/BfMZV3RNVfYj(访问码:wfi9)",
      ]
    },
    {
      id:'11',
      arr:[
        "免费拥有自己的知网下载账号,手机端app:全球学术快报。直接从商店就能搜索下载到，是知网的官方软件。",
        "阿里云白嫖活动大全,链接: https://developer.aliyun.com/art ... y&type=dingTalk",
        "IDEA 常用快捷键讲解（Win + Linux）,IntelliJ IDEA 官方出的学习辅助插件：IDE Features Trainer：https://plugins.jetbrains.com/plugin/8554?pr=idea",
      ]
    },
    ]
let flag=prompt("请输入密码,如果不知道请添加作者QQ")=='qq250789'
if(flag){
  var $title = $("#title");
  $title.html(arr[oneValues()]+"资料列表");
  var $ul = $("#zl-wrap ul");
  for(var i=0;i<zl[oneValues()].arr.length;i++){
    $ul.append('<li>'+(i+1)+'、'+zl[oneValues()].arr[i].split(',')[0]+'<div>'+zl[oneValues()].arr[i].split(',')[1]+'</div></li>')
    // zl[oneValues()].arr[i].split(',')[0]
  }
}else if(!flag) {
  alert("返回主页");
  location.href='index.html';
}else {
  alert("返回主页");
  location.href='index.html';
}

