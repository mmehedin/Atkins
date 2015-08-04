/**
 * Created by mihai on 6/19/15.
 */
/*
 Atkins,
 Author: Mihai Mehedint
 This script enables the user to dragg/reposition the divs in the window
 Also attributes functionality to hide-show buttons of divs
*/

$(function() {
    $( "#the_menu").draggable({ containment: "window" }, {opacity:0.8});
});


/*
$('#div2').ready(function(){
    $("#show_div1").hide();
    $("#hide_div1").click(function(){
        $("#div1").hide(1000);
        $("#hide_div1").hide();
        $("#show_div1").show();
    });
    $("#show_div1").click(function(){
        $("#div1").show();
        $("#show_div1").hide();
        $("#hide_div1").show();
    });
});


/*

function dragg($scope){
    $scope.show_floors_menu = true;
    $scope.showMenu = function(){
        $scope.show_floors_menu = !$scope.show_floors_menu;

        return $scope.show_floors_menu;
    }


}

*/


$('#floors_menu').ready(function(){
    $("#show_menu").hide();
    $("#hide_menu").click(function(){
        $("#floors_menu").hide(400);
        $("#hide_menu").hide();
        $("#show_menu").show();
        $("#the_menu").css({'width': '40px'});
    });
    $("#show_menu").click(function(){
        $("#floors_menu").show();
        $("#show_menu").hide();
        $("#hide_menu").show();
        $("#the_menu").css({'width': '310px'});
    });
});
