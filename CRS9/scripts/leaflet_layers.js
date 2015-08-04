/*
 This code uses Leaflet
 */

//-----


//this defines the icon class
var
icon_template = L.Icon.extend({
                              options:{
                                       shadowUrl: 'images/icons/shadow.png',
                                       iconSize:     [38,38], // size of the icon
                                       shadowSize:   [50, 50], // size of the shadow
                                       iconAnchor:   [19, 38], // point of the icon which will correspond to marker's location
                                       shadowAnchor: [19, 38],  // the same for the shadow
                                       popupAnchor:  [0, -28] // point from which the popup should open relative to the iconAnchor
                              }
            }),


print = new icon_template({iconUrl: 'images/icons/computers.png'}),
scan = new icon_template({iconUrl: 'images/icons/photo.png'}),
study = new icon_template({iconUrl: 'images/icons/library.png'}),
rest = new icon_template({iconUrl: 'images/icons/toilets.png'}),
rest_disab = new icon_template({iconUrl: 'images/icons/toilets_disability.png'}),
disab_acc = new icon_template({iconUrl: 'images/icons/disability2.png'}),
breastfeed = new icon_template({iconUrl: 'images/icons/breastfeeding.png'}),
fire = new icon_template({iconUrl: 'images/icons/fire.png'}),
stair = new icon_template({iconUrl: 'images/icons/stairs.png'}),
info_desk = new icon_template({iconUrl: 'images/icons/information3.png'}),

RedIcon = L.Icon.Default.extend({
                                    options: {
                                        iconUrl: 'marker-icon-red.png'
                                    }
                                }),

rest_list = [
              ["first",-11.867350911459308, 1.40625],
              ["second",67.67608458198097, -13.0078125],
              ],


stairs_list = [
                 ["first", 13.239945499286312, 47.109375],
                 ["second",62.59334083012024,-118.125 ],
                 ["third",-81.82379431564337, 56.953125],
                 ["fourth",-24.5271348225978, -78.046875],
                 ["fifth",-24.5271348225978, -52.734375]
             ]
;






var printers = L.marker([2.8113711933311403, -81.5625],
                        {icon: print,
                        bounceOnAdd: true,
                        bounceOnAddOptions: {duration: 500, height: 100},
                        bounceOnAddCallback: function() {console.log("done");}
                        }).bindPopup('Printers'),
    scanners    = L.marker([2.8113711933311403, -61.87499999999999],
                           {icon: scan,
                           bounceOnAdd: true,
                           bounceOnAddOptions: {duration: 500, height: 100},
                           bounceOnAddCallback: function() {console.log("done");}
                           }).bindPopup('Scanners'),
    study_rooms    = L.marker([-60, 0],
                              {
                              icon: study,
                              bounceOnAdd: true,
                              bounceOnAddOptions: {duration: 500, height: 100},
                              bounceOnAddCallback: function() {console.log("done");}
                              }).bindPopup('Study_room'),
    restrooms_first   = L.marker([rest_list[0][1], rest_list[0][2]],
                            {
                            icon:rest,
                            bounceOnAdd: true,
                            bounceOnAddOptions: {duration: 500, height: 100},
                            bounceOnAddCallback: function() {console.log("done");}
                            }).bindPopup('Restrooms'),
    restrooms_second   = L.marker([rest_list[1][1], rest_list[1][2]],
                             {
                             icon:rest_disab,
                             bounceOnAdd: true,
                             bounceOnAddOptions: {duration: 500, height: 100},
                             bounceOnAddCallback: function() {console.log("done");}
                             }).bindPopup('Restrooms'),
    breast   = L.marker([49.15296965617039, -12.3046875],
                              {
                              icon:breastfeed,
                              bounceOnAdd: true,
                              bounceOnAddOptions: {duration: 500, height: 100},
                              bounceOnAddCallback: function() {console.log("done");}
                              }).bindPopup('Lactation room'),
    fire_exit   = L.marker([55.59334083012024,-118.125 ],
                    {
                    icon:fire,
                    bounceOnAdd: true,
                    bounceOnAddOptions: {duration: 500, height: 100},
                    bounceOnAddCallback: function() {console.log("done");}
                    }).bindPopup('Fire exit'),
    stairs_first = L.marker([stairs_list[0][1], stairs_list[0][2]],
                       {
                       icon:stair,
                       bounceOnAdd: true,
                       bounceOnAddOptions: {duration: 500, height: 100},
                       bounceOnAddCallback: function() {console.log("done");}
                       }).bindPopup('Stairs'),
