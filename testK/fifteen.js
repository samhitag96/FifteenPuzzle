var piece = Array.prototype.slice.call(document.querySelectorAll('.game-piece')); //returns a NodeList, index starts at 0
var shuffledPieces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var main = document.getElementById('main');

var find;
var piece;
var emptyX = '300px';
var emptyY = '375px';
var im = ["url(\"./star1.jpg\")",
"url(\"star2.jpg\")",
"url(\"./star3.jpg\")",
"url(\"./star4.jpg\")",
"url(\"./star5.jpg\")",
"url(\"./star6.jpg\")",
"url(\"./star7.jpg\")",
"url(\"./star8.jpg\")",
"url(\"./star9.jpg\")",
"url(\"./star10.jpg\")",
"url(\"./star11.jpg\")",
"url(\"./star12.jpg\")",
"url(\"./star13.jpg\")",
"url(\"./star14.jpg\")",
"url(\"./star15.jpg\")"];

var tempEmpty = 15;
var tempI;
var currX;
var currY;
var x;
var check;
var switchXY = false;
function startPuzzle(){

    console.log("Button Clicked");
    //console.log(shuffledPieces.length);
    
   // var main = document.getElementById('main');
   // piece = main.getElemenstByTagName('div');
    piece[15].className = 'part';
    piece[15].style.border = "2px solid red";
    piece[15].style.height = "100px";
    piece[15].style.width = "100px";
    piece[15].style.top = 375+'px';
    piece[15].style.left = 300+'px';
    piece[15].style.background = null;
    piece[15].innerHTML = "";
    for (var i=0; i<piece.length-1; i++){ //run through all 15 pieces of the board
        piece[i].className = 'part'; 
        piece[i].style.left = (i%4*100)+'px';
        piece[i].style.top = ( parseInt((i/4)*100))+'px';
       // piece[i].style.backgroundPosition = '-'+ piece[i].style.left + ' ' + '-'+piece[i].style.top;
        piece[i].style.border = "2px solid black";
        piece[i].style.height = "100px";
        piece[i].style.width = "100px";
        //piece[i].style.backgroundImage = "url(\"./star.jpg\")";
        piece[i].style.backgroundImage = im[i];
        
        
       
    }
    //shuffledPieces = shuffle(shuffledPieces);
    //shuffleParts();
    
    //var list = document.querySelector('div'), i;
    for(var i = 0; i<piece.length;i++){
        piece[i].onclick = function(){
            console.log("clicked");
            console.log(parseInt(this.innerHTML));
            if( swap(parseInt(this.innerHTML)) ){
                    var tempIn = parseInt(piece[x].innerHTML);

                    console.log(" this click attempt " + tempIn);
                    //'piece[tempEmpty].innerHTML = tempIn;
                    //piece[x].innerHTML = "";
                    
                   
                    var temp = piece[x];
                    piece[x] = piece[tempEmpty];
                    piece[tempEmpty] = temp; //switched properties here already

                     

                    var temp = piece[x].style.top;
                    piece[x].style.top = emptyY;
                    emptyY = temp;
                    temp = piece[x].style.left;
                    piece[x].style.left = emptyX;
                    emptyX = temp;//switched locations

                    
                    
                    console.log("tempEMpty " + tempEmpty + " index X " + x);
                    temp = x;
                    x = tempEmpty;
                    tempEmpty = temp;
                    console.log("tempEMpty " + tempEmpty + " index X " + x);

                    tempX = emptyX; //temp locaiton is where empty was
                    tempY = emptyY;

                    emptyX = this.style.left; //empty is now where teh click was
                    emptyY = this.style.top;

                    
                    console.log("swap's inner at " + x + " " +  parseInt(piece[x].innerHTML));
                    console.log(" empty's inner at  " + tempEmpty+ " is " + parseInt(piece[tempEmpty].innerHTML));
                    
                    
                    
                    //piece[x].innerHTML = tempIn;
                    
                    switchXY = true;
                    //console.log("left is " + this.style.left + " Y is "  + this.style.top);
                    startPuzzle();

                /*

                //var temp = piece[x].style.top;
                console.log(" swtiching array number " + x);
                var temporaryValue = piece[x];
     
    

                var currentImg = piece[x].style.backgroundImage;
                var currentX = piece[x].style.left;
                var currentY = piece[x].style.top;
                //var currentBG = piece[x].style.backgroundPosition;
                var currentName= piece[x].className;
                var currentIn = piece[x].innerHTML;
                console.log(" ");
                console.log("current index position" + currentX + " " + currentY);
                console.log("current inner HTML = " + currentImg);
                console.log(" ");
               
                temporaryValue.style.left = currentX;
                temporaryValue.style.top = currentY;
                //temporaryValue.style.backgroundPosition = currentBG;
                temporaryValue.style.backgroundImage = currentImg;
                temporaryValue.className = currentName;
                temporaryValue.innerHTML = currentIn;
                console.log("temp vals are: " + temporaryValue.className + " x " + temporaryValue.style.left + " y " + temporaryValue.style.top + " inner " + temporaryValue.innerHTML);
                piece[x] = piece[tempEmpty];
          
                var empImg = null;
                var empX = piece[tempEmpty].style.left;
                var empY = piece[tempEmpty].style.top;
                //var empBG = piece[tempEmpty].style.backgroundPosition;
                var empName= "empty";
                var empIn = "";
                //console.log(" ");
                 //console.log("Random index position" +  randX + " " + randY);
               //  console.log("random new inner HTML = " + randImg);
               // console.log(" ");
               
                piece[x].style.left = empX;
                piece[x].style.top = empY;
               // piece[x].style.backgroundPosition = empBG; 
                piece[x].style.backgroundImage = empImg;
                piece[x].className = empName;
                piece[x].innerHTML = empIn;

                console.log(" swapped image is "  +  piece[x].style.backgroundImage + " x " + piece[x].style.left + " y " + piece[x].style.top);
                
                    piece[tempEmpty] = temporaryValue;
                console.log(" current inner html is " + piece[x].innerHTML + " at place " + x );
                    var tempImg = temporaryValue.style.backgroundImage;
                    var tempX = temporaryValue.style.left;
                    var tempY = temporaryValue.style.top;
                   // var tempBG = temporaryValue.style.backgroundPosition;
                    var tempName = temporaryValue.className;
                    var tempIn = temporaryValue.innerHTML;

                    console.log("inner html is "  + temporaryValue.innerHTML)
                    piece[tempEmpty].style.left = tempX;
                    piece[tempEmpty].style.top = tempY;
                   // piece[tempEmpty].style.backgroundPosition = tempBG; 
                    piece[tempEmpty].style.backgroundImage = tempImg;
                    piece[tempEmpty].className = tempName;
                    piece[tempEmpty].innerHTML = tempIn;
                    
                    console.log( "temp empty " + tempEmpty);
                    console.log("new not empty is " +  piece[tempEmpty].style.backgroundImage+ " x " +piece[tempEmpty].style.left + " y " + piece[tempEmpty].style.top  + " inner " + piece[tempEmpty].innerHTML);
           
                    var temp = piece[x].style.top;
                    piece[x].style.top = emptyY;
                    emptyY = temp;
                    temp = piece[x].style.left;
                    piece[x].style.left = emptyX;
                    emptyX = temp;


                    console.log(" swapped image is "  +  piece[x].style.backgroundImage + " x " + piece[x].style.left + " y " + piece[x].style.top);
                    this.style.left =  piece[x].style.left ;
                    this.style.top =  piece[x].style.top;
                    
           */
            }
            console.log("tempEMpty " + tempEmpty + " index X " + x);
            if(switchXY){
                piece[x].style.top = emptyX;
                piece[x].style.left = emptyY;
               // piece[x].innerHTML = this.innerHTML;
                piece[x].innerHTML = tempIn;
                console.log("swap's inner at "+ x + " " +  parseInt(piece[x].innerHTML));
                piece[tempEmpty].style.top = tempY;
                piece[tempEmpty].style.left = tempX;
               // this.innerHTML = "";
                console.log("empty's inner at "+ tempEmpty +" is "+this.innerHTML);
                temp = emptyX;
                emptyX = tempX;
                tempX = temp;

                temp = emptyY;
                emptyY = tempY;
                tempY = temp;
                startPuzzle();
            }
            
              switchXY = false;

        }


       // console.log(piece[i]);
      /*   piece[i].onclick = function(){
        pieceY = piece[i].style.top;
        pieceX = piece[i].style.left;
        if(moveable(pieceX, pieceY)){
            console.log("clicked thing has empty");
        }*/
        //tempI = i;
       // console.log(parseInt(piece[i].style.top));
       // console.log(i);
        

       //TEST 1 COMMENTED OUT
       /* piece[i].onclick = function(){
            //console.log("CLICKED " + this.style.top);
            console.log(" ");
            console.log("clicked this left is " + this.style.left);
            console.log("clicked this top is " +this.style.top);
            tempI = parseInt(this.innerHTML);

            var temp = i;
            console.log(i);
            console.log("about to swap number tempI " + tempI);
            //console.log(tempI);
            if(swap(this)){
                //var tempI = i;
                //tempI = parseInt(this.innerHTML); //get piece's number
                //console.log("about to swap number tempI " + tempI);
                tempI--;
                console.log("about to swap number tempI array place " + tempI);
                 if(x == "left"){
                    tempEmpty = tempI-1; //set the empty's numbered location
                   // tempI--;
                    if(tempEmpty==16){
                        tempEmpty = 15;
                    }
                    console.log("left empty in array at " +(tempEmpty));
                }else if(x== "right"){
                    tempEmpty = tempI+1; //set the empty's numbered location
                    console.log("right empty in array at " +(tempEmpty));
                }else if(x =="up"){
                    tempEmpty = tempI-4;
                    console.log("up empty in array at " +(tempEmpty));
                }else if(x == "down"){
                    tempEmpty = tempI+4;
                    console.log("down empty in array at " + (tempEmpty));
                }

                //swapping the indexes
                
                

               
                
               
                var tempX = this.style.left; //store current piece x location
                var tempY = this.style.top; //store current piece y location
                var tempImg = this.style.backgroundImage; //store current piece image

                var temp = tempI; //store current index temp 14
                console.log("tempX = this.style.left"  + tempX); 
                console.log("tempY = this.style.top " + tempY);
                
                
                //clear the swapped piece
                this.innerHTML = ""; //clear the to be swapped area
                this.style.backgroundImage = null; //clear the current click's location's image
                this.style.border = "2px solid red";
               // console.log(this.innerHTML);

                currY = piece[tempEmpty].style.top; //move current to previously empty's y location
                currX = piece[tempEmpty].style.left; //move current to previously empty's x location
                
                //swap indexes here
                tempI = tempEmpty; //tempI 15
                tempEmpty = temp; //tempE = 14

                piece[tempEmpty].style.top = tempY; //move empty to current click y location
                piece[tempEmpty].style.left = tempX; //move empty to current click's x location

                console.log("taken piece[empty] currX "  + currX + " and taken piece[empty] currY "  + currY);
                
                piece[tempI].style.left = currX;
                piece[tempI].style.top = currY;
                piece[tempI].style.backgroundImage = tempImg; //give the previously empty the swapped image
                piece[tempI].innerHTML = tempI; //set the number to the empty's place
                piece[tempI].style.border = "2px solid black";
                
                emptyX = tempX; //set the new empty x
                emptyY = tempY; //set the new empty y
                piece[tempI].className = "part";
                piece[tempEmpty].className = "empty";
              
                
                
            }

            //this.style.left = currX;
            //this.style.top = currY;
            console.log("currY " + currY + " currX " + currX);

           
            console.log(this.style.left);
            console.log(this.style.top);
            console.log(" ");
            console.log("new empty at piece[empty] " + tempEmpty);
                
                
                
            console.log("swapped");
            console.log("outside if = new swapped this.style.top " + this.style.top + " new swapped this.style.left " + this.style.left);
            console.log("new empty image should be " + piece[tempEmpty].style.backgroundImage);

            console.log("empty's new emptyY: " + piece[tempEmpty].style.top + " new emptyX: " + piece[tempEmpty].style.left );
        }*/

        
        
    }
    //startPuzzle();

        
    //piece[i].onclick = swap(piece[i]);
    //shuffleParts();
  // shuffleParts();
}
function shuffleParts(){
   // console.log(" ");
   // console.log("SHUFFLING...");
   // console.log(" ");
    piece = shuffle(piece);

    startPuzzle();
    for(var i = 0; i<piece.length;i++){
        console.log(piece[i]);
    }
    
}
function swap(i){
    part = i-1;
    //console.log(" ");
    //console.log("in swap"+part);
    
   // if(moveable(part)){
    var up = (parseInt(piece[part].style.top))+100;
    var down= (parseInt(piece[part].style.top))-100;
    var left = (parseInt(piece[part].style.left))+100;
    var right = (parseInt(piece[part].style.left))-100;
    var leftTop = (parseInt(piece[part].style.top))+25;
    var rightTop = (parseInt(piece[part].style.top))-25;

    var pieceX = parseInt(piece[part].style.left);
    var pieceY =  parseInt(piece[part].style.top);
   // console.log("piece location is top " + pieceY + " and " + pieceX );
    //console.log("hope the empty is at up " + up + "left " + left + " down " + down + " or right " + right);

    //console.log("empty's true location is at "  + emptyY + " and " + emptyX);

        if((moveable(up, pieceX, 100, 0))==(part)){
            console.log("hit, empty will be moving up");
            return true;
        }
        if((moveable( down,  pieceX, -100,0))==(part)){
            console.log("hit, empty will be moving down");
            return true;
        }
        if((moveable(leftTop, left, 25,100))==(part)){
            console.log("hit, empty will be moving left");
            return true;
        }
        if((moveable( rightTop, right,-25, -100))==(part)){
            console.log("hit, empty will be moving right");
            return true;
        }
        
    //}
    
        
     /*   var tempX = part.style.left;
        var tempY = part.style.top;
        part.style.top = emptyY;
        part.style.left = emptyX;

        emptyX = tempX;
        emptyY = tempY;

        console.log("new empty left/right: " + emptyX + " top/bottom " + emptyY);
        console.log(" ");
        console.log("newly swapped to left/right " + part.style.left + " top/bottom " + part.style.top);
        console.log("empty's top/bottom val: " + parseInt(emptyY) + " left/right val: " + parseInt(emptyX));
       */
       
        
    



   /* if(moveable(part)){
        console.log("can be swapped!");
    }*/
}
function moveable(spaceToCheckY, spaceToCheckX, adjY, adjX){
    var checkX = parseInt(emptyX);
    var checkY = parseInt(emptyY);

    

    //console.log("piece location is Y " + spaceToCheckY + " and X " + spaceToCheckX );

    if( (spaceToCheckY == checkY) && ( spaceToCheckX == checkX)  ){ 
        for(var i =0; i<piece.length; i++){
            //console.log(" "); 
            //console.log("piece Y at "+ i + " is " +piece[i].style.top + " X " + piece[i].style.left);
            var compX = parseInt(piece[i].style.left);
            var compY = parseInt(piece[i].style.top);
            if( ((compY+adjY)==checkY) && ((compX+adjX)==checkX)) {
                //console.log("piece top at "+ i + " is " +piece[i].style.top + " left " + piece[i].style.left);
                
                
                //console.log(" ");
                //console.log("empty at " + checkY + "and " + checkX);
                //console.log("matches "  + compY + " and "  + compX);

                //console.log(" matching piece is at " + parseInt(piece[i].innerHTML));
                
                x =  parseInt(piece[i].innerHTML);
                x--;
                return (x);

            }
        }
    }


    //locations to compare
    //var toSubY = part.style.top;
    //var toSubX = part.style.left;
  /* */
    //comp.style.border = "2px solid green";
    
   // console.log(" ");
   // console.log("values of up: " + up + " down: " + down + " left: " + left + " right: " + right);
    //console.log(" ");

    //console.log("top " + toSubY + " left/right: " + toSubX);
    //return true;
    //return true;
    
    /*
    var checkX = parseInt(emptyX);
    var checkY = parseInt(emptyY);
    //var checkY = 300;
    console.log(" ");
    console.log("in moveable"+part);
    //console.log("empty's top/bottom val: " + parseInt(emptyY) + " left/right val: " + parseInt(emptyX));
    //if( (checkX>0)||(checkX<300)||(checkY>0)||(checkY<300) ){
        console.log(" ");
        console.log("in moveable"+part);
        for(var i =0; i<piece.length; i++){
            
            console.log("piece top at "+ i + " is " +piece[i].style.top + " left " + piece[i].style.left);

            console.log("piece to check is " + emptyY + " and x " + emptyX );
            if( ((parseInt(piece[i].style.top) + 25) == checkY) && ( (parseInt(piece[i].style.left) + 100)==checkX)  ){ 
                console.log("checked left piece");
                //tempI = parseInt(part.innerHTML);
                   // x = "left";
                console.log("piece top at "+ i + " is " +piece[i].style.top + " left " + piece[i].style.left);


                   x=i;
                    return i;
            }//else if( ((parseInt(emptyX)) == right) &&  (parseInt(emptyY) == rightTop)){ //chck right
            if( ((parseInt(piece[i].style.top) -25) == checkY) && ( (parseInt(piece[i].style.left)-100)==checkX)  ){ 
                console.log("checked right piece");
                console.log("piece top at "+ i + " is " +piece[i].style.top + " left " + piece[i].style.left);
                //tempI = parseInt(part.innerHTML);
                   // x = "right";
                   x=i;
                    return i;
            }
            //if( ((parseInt(emptyY)) == up) && (parseInt(part.style.left)==emptyX)){ //check up
            
            if( ((parseInt(piece[i].style.top) + 100) == checkY) && (parseInt(piece[i].style.left)==checkX)){
                console.log("checked top piece");
                console.log("piece top at "+ i + " is " +piece[i].style.top + " left " + piece[i].style.left);
            // tempI = parseInt(part.innerHTML);
                //x = "up";

                x=i;
                return i;
            } 
            //else if( ((parseInt(emptyY)) == down)&& (parseInt(part.style.left)==emptyX) ){ //down
            if( ((parseInt(piece[i].style.top) - 100) == checkY) && (parseInt(piece[i].style.left)==checkX) ){ 
                console.log("checked down piece");
                console.log("piece top at "+ i + " is " +piece[i].style.top + " left " + piece[i].style.left);
                //tempI = parseInt(part.innerHTML);
                    //x = "down";
                    x=i;
                    return i;
            }
        // else if( ((parseInt(emptyX)) == left) && (parseInt(emptyY) == leftTop) ){ //check left
           
             //no moveable available
                    
            
        }
    //}   console.log(" ");
                   // console.log("values of up: " + up + " down: " + down + " left: " + left + " right: " + right);
                    console.log("empty's top/bottom val: " + emptyY + " left/right val: " + emptyX);
                    x = -1;
                    return -1;
    



*/












}

