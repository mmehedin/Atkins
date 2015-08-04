

//Walkability matrix. Zero is walkable, One is not

//var PF = require('pathfinding');

//constructor

//function myObject(){
//    this.iAm = 'anObject';
//    this.whatIAm = function(){
//        //alert('I am' +  this.iAm);
//    }
//}




var imag = [
            //'http://library.uncc.edu/sites/default/files/users/4/maps/ground.jpg',
            //'http://library.uncc.edu/sites/default/files/users/4/maps/1st.jpg',
            //'http://library.uncc.edu/sites/default/files/users/4/maps/2nd.jpg'
            
            ];


var View = {
nodeSize: 30, // width and height of a single node, in pixels
nodeStyle: {
normal: {
fill: 'white',
    'stroke-opacity': 0.2, // the border
    'opacity':0.1
},
blocked: {
fill: 'grey',
    'stroke-opacity': 0.2,
    'opacity':.8
},
start: {
fill: '#0d0',
    'stroke-opacity': 0.2,
    'opacity':1
},
end: {
fill: '#e40',
    'stroke-opacity': 0.2,
    'opacity':1
},
opened: {
fill: '#98fb98',
    'stroke-opacity': 0.2,
},
closed: {
fill: '#afeeee',
    'stroke-opacity': 0.2,
},
failed: {
fill: '#ff8888',
    'stroke-opacity': 0.2,
},
tested: {
fill: '#e5e5e5',
    'stroke-opacity': 0.2,
},
},
nodeColorizeEffect: {
duration: 50,
},
nodeZoomEffect: {
duration: 2000,
    //transform: 's1.2', // scale by 1.2x
    //transformBack: 's1.0',
},
pathStyle: {
stroke: 'red',
    'stroke-width': 3,
    'opacity':1
},
    
}









var matrix = [1,0];

var Gr,g, grid_set, square,
X_dimension = 360, Y_dimension = 360, X_min, X_max, Y_min, Y_max;
var grid = new PF.Grid(get_matrix());
var finder = new PF.AStarFinder();
//Find path from (0, 0) to (4, 2)
var start_x_px = 0, start_y_px = 0
end_x_px = 180, end_y_px = 180;
var path = finder.findPath(Math.floor(start_x_px/View.nodeSize), Math.floor(start_y_px/View.nodeSize), Math.floor(end_x_px/View.nodeSize), Math.floor(end_y_px/View.nodeSize), grid);

function get_matrix(){
    for (k =0; k<360/View.nodeSize; k++)
        for (l = 0; l<360/View.nodeSize;l++)
            matrix[k,l] = Math.floor((Math.random() * 1));
    return matrix;
}

function init(){
    var a_grid = new the_grid();
}

//constructor node
var node_constr = function (Gr, i, j){
    
    this.y=View.nodeSize*i; //coordinates of the tile
    this.x=View.nodeSize*j;
    this.walkable = matrix[i][j];
    this.sq = Gr.rect(this.x, this.y, View.nodeSize, View.nodeSize, 6).attr({
                                                                            fill: "blue"
                                                                            });
    
    //console.log(this.x+" "+this.y);
    //console.log(path[path.length-1][1]+" "+path[path.length-1][0]);
    this.sq.attr(View.nodeStyle.normal);
    
    //path_4.attr({fill: "url(images/tiles.jpg)"});
    
    this.sq.attr({
                 cursor: 'pointer',
                 }).mouseover(function(e) {
                              this.animate({
                                           transform: 's1.2'
                                           });
                              this.attr({'opacity':1});
                              }).mouseout(function(e) {
                                          this.animate({
                                                       transform: 's1.0'
                                                       });
                                          this.attr({'opacity': 0.1});
                                          console.log(this.getAttribute('View.nodeStyle'));
                                          
                                          //this.attr('fill', 'blue');
                                          }).mouseup(function(e) {
                                                     //alert("clicked");
                                                     //alert(matrix[i][j]);
                                                     console.log(matrix[i][j]);
                                                     
                                                     
                                                     });
    //this.sq.animate({rotation: 360, 'stroke-width': 1}, 2000, 'bounce', function() {
    /* callback after original animation finishes */
    //            this.animate({
    //                       rotation: -90,
    //                     stroke: '#3b4449',
    //                   'stroke-width': 3
    //                 }, 1000);
    //  });
    this.sq.click(function(evt){
                  this.animate(matrix[i][j]==1 ? View.nodeStyle.normal : View.nodeStyle.blocked, 1000, "bounce");
                  //matrix[i][j]==1 ? this.attr('fill','white'): this.attr('fill','grey');
                  matrix[i][j]==1 ? matrix[i][j]=0: matrix[i][j]=1;
                  });
    
}