stairs_second = L.marker([stairs_list[1][1], stairs_list[1][2]],
                        {
                        icon:stair,
                        bounceOnAdd: true,
                        bounceOnAddOptions: {duration: 500, height: 100},
                        bounceOnAddCallback: function() {console.log("done");}
                        }).bindPopup('Stairs'),
stairs_third = L.marker([stairs_list[2][1], stairs_list[2][2]],
                        {
                        icon:stair,
                        bounceOnAdd: true,
                        bounceOnAddOptions: {duration: 500, height: 100},
                        bounceOnAddCallback: function() {console.log("done");}
                        }).bindPopup('Stairs'),
stairs_fourth = L.marker([stairs_list[3][1], stairs_list[3][2]],
                        {
                        icon:stair,
                        bounceOnAdd: true,
                        bounceOnAddOptions: {duration: 500, height: 100},
                        bounceOnAddCallback: function() {console.log("done");}
                        }).bindPopup('Stairs'),
stairs_fifth = L.marker([stairs_list[4][1], stairs_list[4][2]],
                        {
                        icon:stair,
                        bounceOnAdd: true,
                        bounceOnAddOptions: {duration: 500, height: 100},
                        bounceOnAddCallback: function() {console.log("done");}
                        }).bindPopup('Stairs'),

    dis = L.marker([83.97925949886205, 41.484375],
                      {
                      icon:disab_acc,
                      bounceOnAdd: true,
                      bounceOnAddOptions: {duration: 500, height: 100},
                      bounceOnAddCallback: function() {console.log("done");}
                      }).bindPopup('Disability access'),
inf = L.marker([73.12494524712693, -12.65625],
               {
               icon:info_desk,
               bounceOnAdd: true,
               bounceOnAddOptions: {duration: 500, height: 100},
               bounceOnAddCallback: function() {console.log("done");}
               }).bindPopup('North Info Desk');

var
floor_ground =     L.tileLayer('images/tiles/{z}/{x}/{y}.jpg', {
                               minZoom: 0,
                               maxZoom: 3,
                               center: [0, 0],
                               zoom: 1,
                               crs: L.CRS.Simple,
                               continuousWorld:false,
                               noWrap: true,
                               worldCopyJump: false,
                               attribution: 'Atkins',
                               tms: false,
                               errorTileUrl: 'https://web.uncc.edu/site/error/report',
                               
                               }),

floor_one =         L.tileLayer('images/tiles_main/{z}/{x}/{y}.png', {
                                minZoom: 0,
                                maxZoom: 3,
                                center: [0, 0],
                                zoom: 1,
                                crs: L.CRS.Simple,
                                continuousWorld:false,
                                noWrap: true,
                                worldCopyJump: false,
                                attribution: 'Atkins',
                                tms: false,
                                errorTileUrl: 'https://web.uncc.edu/site/error/report',
                                
                                }),

floor_two =         L.tileLayer('images/tiles/{z}/{x}/{y}.jpg', {
                                minZoom: 0,
                                maxZoom: 3,
                                center: [0, 0],
                                zoom: 1,
                                crs: L.CRS.Simple,
                                continuousWorld:false,
                                noWrap: true,
                                worldCopyJump: false,
                                attribution: 'Atkins',
                                tms: false,
                                errorTileUrl: 'https://web.uncc.edu/site/error/report',
                                
                                }),

res = L.layerGroup([study_rooms, printers, scanners, restrooms_first, restrooms_second, breast, dis, fire_exit, stairs_first, stairs_second, stairs_third, stairs_fourth, stairs_fifth, inf]);

