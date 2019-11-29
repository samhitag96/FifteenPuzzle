var piece = Array.prototype.slice.call(document.querySelectorAll('.game-piece')); //returns a NodeList, index starts at 0
var shuffledPieces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var main = document.getElementById('main');

var find;
var piece;

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
    
    for (var i=0; i<piece.length; i++){ //run through all 15 pieces of the board
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
function moveable(){

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
