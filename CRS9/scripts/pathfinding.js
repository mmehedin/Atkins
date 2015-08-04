var icons_dir = 'images/icons/';
//var icons_bucket = 'http://maps.google.com/mapfiles/kml/shapes/';


var icons_bucket = {
        restroom: {
            icon: icons_dir + 'toilets.png'
        },
        library: {
            icon: icons_dir + 'library.png'
        },
        info: {
            icon: icons_dir + 'information3.png'
        }
};


function makePath(map){

        /**
         Adding a path
         */

        //-----------------
        var lineCoordinates = [
                               new google.maps.LatLng(0, 0),
                               new google.maps.LatLng(85, -180)//top left corner
                               //                           new google.maps.LatLng(85, 0)//top middle
                               //                          new google.maps.LatLng(-85, 0)//low middle
                               ];

        var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 2,
        strokeColor: '#393'
        };
        line = new google.maps.Polyline({
                                        path: lineCoordinates,
                                        icons: [{
                                                icon: lineSymbol,
                                                offset: '100%'
                                                }],
                                        map: map
                                        });

        //------------------
        //Animate arrow for the path
        //------------------
        animateArrow();
        function animateArrow() {
            var count = 0;
            window.setInterval(function() {
                               count = (count + 1) % 200;
                               
                               var icons = line.get('icons');
                               icons[0].offset = (count / 2) + '%';
                               line.set('icons', icons);
                               }, 20);
        }
        //var srcImage = 'http://library.uncc.edu/sites/default/files/users/4/';
        //srcImage += 'maps/1st.jpg';
        google.maps.event.addListener(map, 'click', addLatLng);

        function addLatLng(event) {
            
            var path = line.getPath();
            
            // Because path is an MVCArray, we can simply append a new coordinate
            // and it will automatically appear.
            path.push(event.latLng);
            
            /**
            var marker = new google.maps.Marker({
                                                position: event.latLng,
                                                title: '#' + path.getLength(),
                                                icon: icons_bucket + 'reception2.png',
                                                map: map
                               });
                            */
            addMarker(event, path);
        };


        //------------------
        // Add a new marker at the new plotted point on the polyline.
        function addMarker(feature, path) {
            //console.log(feature);
        var marker = new google.maps.Marker({
                                            position: feature.latLng,
                                            title: '#' + path.getLength(),
                                            icon: icons_bucket['restroom'].icon, // this will be feature.type instead of the literal
                                            map: map
                                            });

        }
}