//pathfinder = L.overlayMaps;

//pathfinder=L.layer([])
var map, options, editableLayers,
drawnItems, MyCustomMarker, res_layer, info, legend, pathfind,
featureMap = {},
room_data= null;

var baseMaps = {
    "Ground floor" : floor_ground,
    "Main floor"     : floor_one,
    "Second floor"  : floor_two
},

overlayMaps = {
    "Resources": res
    //"Wayfinding": pathfinder
};



function getMap(){
        map = L.map('map-canvas', {
                        minZoom: 0,
                        maxZoom: 3,
                        center: [190, 190],
                        zoom: 1,
                        zoomControl: false,
                        layers: [floor_ground, res], //only one baselayer needed at initialization
                        drawControl: false,
                        touchZoom:true,
                        dragging: true,
                    //tilt:45
                    
                });

        // dimensions of the image
        var w = 1002,
        h = 1002,
        url = 'images/tiles/0/0/0.jpg';
    

//console.log(mytiles );
        // calculate the edges of the image, in coordinate space
        var southWest = map.unproject([0, h], map.getMaxZoom()-1);
        var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
        var bounds = new L.LatLngBounds(southWest, northEast);
        // add the image overlay,
        // so that it covers the entire map
        //L.imageOverlay(url, bounds).addTo(map);

        // tell leaflet that the map is exactly as big as the image
        map.setMaxBounds(bounds);
    
    
        return map;

};

//--------------------------
//cotrolling the resource styles
//var style_control = L.control();
//style_control.onAdd = function

var customAvailable=
{
    'maxWidth': '500',
    'className' : 'custom',
    'offset': new L.Point(0, 0),
    'timeout': 1000
},
customNotAvailable = {
    'maxWidth': '500',
    'className' : 'customNotAv',
    'offset': new L.Point(0, 0),
    'timeout': 1000
};

function zoomToResource(a_resource) {
    map.fitBounds(a_resource.target.getBounds());
}




function highlightResource(e) {
    //console.log(e.target.feature.name);
    var layer = e.target;
    
    layer.setStyle({
                   weight: 1,
                   color: 'red',
                   dashArray: '0',
                   fillOpacity: 0.4,
                   fillColor: e.target.feature.properties.color
                   });
    
    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    room_data = room_availability[layer.feature.RoomID];
    
    //console.log(room_data);
    delay(function(){
            if (room_data.status=='TRUE'){
                  layer.bindPopup(layer.feature.properties.description + '<br>Available<br><a href="http://'+room_data.link+'" target="_BLANK">Reserve Now</a>'+'</b><br />' +
                                  '<img src="'+layer.feature.resource_image+'" alt="" style="width:128px;height:110px;">', customAvailable);
                
            }
            else if (room_data.status=='FALSE')
                  layer.bindPopup(layer.feature.properties.description + '<br>Not Available'+ '</b><br />' +
                                  '<img src="'+layer.feature.resource_image+'" alt="" style="width:128px;height:110px;">', customNotAvailable);
            else if (room_data=='null')
                  layer.bindPopup(layer.feature.properties.description+'</b><br />' +
                                  '<img src="'+layer.feature.resource_image+'" alt="" style="width:128px;height:110px;">', customAvailable);
            layer.openPopup({lat: layer.feature.properties.pop.lat, lng: layer.feature.properties.pop.lng});
            info.update(layer.feature);
    }, 200);
}

function resetResourceHighlight(e) {
    res_layer.resetStyle(e.target);
    //room_data = null;
    //e.target.closePopup({'timeout': 1000000});

   //info.update();
   //legend.update();
}

function getColor(d) {
    return d ==='disability' ? '#FF4D4D' :
    d === 'path'  ? '#FF0000' :
    d === 'Study room'  ? '#66FF33' :
    d === 'Main Stairs'  ? '#3399FF' :
    d === 'North Entrance'  ? '#3399FF' :
    d === 'Stairs'  ? '#3399FF' :
    d === 'Pete\'s Cafee'  ? '#CC3399' :
    d === 'Quiet zone'  ? '#FF9933' :
    d === 'Atrium'  ? '#669900' :
    d === 'Restrooms'  ? '#0033CC' :
    d === 'Main Floor Study'  ? '#66C2C2' :
    d === 'Elevator'  ? '#663300' :
    d === 'Information Desk'  ? '#FF3300' :
    '#FFEDA0';
}

