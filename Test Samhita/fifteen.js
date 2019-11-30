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


function startPuzzle(){
  

    console.log("Button Clicked");
    //console.log(shuffledPieces.length);
    
   // var main = document.getElementById('main');
   // piece = main.getElemenstByTagName('div');
     piece[15].className = 'empty';
    piece[15].style.border = "2px solid red";
    piece[15].style.height = "100px";
    piece[15].style.width = "100px";
    piece[15].style.top = 375+"px";
    piece[15].style.left = 300+"px";
    
    

    

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
       // console.log(piece[i]);
      /* piece[i].onclick = function(){
        pieceY = piece[i].style.top;
        pieceX = piece[i].style.left;
        if(moveable(pieceX, pieceY)){
            console.log("clicked thing has empty");
        }*/

        console.log(parseInt(piece[i].style.top));
    
        piece[i].onclick = function(){
            //console.log("CLICKED " + this.style.top);
            swap(this);
        }
    }


        
    //piece[i].onclick = swap(piece[i]);
    //shuffleParts();
  // shuffleParts();
}
function shuffleParts(){
    console.log(" ");
    console.log("SHUFFLING...");
    console.log(" ");
    piece = shuffle(piece);
    

    startPuzzle();
    for(var i = 0; i<piece.length;i++){
        console.log(piece[i]);
    }
    
}
function swap(part){
    if(moveable(part)){
        
    }

checkIfWon();

   /* if(moveable(part)){
        console.log("can be swapped!");
    }*/
}
function moveable(part){
    //locations to compare
    //var toSubY = part.style.top;
    //var toSubX = part.style.left;
    var up = (parseInt(part.style.top))-100;
    var down=(parseInt(part.style.top))+100;
    var left = (parseInt(part.style.left))-100;
    var right = (parseInt(part.style.left))+100;

    
    //comp.style.border = "2px solid green";
    
    console.log(" ");
    console.log("values of up: " + up + " down: " + down + " left: " + left + " right: " + right);
    console.log(" ");

    //console.log("top " + toSubY + " left/right: " + toSubX);
    //return true;
    //return true;

   
    console.log("empty's top/bottom val: " + parseInt(emptyY) + " left/right val: " + parseInt(emptyX));
    
  if( (parseInt(emptyY)) == up){ //check up
        console.log("checked top piece");
        
        return true;
   } 
   else if( (parseInt(emptyY)) == down){ //down
    console.log("checked down piece");
       
        return true;
   }
   else if((parseInt(emptyX)) == left){ //check left
    console.log("checked left piece");
    
        return true;
   }else if((parseInt(emptyX)) == right){ //chck right
    console.log("checked right piece");
    
        return true;
   }
   else{ //no moveable available
       return false;
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
      
     // console.log("this is current index" + " " + currentIndex);
      //console.log("this is random index" + " " + randomIndex);
      //console.log("this is top of current Index" + "" + piece[currentIndex].style.top)
    
     
      var a = document.getElementById('one').innerHTML;
      var b = document.getElementById('two').innerHTML;
      var c = document.getElementById('three').innerHTML;
      var d = document.getElementById('four').innerHTML;
      var e = document.getElementById('five').innerHTML;
      var f = document.getElementById('six').innerHTML;
      var g = document.getElementById('seven').innerHTML;
      var h = document.getElementById('eight').innerHTML;
      var i = document.getElementById('nine').innerHTML;
      var j = document.getElementById('ten').innerHTML;
      var k = document.getElementById('eleven').innerHTML;
      var l = document.getElementById('twelve').innerHTML;
      var m = document.getElementById('thirteen').innerHTML;
      var n = document.getElementById('fourteen').innerHTML;
      var o = document.getElementById('fifteen').innerHTML;
      console.log("the number is " + a + b + c + d + e + f + g + h + i + j + k + l + m + n + o);
    
      var numbers = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o];
    
      if((piece[randomIndex].style.top = emptyY) && (piece[randomIndex].style.left = emptyX)){
                  
            piece[randomIndex].style.backgroundImage = 'none'; 
              
            // piece[currentIndex].style.top++;
            }
    else {
        piece[randomIndex].style.backgroundImage = piece[currentIndex].style.backgroundImage;
    }
           
            
      
      
      // And swap it with the current element.
      
      temporaryValue = array[currentIndex];
     
    

      var currentImg = array[currentIndex].backgroundImage;
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

      var randImg = array[randomIndex].backgroundImage;
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
      array[currentIndex].backgroundImage = randImg;

      array[randomIndex] = temporaryValue;

      var tempImg = temporaryValue.backgroundImage;
      var tempX = temporaryValue.style.left;
      var tempY = temporaryValue.style.top;
      var tempBG = temporaryValue.style.backgroundPosition;
      
      array[randomIndex].style.left = tempX;
      array[randomIndex].style.top = tempY;
      array[randomIndex].style.backgroundPosition = tempBG; 
      array[randomIndex].backgroundImage = tempImg;
     
      
    }
   // for(var i = 0; i<array.length; i++){
        //console.log(array[i].innerHTML);
    //}
  
    return array;
  }
 
  function win(){
    var y = document.getElementById("winnerAudio");
    y.play();
    
    document.getElementById("winner").src ="win.gif";
  }

var x = document.getElementById("myAudio");
  function playAudio(){
      x.play();
  }