function move(){
    var checkX = parseInt(emptyX);
    var checkY = parseInt(emptyY);

    if(checkY<300){
        for(var i =0; i<piece.length; i++){
            if( ((parseInt(piece[i].style.top) - 100) == checkY) && (parseInt(piece[i].style.left)==checkX) ){ 
                return i;
            }
        }
    }
    
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      
      console.log("this is current index" + " " + currentIndex);
      console.log("this is random index" + " " + randomIndex);
      console.log("this is top of current Index" + "" + piece[currentIndex].style.top);
      
      if(piece[randomIndex].style.top = emptyY){
            piece[randomIndex].style.backgroundImage = null;   
      }
      
   
      // And swap it with the current element.
      
      temporaryValue = array[currentIndex];
     
    

      var currentImg = array[currentIndex].style.backgroundImage;
      var currentX = array[currentIndex].style.left;
      var currentY = array[currentIndex].style.top;
      var currentBG = array[currentIndex].style.backgroundPosition;
    
      //console.log(" ");
       //console.log("current index position" + currentX + " " + currentY);
       // console.log("current inner HTML = " + currentImg);
       //console.log(" ");
     
      temporaryValue.style.left = currentX;
      temporaryValue.style.top = currentY;
      temporaryValue.style.backgroundPosition = currentBG;
      temporaryValue.backgroundImage = currentImg;
      
      array[currentIndex] = array[randomIndex];

      var randImg = array[randomIndex].style.backgroundImage;
      var randX = array[randomIndex].style.left;
      var randY = array[randomIndex].style.left;
      var randBG = array[randomIndex].style.backgroundPosition;

      //console.log(" ");
       //console.log("Random index position" +  randX + " " + randY);
     //  console.log("random new inner HTML = " + randImg);
     // console.log(" ");
     
      array[currentIndex].style.left = randX;
      array[currentIndex].style.top = randY;
      array[currentIndex].style.backgroundPosition = randBG; 
      array[currentIndex].style.backgroundImage = randImg;

      array[randomIndex] = temporaryValue;

      var tempImg = temporaryValue.style.backgroundImage;
      var tempX = temporaryValue.style.left;
      var tempY = temporaryValue.style.top;
      var tempBG = temporaryValue.style.backgroundPosition;
      
      array[randomIndex].style.left = tempX;
      array[randomIndex].style.top = tempY;
      array[randomIndex].style.backgroundPosition = tempBG; 
      array[randomIndex].style.backgroundImage = tempImg;
     
      
    }
   // for(var i = 0; i<array.length; i++){
        //console.log(array[i].innerHTML);
    //}
  
    return array;
  }
  function checkInnerThings(){
      for(var i = 0; i<piece.length; i++){
          console.log(piece[i].innerHTML);
      }
  }