function style(feature) {
    return {
    fillColor: feature.properties.base_color,
    weight: 1,
    opacity: 1,
    color: '#FF9933',
    dashArray: '3',
    fillOpacity: 0.9,
    //text-shadow: 10px 10px
    };
}

function style_l(feature) {
    return {
    fillColor: feature.properties.base_color,
    weight: 1,
    opacity: 1,
    color: '#FF9933',
    dashArray: '3',
    fillOpacity: 0.2,
        //text-shadow: 10px 10px
    };
}

//the legend
legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    
    this._div = L.DomUtil.create('div', 'info legend'),
    this._resource_color = ['disability', 'path', 'Study room', 'Pete\'s Cafee', 'Quiet zone', 'North Entrance', 'Main Stairs', 'Stairs', 'Atrium', 'Restrooms', 'Main Floor Study', 'Elevator', 'Information Desk'],
    labels = [];
    
    // loop through our density intervals and generate a label with a colored square for each interval
    /*
    for (var i = 0; i < resource_color.length; i++) {
        div.innerHTML +=
        '<i style="background:' + getColor(resource_color[i] + 1) + '"></i> ' +
        resource_color[i] + (resource_color[i + 1] ? '&ndash;' + resource_color[i + 1] + '<br>' : '+');
    }*/
    /*
    for (var i = 0; i < this._resource_color.length; i++) {
        this._div.innerHTML +=
        '<i style="background:' + getColor(this._resource_color[i]) + '"></i> ' +
        '&ndash; ' + this._resource_color[i] + '<br>';
    }
     
    */
    //this.update();
    return this._div;
    
    
};

legend_item = L.control();
legend_item.onAdd = function (curr_layer){
    this._div = L.DomUtil.create('div', 'item function');
     //console.log(curr_layer);
    this._div += '<div id ='+curr_layer.feature.properties.description+'><i style="background:' + (curr_layer? curr_layer.feature.properties.color:'black') + '"></i> ' +
    '&ndash; ' +curr_layer.feature.properties.description
    +'</div>';
    this.higlight_item = function(){
        
                curr_layer.on('mouseover', function(e){
                                curr_layer.setStyle({
                                              fillOpacity: 0.2
                                              });
                                    });
    }
    return this._div;

}
//'+curr_layer.feature.name+'
legend.update = function(curr_layer){
    //console.log(props? props.name+props.properties.color:'not found');
    var d ='<div id="'+curr_layer.feature.name+'" data-id ='+curr_layer.feature.name+' class="marker-list"><i style="background:' + (curr_layer? curr_layer.feature.properties.color:'black') + '"></i> ' +
    '&ndash; ' +curr_layer.feature.properties.description
    +'</div>';
    legend._div.innerHTML +=d;
    curr_layer.on('mouseover', function(e){
            //console.log(curr_layer.feature.name);
            });
    //console.log($('div.marker-list'));
   // $('div.marker-list').append('<a href="#" class="list-link" title="' + art.properties.descfin + '"><div class="info-list-item">' + '<div class="info-list-txt">' + '<div class="title">' + art.properties.wrknm + '</div>' + '<br />' + art.properties.location + '</div>' + '<div class="info-list-img">' + art.properties.img_src + '</div>' + '<br />' + '</div></a>')
//}
    //console.log(featureMap);
    $('div.marker-list').bind('mouseover', function(e){
                        //console.log(this);
                        var divID = $(this).data('id');
                        //console.log(divID);
                        var marker = featureMap[divID];

                        //console.log(marker);
                        marker.bindPopup(marker.feature.properties.description, customAvailable).openPopup();
                        style_l(marker.feature);
                        e.preventDefault();
                        //marker.setStyle({fillOpacity: 0.2});
                    });
    $('div.marker-list').bind('mouseout', function(e){
                        //console.log(this);
                        var divID = $(this).data('id' );
                        //console.log(divID);
                        var marker = featureMap[divID];
                        
                        //console.log(marker);
                        marker.closePopup();
                        e.preventDefault();
                        //marker.setStyle({fillOpacity: 0.2});
                    });
    
                        

/*    $(legend._div).bind('mouseover', function(e){
                          console.log("just div");
                          curr_layer.on('mouseover', function(e){
                                            console.log("legend");
                                        });
                  });*/
}