node_constr.prototype.rem_node = function(){
    //this.sq.node.onclick = function() {
    //text.animate({opacity: 1}, 2000);
    // this.animate({opacity: 0}, 2000, function() {
    this.sq.remove();
    //       });
    //}
}

//the start tile subclass of node_constr
var start_node = function(Gr, i, j){
    node_constr.call(this, Gr, i, j);
    //setting the start node properties
    this.sq.attr(View.nodeStyle.start);
    this.label = Gr.text(this.x+View.nodeSize/2, this.y+View.nodeSize/2, "Start");
    //node_constr.prototype.anim.call(this);
}


//the  end tile subclass of node_constr
var end_node = function(Gr, i, j){
    node_constr.call(this, Gr, i, j);
    //setting the start node properties
    this.sq.attr(View.nodeStyle.end);
    this.label = Gr.text(this.x+View.nodeSize/2, this.y+View.nodeSize/2, "End");
}

//the blocked tile subclass of node_constr
var blocked_node = function(Gr, i, j){
    node_constr.call(this, Gr, i, j);
    //setting the start node properties
    this.sq.attr(View.nodeStyle.blocked);
}

//defining the grid
function load_grid(number_squares,  start_x, start_y, end_x, end_y){
    //console.log(number_squares+" "+start_x+" "+start_y+" "+end_x+" "+end_y+" "+div_x+" "+div_y);
    
    View.nodeSize = Math.floor(Y_dimension/number_squares);
    number_squares_y = Math.floor(Y_dimension/View.nodeSize);
    number_squares_x = Math.floor(X_dimension/View.nodeSize);
    
    matrix = new Array(number_squares_y);
    for (i=0; i<number_squares_y;++i){
        matrix[i] = new Array(number_squares_x);
        for(j = 0; j < number_squares_x; ++j)
            matrix[i][j]=0;
    }
    grid = new PF.Grid(matrix);
    finder = new PF.AStarFinder();
    path = finder.findPath(start_x,start_y,end_x, end_y, grid);
    
    Gr.clear();
    
    var a_grid = new the_grid();
}


function div_dimensions(){
    X_min = -180.0;
    X_max = 180.0;
    Y_min = -180.0;
    Y_max = 180.0;
    //console.log("Main dimensions: "+div_x+" "+div_y);
}


//this loads the grid
var the_grid = function (){
    //set x and y
    div_dimensions();
    
    
    
    //drag properties
    var start_point = function(){
        this.an_x = this.attr("x");
        this.an_y = this.attr("y");
        this.animate({opacity:0.25}, 500, ">");
    },
    move = function(dx,dy){
        this.attr({x: this.an_x + dx, y: this.an_y + dy});
    },
    up = function(){
        this.animate({opacity: 1}, 500, ">");
    };

    Gr = Raphael(document.getElementById('the_grid'), "100%","100%");
    
    
    //var img = Gr.image("images/ground.jpg", 0, 0, "100%", "100%");
    var img = Gr.image(imag[2], 0, 0, "100%", "100%");
    //img.attr({ "clip-rect": "20,20,30,30" });
    //Gr.attr({fill: "url(http://library.uncc.edu/sites/default/files/users/4/maps/ground_show.jpg)"});
    
    grid_set = Gr.set(img).drag(move, start_point, up);
    grid_set.clear();
    
    var i=0, j=0, k=0, x=path[0][0], y=path[0][1],l,sq;
    
    g = new Array(matrix.length-1);
    
    for (i=0;i<g.length;++i)
        g[i] = new Array(matrix[1].length-1);
    i=0;
    //console.log(i);
    for(i=0;i<matrix.length;++i){
        
        for(j=0;j<matrix[i].length;++j){
            //console.log(x);
            //console.log("here");
            
            //adding the tiles to the grid
            if (matrix[i][j] == 1)
                square = new blocked_node(Gr, i, j);
            else if(i==path[0][1] & j==path[0][0]){
                square = new start_node(Gr, i, j);
            }
            else if(i==path[path.length-1][1] & j == path[path.length-1][0]){
                square = new end_node(Gr, i, j);
            }
            else
                square = new node_constr(Gr, i, j);
            
            
            grid_set.push(square);
            
            g.push(sq);
        }
    }
    
    // console.log(path);
    var curr_path = new the_path();
    
}

//the path
var the_path = function(){
    x=path[0][1]; y=path[0][0];
    for(i=0;i<path.length;++i){
        //console.log(path[0]);
        l =Gr.path("M"+(x*View.nodeSize +View.nodeSize/2)+" "+(y*View.nodeSize+View.nodeSize/2)+"L"+(path[i][0]*View.nodeSize+View.nodeSize/2)+" "+(path[i][1]*View.nodeSize+View.nodeSize/2));
        l.attr(View.pathStyle);
        //console.log(x+" "+y+" "+i+" "+j);
        
        y=path[i][1];
        x=path[i][0];
    }
}







