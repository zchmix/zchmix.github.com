var map = new BMap.Map("myMap");
  var point = new BMap.Point(116.404, 39.915);
  map.centerAndZoom(point, 15);   

 



 var map = new BMap.Map("myMap");    
map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);    
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.setCurrentCity("宁波"); 
var local = new BMap.LocalSearch(map, {
  renderOptions: {
    map: map
  }
});
local.search("石碶");



  
map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);
var driving = new BMap.DrivingRoute(map, {
  renderOptions: {
    map: map,
    panel: "results",
    autoViewport: true
  }
});
driving.search("石碶", "古林镇");