var highlight_layer = function(marker){
    
}


//--------------------

function add_features(){
    
    getMap();
    
    legend.addTo(map);
    
    L.control.layers(baseMaps, overlayMaps, {position: 'topright'}).addTo(map);
    L.control.zoom({position: 'topright'}).addTo(map);
 //   var feat = map.getPanes().overlayPane;
 
    //L.marker([0, 0]).addTo(map).bindPopup('This is 0, 0');
    
    //draw controls
    var editableLayers = new L.FeatureGroup();
    map.addLayer(editableLayers);
    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    
    var MyCustomMarker = L.Icon.extend({
                                           options: {
                                               shadowUrl: null,
                                               iconAnchor: new L.Point(12, 12),
                                               iconSize: new L.Point(24, 24),
                                               iconUrl: 'images/icons/disability.png',
                                               bounceOnAdd: true,
                                               bounceOnAddOptions: {duration: 500, height: 100},
                                               bounceOnAddCallback: function(e) {
                                                                            //console.log("done");
                                                                        console.log("printers", printers.toGeoJSON().geometry.coordinates);
                                                }
                                           }
                                       });
    
    var options = {
        position: 'topright',
        draw: {
                polyline: {
                shapeOptions: {
                color: '#f357a1',
                weight: 10
                }
            },
            polygon: {
                allowIntersection: false, // Restricts shapes to simple polygons
                drawError: {
                color: '#e1e100', // Color the shape will turn when intersects
                message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                },
                shapeOptions: {
                    color: '#bada55',
                    fillColor: '#f03',
                    fillOpacity: 0.5
                }
            },
            circle: false, // Turns off this drawing tool
            rectangle: {
                shapeOptions: {
                clickable: true
            }
            },
            marker: {
                icon: new MyCustomMarker()
            }
        },
        edit: {
            featureGroup: editableLayers, //REQUIRED!!
            remove: true
        }
    };
    
    var drawControl = new L.Control.Draw(options);
    map.addControl(drawControl);
    
    map.on('draw:created', function (e) {
           var type = e.layerType,
           layer = e.layer;
           
           if (type === 'marker') {
           layer.bindPopup('A popup!');
           }
           
           drawnItems.addLayer(layer);
           });
    L.marker([48.85, 40.35],
             {
             riseOnHover: true,
             bounceOnAdd: true,
             bounceOnAddOptions: {duration: 500, height: 100},
             bounceOnAddCallback: function() {console.log("done");}
             }).addTo(map);
    
    
    
    res_layer = L.geoJson(other_geojsonFeatures, {
              style: style,
              onEachFeature: function (feature, layer) {
                //layer.bindPopup(feature.properties.description);
                featureMap[feature.name] = layer;
                layer.on({
                         mouseover: highlightResource,
                         mouseout: resetResourceHighlight,
                         click: zoomToResource,
                       });
                legend.update(layer);
              }
              }).addTo(map);
    

    //recording the coordinates of the click events
    var featureJSON;
    map.on('click', function(e) {
           featureJSON +='['+e.latlng.lng+ ', ' + e.latlng.lat+'],';
           console.log(featureJSON);
           });
    
    //console.log(featureJSON);
    //console.log("printers", printers.toGeoJSON().geometry.coordinates);
    
    
    info = L.control();
    info.onAdd = function (map) {
        this._name;
        this._roominf;
        this._description;
        this._id;
        this._div = L.DomUtil.create('div', 'information'); // create a div with a class "information"
        this.update();
        return this._div;
    };
    
    // method that we will use to update the control based on feature properties passed
    info.update = function (props) {
        this._id= (props? props.RoomID:'Hover over the  map');
        this._name= (props? props.name:'Hover over the  map');
        this._description= (props? props.properties.description:'Hover over the  map');
        this._roominf = (room_inf[this._id]? room_inf[this._id]:null);//stores JSON of room info
        //console.log(this._id, room_inf);
        this._div.innerHTML = '<h4>Resource</h4>' +  (props ? '<b>' + this._name + '</b><br />' + this._description + '</b><br />' +(this._roominf?
                                                                                                                                     'Capacity: '+this._roominf.RoomCapacity+'<br>'+
                                                                                                                                     'Floor name: '+this._roominf.FloorName+'<br>'+
                                                                                                                                     'Equipment: '+this._roominf.Equipment+'<br>'+
                                                                                                                                     '<a href="http://'+room_data.link+'" target="_BLANK">Reserve room</a>'+'</b><br />'
                                                                                                                                     :'<img src=\"images/UNCC_AtkLib_Logo_1c.png\" style=\"width:128px;height:90px;\" >')+'</b><br />'
                                                                        //+'<img src="'+props.resource_image+'" alt="" style="width:128px;height:128px;">'
                                                                   : 'Hover over the map'+
                                                      '</b><br />'+'</b><br />' +
                                                      '<img src=\"images/UNCC_AtkLib_Logo_1c.png\" alt="" style="width:128px;height:90px;">');
 
    };
    
    info.addTo(map);
    //legend.addTo(map);
    
    
    //searchbox
    /*
    var osmGeocoder = new L.Control.OSMGeocoder({
                                                collapsed: false,
                                                position: 'bottomright',
                                                text: 'Find!',
                                                });
    
    map.addControl(osmGeocoder);
    */
    
    
    //pathfind = L.control();
    
    //pathfind.onAdd = function (map){
    //    this._div = L.DomUtil.create('div', 'path');
    //    return this._div;
    //}
    //pathfind.addTo(map);
    
    retrieve_room_status();
    retrieve_room_info();
    /*
    var pathButtonOptions = {
        'text': 'Pathfinder',  // string
        'iconUrl': 'images/icons/book.png',  // string
        'onClick': my_button_onClick,  // callback function
        'hideText': true,  // bool
        'maxWidth': 30,  // number
        'doToggle': false,  // bool
        'toggleStatus': false  // bool
    }
    
    var path_button = new L.Control.Button(pathButtonOptions).addTo(map), p = false;
    //var path_button = new L.Control.Button(L.DomUtil.get('helpbutton')).addTo(map), p = false;
    path_button.on('click', function () {
              window.location.href = 'http://www.google.com';
              my_button_onClick();
              });
    function my_button_onClick() {
        //console.log("someone clicked my button");
        if(!p){
            load_finder(map);
            p=true;
        }
        else{
            unload_finder(map);
            p=false;
        }
    }
    */
    icon_ctrl(map);
    
    //p_load();
    //load_finder(map);
    
    var p=false, customControl = L.Control.extend({
                                            
                                                    options: {
                                                    position: 'bottomleft'
                                                    //control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright'
                                                    },
                                                    
                                                    onAdd: function (map) {
                                                        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
                                                        
                                                        container.style.backgroundColor = 'green';
                                                        container.style.backgroundText = "url(http://t1.gstatic.com/images?q=tbn:ANd9GcR6FCUMW5bPn8C4PbKak2BJQQsmC-K9-mbYBeFZm1ZM2w2GRy40Ew)";
                                                        container.style.width = '80px';
                                                        container.style.height = '30px';
                                                        
                                                        container.onclick = function(){
                                                                //console.log('buttonClicked');
                                                            //console.log("someone clicked my button");
                                                            if(!p){
                                                                load_finder(map);
                                                                p=true;
                                                            }
                                                            else{
                                                                unload_finder(map);
                                                                p=false;
                                                            }
                                                     
                                                        }
                                                        return container;
                                                    }

                                                    
                                            });
    
    map.addControl(new customControl());
    
}