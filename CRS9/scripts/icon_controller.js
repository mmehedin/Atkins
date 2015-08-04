/*
 This controls the floor layers using the icons
 */

function icon_ctrl(map){
        var ctrl= new L.Control.IconLayers(
                                           [
                                            {
                                            title: 'Ground', // use any string
                                            layer: floor_ground, // any ILayer
                                            icon: 'images/icons/ground_small.png' // 80x80 icon
                                            },
                                            {
                                            title: 'First',
                                            layer: floor_one,
                                            icon: 'images/icons/first_small.png'
                                            },
                                            {
                                            title: 'Second',
                                            layer: floor_two,
                                            icon: 'images/icons/second_small.png'
                                            }
                                            ], {
                                           position: 'bottomleft',
                                           maxLayersInRow: 5
                                           }
                                           ).addTo(map);

        ctrl.on('activelayerchange', function(e) {
                //console.log('layer switched', e.layer);
                });
}