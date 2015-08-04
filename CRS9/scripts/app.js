/**
 * Created by mihai on 6/19/15.
 */



var app = angular.module('AtkinsApp', []);


app.controller('menu_controller', ['$scope', '$filter', function($scope, $filter){
    $scope.floors = [
        {name: 'GROUND',
            resources: [
                {
                    text: ' scanner ',
                    positions: 0,
                    icon:'glyphicon glyphicon-camera',
                    badge:10,
                    done: false
                },
                {
                    text: 'printers',
                    positions: 0,
                    icon:'glyphicon glyphicon-print',
                    badge:9,
                    done: false
                },
                {
                    text: 'study rooms',
                    positions: [
                        {
                            name: 'G34',
                            position: 'absolute',
                            left: 260,
                            top: 300,
                            z: 1
                        }
                    ],
                    icon:'glyphicon glyphicon-book',
                    badge:5,
                    done: false
                },
                {
                    text: 'restrooms',
                    positions: 0,
                    icon:'glyphicon glyphicon-info-sign',
                    badge:3,
                    done: false
                },
                {
                    text: 'fire exits',
                    positions: 0,
                    icon:'glyphicon glyphicon-fire',
                    badge:3,
                    done: false
                }
            ],
            image_loc: 'images/Ground.png',
            image_caption: 'Ground Floor - Atkins.',
            done: false
        },

        {name: '1st FLOOR',
            resources: [
                {
                    text: ' scanner ',
                    positions: 0,
                    icon:'glyphicon glyphicon-camera',
                    badge:10,
                    done: false
                },
                {
                    text: 'printers',
                    positions: 0,
                    icon:'glyphicon glyphicon-print',
                    badge:9,
                    done: false
                },
                {
                    text: 'study rooms',
                    positions: [
                        {
                            name: 'G34',
                            position: 'absolute',
                            left: 260,
                            top: 300,
                            z: 1
                        }
                    ],
                    icon:'glyphicon glyphicon-book',
                    badge:5,
                    done: false
                },
                {
                    text: 'restrooms',
                    positions: 0,
                    icon:'glyphicon glyphicon-info-sign',
                    badge:3,
                    done: false
                },
                {
                    text: 'fire exits',
                    positions: 0,
                    icon:'glyphicon glyphicon-fire',
                    badge:3,
                    done: false
                }
            ],
            image_loc: 'images/ground_study_3d.jpg',
            //image_loc: 'http://library.uncc.edu/sites/default/files/users/4/maps/1st_show.jpg',
            image_caption: 'First Floor - Atkins.',
            done: false
        },


        {name: '2nd FLOOR',
            resources: [
                {
                    text: ' scanner ',
                    positions: 0,
                    icon:'glyphicon glyphicon-camera',
                    badge:10,
                    done: false
                },
                {
                    text: 'printers',
                    positions: 0,
                    icon:'glyphicon glyphicon-print',
                    badge:9,
                    done: false
                },
                {
                    text: 'study rooms',
                    positions: [
                        {
                            name: 'G34',
                            position: 'absolute',
                            left: 260,
                            top: 300,
                            z: 1
                        }
                    ],
                    icon:'glyphicon glyphicon-book',
                    badge:5,
                    done: false
                },
                {
                    text: 'restrooms',
                    positions: 0,
                    icon:'glyphicon glyphicon-info-sign',
                    badge:3,
                    done: false
                },
                {
                    text: 'fire exits',
                    positions: 0,
                    icon:'glyphicon glyphicon-fire',
                    badge:3,
                    done: false
                }
            ],
            image_loc: 'http://library.uncc.edu/sites/default/files/users/4/maps/2nd_show.jpg',
            image_caption: 'Ground Floor - Atkins.',
            done: false
        },


        {name: '3rd FLOOR',
            resources: [
                {
                    text: ' scanner ',
                    positions: 0,
                    icon:'glyphicon glyphicon-camera',
                    badge:10,
                    done: false
                },
                {
                    text: 'printers',
                    positions: 0,
                    icon:'glyphicon glyphicon-print',
                    badge:9,
                    done: false
                },
                {
                    text: 'study rooms',
                    positions: [
                        {
                            name: 'G34',
                            position: 'absolute',
                            left: 260,
                            top: 300,
                            z: 1
                        }
                    ],
                    icon:'glyphicon glyphicon-book',
                    badge:5,
                    done: false
                },
                {
                    text: 'restrooms',
                    positions: 0,
                    icon:'glyphicon glyphicon-info-sign',
                    badge:3,
                    done: false
                },
                {
                    text: 'fire exits',
                    positions: 0,
                    icon:'glyphicon glyphicon-fire',
                    badge:3,
                    done: false
                }
            ],
            image_loc: 'http://library.uncc.edu/sites/default/files/users/4/maps/3rd_show.jpg',
            image_caption: 'Ground Floor - Atkins.',
            done: false
        }

    ];

    $scope.floor_style_current={color:'red'};
    $scope.floor_style_other={color:'#00703C'}
    $scope.number_floors = $scope.floors.length;
    $scope.count=0;
    $scope.floor_name='First floor';
    $scope.floor_image='http://library.uncc.edu/sites/default/files/users/4/maps/3rd_show.jpg';
    $scope.floor_caption='First Floor - Atkins.';

    /*$scope.gr_floor_res_nr = $scope.floors[1].resources.length;*/

    $scope.showFloors = function (index){
        $scope.floors[index].active = !$scope.floors[index].active; //create an active menu floor

        collapse_floor(index); //collapse the other floors
        console.log($scope.floor_name);
        $scope.floor_name=$scope.floors[index].name;
        $scope.floor_image=$scope.floors[index].image_loc;
        $scope.floor_caption=$scope.floors[index].image_caption;
        return $scope.floor_image;
    };

    var collapse_floor = function (index) {
        for (var i=0;i<$scope.number_floors;i++){
            if (i!=index){
                $scope.floors[i].active = false;
            }
        }
    };

    $scope.floor_style = function(index){
        if($scope.floors[index].active)
            return $scope.floor_style_current;
        else
            return $scope.floor_style_other;
    };


    $scope.showResource = function(index, floor){
        $scope.count=index;
        $scope.floor_name=floor.name;
        $scope.floor_image=floor.image_loc;
        $scope.floor_caption=floor.image_caption;
        return $scope.floor_image;
    };

    $scope.showCurrFloor = function(index){
        if($scope.floor_name==$scope.floors[index])
        return true;
    };

}]);


app.filter('getFloorResource', function() {
    return function(input, id) {
        var i=0, len=input.length;
        for (; i<len; i++) {
            if (+input[i].id == +id) {
                return input[i];
            }
        }
        return null;
    }
});

(function(angular) {
    'use strict';
    app.controller('ngResourceController', function ($scope) {
        $scope.a = 1;
        $scope.b = 2;
    });

})(window.angular);

app.controller('div_maker', [$scope, function($scope){
    var $newdiv1 = $( "<div id='object1' style ='height: 100px; width: 200px; background-color: blue'></div>" );
    newdiv2 = document.createElement( "div" ),
        $existingdiv1 = document.getElementById("buttons");
    console.log($newdiv1);
    console.log(newdiv2);
    console.log($existingdiv1);
    $( "body" ).append( $newdiv1, [ newdiv2, $existingdiv1 ] );
    }]);

angular.extend($scope, {
    defaults: {
        tileLayer: "images/tiles/{z}/{x}/{y}.jpg",
        maxZoom: 2,
        path: {
            weight: 10,
            color: '#800000',
            opacity: 1
        }
    }
});
