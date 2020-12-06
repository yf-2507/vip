// window.onload=function(){
setInterval(function () {
    if(document.title=="精美壁纸"){
      let choose = document.getElementById("choose-wrap");
      let $imgWrap = $("#img-wrap");
      if(choose.innerHTML+''==''&&$imgWrap.html().length<=2){
        var title_list=["风景",'动漫','爱情','卡通','游戏','体育','影视','美食','星座','建筑'];
        var img_list=[
          {
            id: 1,
            imgArr: [
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/1607069206777.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/1607069266697.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/1607069192312.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/1607069071465.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/1607069094800.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/1607069131727.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/1607069168744.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/8/320x510/1423039401112.jpg",
            ]
          },
          {
            id:2,
            imgArr:[
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g5/M00/04/0B/ChMkJljd6yiINzdMAAGyiieCxcEAAbO6AFRuicAAbKi103.jpg",
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g5/M00/04/0B/ChMkJljd6yuIDVGPAADZCskCZU0AAbO6AHgZbEAANki836.jpg",
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g5/M00/04/0B/ChMkJ1jd6yqIN5xsAAGMkn9NjDMAAbO6AHCyOAAAYyq61.jpeg",
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g5/M00/04/0B/ChMkJ1jd6ymIGR8HAAJo-gW3_B8AAbO6AG95ZMAAmkS879.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1561015673477.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1561015672175.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1561015667980.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1561015665718.jpg"
            ]
          },
          {
            id:3,
            imgArr:[
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1588990503391.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/158899063612.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1588990621237.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1588990615681.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1587613394628.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1587613415979.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1587613438952.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1587613444612.jpg"
            ]
          },
          {
            id:4,
            imgArr:[
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/1605161153863.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/1605161157261.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/16051611600.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/1605161163250.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/159375822673.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1593758225623.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1593758223777.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1593758222799.jpg"
            ]
          },
          {
            id:5,
            imgArr:[
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1490239027197.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1490238994441.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1490238993333.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1466128100524.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1466128117511.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1466128115399.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1466128112430.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1466128110618.jpg"
            ]
          },
          {
            id:6,
            imgArr:[
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/1605864646360.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/1605864863221.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/1605864837971.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/1605864815296.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1592878232870.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1592878328127.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1592878315227.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1592878298491.jpg"
            ]
          },
          {
            id:7,
            imgArr:[
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1563179201877.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/156317921998.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1563179216490.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1563179213850.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1563179210147.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/149077631254.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/1490776298855.jpeg",
              "https://b.zol-img.com.cn/sjbizhi/images/9/320x510/149077629726.jpg"
            ]
          },
          {
            id:8,
            imgArr:[
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/1604985503797.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/1604985523359.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1603074007459.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1603074024720.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1603074058646.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1603074113409.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1597284884682.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/11/320x510/1597284892389.jpg"
            ]
          },
          {
            id:9,
            imgArr:[
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g5/M00/01/0B/ChMkJ1v3a7mIYWXIAAEe8n1B6NgAAtU9AGmyQcAAR8K002.jpg",
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g5/M00/01/0B/ChMkJlv3a7uIO06IAAD9YPjFRIEAAtU9AGsUBAAAP14328.jpg",
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g5/M00/01/0B/ChMkJ1v3a7GIajyZAAEAymkkbI0AAtU9AGVkGUAAQDi143.jpg",
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g5/M00/01/0B/ChMkJlv3a7yIYQN2AAEj_nYA7tgAAtU9AGtUU0AASQW617.jpg",
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g5/M00/01/0B/ChMkJ1v3a7GIQOolAAEBGvbUZ0cAAtU9AGWoS8AAQEy454.jpg",
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g5/M00/01/0B/ChMkJ1v3a7KIPw_LAAEJZUDCqj8AAtU9AGZLOwAAQl9485.jpg",
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g5/M00/01/0B/ChMkJlv3a7SIfR0hAAEQk479ToAAAtU9AGbjLkAARCr007.jpg",
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g5/M00/01/0B/ChMkJlv3a7WIFDndAAEJhrFdC9YAAtU9AGdjzQAAQme361.jpg"
            ]
          },
          {
            id:10,
            imgArr:[
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g6/M00/09/05/ChMkKl-_dpSIdiohAAXaNrQ7gjUAAF3rAKsPYoABdpO971.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/160638269264.jpg",
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g6/M00/09/05/ChMkKl-_douIC5mkAB2Sm3TyK_QAAF3qwFHpD0AHZKz993.jpg",
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g6/M00/09/05/ChMkKV-_doyINxmKAC3SCZgGeCUAAF3qwHag5kALdIh299.jpg",
              "https://b.zol-img.com.cn/sjbizhi/images/12/320x510/160638277829.jpg",
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g6/M00/09/05/ChMkKl-_dpCILG0dAC_MKqqnR-MAAF3rABfVkcAL8xC098.jpg",
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g6/M00/09/05/ChMkKl-_dpGIQFnNABUyhBgs850AAF3rAEtHbgAFTKc073.jpg",
              "https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g6/M00/09/05/ChMkKV-_dpOIVc3ZACGh172hg0gAAF3rAHKU1kAIaHv385.jpg"
            ]
          }
        ];
        for (let s of title_list) {
          $(choose).append('<li>'+s+'</li>');
        }
        let $liList = $("#choose-wrap li");
        $liList[0].style.backgroundColor="slateblue";
        $liList[0].style.color="#fff";
        for(v of img_list[0].imgArr){
          $imgWrap.append('<img src="'+v+'">');
        }
        $liList.each(function (index) {
          this.onclick=function () {
            $imgWrap.html('');
            $liList.each(function () {
              $(this).css("backgroundColor","#eee");
              $(this).css("color","#000");
            })
            console.log(index);
            this.style.backgroundColor="slateblue";
            this.style.color="#fff";
            for(v of img_list[index].imgArr){
              $imgWrap.append('<img src="'+v+'">');
            }
          }
        })
        // clearInterval(timer);
      }
    }
  },300);

// }


