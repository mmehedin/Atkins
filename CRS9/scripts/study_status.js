
/*
 Retrieve room availability as a boolean value
 */
var data_room='null', data_inf='null', room_link, room_status, room_availability = {}, room_inf = {};


function retrieve_room_status(){
    for(var f in featureMap)
        if (featureMap.hasOwnProperty(f)){
            room_available(featureMap[f].feature.RoomID);
            //console.log(f +"-->"+room_availability[featureMap[f].feature.RoomID]);
            //            room_available(layer.feature.RoomID);
        }
}

function room_available(room_number){
            if (room_number!='null')
                $.ajax({
                       url: 'https://library.uncc.edu/groupstudy/spaces/services/maps/index/availability/RoomID/'+room_number,
                       dataType: 'json',
                       success: function( data ) {
                        //console.log( 'SUCCESS: ', data );
                       data_room = data;
                            //data_room = JSON.parse(data);
                            //room_link  = data_room.link;
                            //room_status = data_room.status;
                            //console.log(data_room);
                       room_availability[room_number] =data_room;
                       //console.log(room_availability[room_number]);
                                return data;
                            },
                       error: function( data ) {
                                    console.log( 'ERROR: ', data );
                            }
                       
                       });
            else
                room_availability[room_number] =data_room;
    return data_room;
}


/**
 Retrieving room information for all "active" rooms and caching it
 */
function retrieve_room_info(){
        $.ajax({
                   url: 'https://library.uncc.edu/groupstudy/spaces/services/maps/index/rooms',
                   dataType: 'json',
                   success: function( data_i ) {
                   console.log( 'SUCCESS: ', data_i );
                   data_inf = data_i;
                   //data_room = JSON.parse(data);
                   //room_link  = data_room.link;
                   //room_status = data_room.status;
                   console.log(data_i);
                    for(var k=0, l=data_i.length; k<l; k++){
                            //console.log(data_i[k]);
                            room_inf[data_i[k].RoomID] = data_i[k];
                            //console.log(room_inf[room_number] +"-->"+room_inf[data_i[k].RoomID]);

                       }
                   //room_inf[room_number] =data_inf;
                   //console.log(room_inf[room_number]);
                   return data_i;
               },
                   error: function( data_i ) {
                   console.log( 'ERROR: ', data_i );
               }
               
               });

    return data_inf;
}

/**
 Retrieving information cached for a specific room ID
 */
function room_information(room_number){
    if(room_number != 'null')
        return room_inf[room_number];
    else
        return null;
}