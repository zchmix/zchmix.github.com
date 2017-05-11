
var map = new BMap.Map("map");
var point = new BMap.Point(120.018158, 30.295574); // 学校
map.centerAndZoom(point, 17);

map.enableScrollWheelZoom();
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());

map.addControl(new BMap.MapTypeControl());


    var local = new BMap.LocalSearch(map, {
        pageCapacity: 6,
        renderOptions: {
            map: map,
            autoViewport: true,
            panel: "results"
        }
    });
    local.searchNearby("酒店", "杭州海曙路58号");
    // ---------- PART 1 --------------------
    $("body").on("click", ".part1", function() {
        // $("#p1").toggleClass("active");
        $("#results").fadeIn();
        map.clearOverlays();
        var local = new BMap.LocalSearch(map, {
            pageCapacity: 6,
            renderOptions: {
                map: map,
                autoViewport: true,
                panel: "results"
            }
        });
        local.searchNearby("酒店", "杭州海曙路58号");
    });
    // ---------- PART 2 --------------------
    $("body").on("click", ".part2", function() {
      
        var transit = new BMap.TransitRoute(map, {
            renderOptions: {
                map: map,
                panel: "results"
            }
        });
        transit.search("杭州海曙路58号", "宾馆");
    });
    // ---------- PART 3 --------------------
    $("body").on("click", ".part3", function() {
      schoolmarker();
        
    });
    var school_info=[
  [120.016976,30.295394,"博文苑1号楼便利超市"],
  [120.015413,30.295005,"博文苑4号楼萌站"],
  [120.017012,30.295566,"博文苑5号楼晨光文具&水果超市&电脑维修"],
  [120.016239,30.295862,"博文苑6号楼仓前图文制作部&菜鸟驿站"],
  [120.014748,30.295831,"博文苑7号楼便利超市&医务室"],
  [120.015745,30.296533,"博文苑9号楼学生事务服务中心"],
  [120.017924,30.29573, "恕园7号楼食堂"],
  [120.019406,30.295297,"恕园7号楼彩色玻璃房110服务中心"],
  [120.016945,30.297671,"恕园36号楼图书馆"],
  [120.019127,30.296423,"恕园13号楼一鸣奶吧"],
  [120.02065,30.297554,"恕园16号楼实验楼"],
  [120.01827,30.297499,"恕园23号楼人文学院"],
  [120.019743,30.297148,"恕园17号楼法学院"],
  [120.019527,30.297417,"恕园21号楼经济与管理学院"],
  [120.019976,30.294841,"恕园1号楼阿里巴巴商学院"],
  [120.016527,30.293952,"恕园6号楼经亨颐学院"]
];


var opts = {
  width: 200, // 信息窗口宽度    
  height: 200, // 信息窗口高度    
  title: "<span style='color:#FF0000'>"+"信息：", // 信息窗口标题   
}

function schoolmarker(){
  for(var i = 0;i < school_info.length;i++){
  var point= new BMap.Marker(new BMap.Point(school_info[i][0],school_info[i][1]));
  var address = school_info[i][2];
  map.addOverlay(point);
  OnClick(address,point);
}
}


function OnClick(address,point){
  point.addEventListener("click",function(e){
  var p = e.target;
  var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
  var div=document.createElement("div");
  div.style.width='200px';
  div.style.height="150px";
  div.style.border = '1px solid black';
  var img = document.createElement('img');
  img.style.width='200px';
  img.style.height='150px';
  img.setAttribute('alt', '图片');
  img.setAttribute('href','img/city.jpg')
  div.append(img);
  div.append(address);
    var infoWindow = new BMap.InfoWindow(div,opts);
  map.openInfoWindow(infoWindow,point);
  });
}

