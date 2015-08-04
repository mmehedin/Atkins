//Adding the Atkins
var atkinsTypeOptions = {
getTileUrl: function(coord, zoom) {
    var normalizedCoord = getNormalizedCoord(coord, zoom);
    if (!normalizedCoord) {
        return null;
    }
    var bound = Math.pow(2, zoom);
    return 'images/tiles' +
    '/' + zoom + '/' + normalizedCoord.x + '/' +
    normalizedCoord.y + '.jpg';  //        (bound - normalizedCoord.y - 1) + '.jpg';
},
tileSize: new google.maps.Size(256, 256),
maxZoom: 3,
minZoom: 1,
radius: 6371000,
name: 'atkins'
};

var atkinsMapType = new google.maps.ImageMapType(atkinsTypeOptions);

// Normalizes the coords that tiles repeat across the x axis (horizontally)
// like the standard Google map tiles.
function getNormalizedCoord(coord, zoom) {
    var y = coord.y;
    var x = coord.x;
    
    // tile range in one direction range is dependent on zoom level
    // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
    var tileRange = 1 << zoom;
    
    // don't repeat across y-axis (vertically)
    if (y < 0 || y >= tileRange) {
        return null;
    }
    
    // repeat across x-axis
    if (x < 0 || x >= tileRange) {
        //x = (x % tileRange + tileRange) % tileRange;
        return null;
    }
    
    return {
    x: x,
    y: y
    };
}



//start the google tiles
function googleTiles(){
    var mapOptions = {
    center: { lat: 0, lng: 0},
    zoom: 1,
    streetViewControl: false,
    disableDefaultUI: false,
        
    zoomControl: true,
    zoomControlOptions: {
    style: google.maps.ZoomControlStyle.SMALL,
    position: google.maps.ControlPosition.BOTTOM_RIGHT,
    },
        
    panControl: true,
    panControlOptions: {
        //style: google.maps.panControlStyle.SMALL,
    position: google.maps.ControlPosition.BOTTOM_RIGHT,
    },
        
    mapTypeId: 'coordinate',
    mapTypeId: 'atkins',
    mapTypeControlOptions: {
    mapTypeIds: ['coordinate', 'atkins', google.maps.MapTypeId.HYBRID],
    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    }
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
    
    // Now attach the coordinate map type to the map's registry
    //map.mapTypes.set('coordinate', coordinateMapType);
    map.mapTypes.set('atkins', atkinsMapType);
    
    //add grid overlay
    //insert_grid(map);
    
    map.setTilt(45);
    map.data.loadGeoJson('scripts/geojsontest.json');
    
    makePath(map);
    
    return map;
    

}