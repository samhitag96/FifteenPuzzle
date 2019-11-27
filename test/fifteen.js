const piece = document.querySelectorAll('.game-piece'); //returns a NodeList, index starts at 0
var shuffledPieces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


var find;
function startPuzzle(){

    console.log("Button Clicked");
    //console.log(shuffledPieces.length);
    
    
    
    for (var i=0; i<piece.length; i++){ //run through all 15 pieces of the board
        piece[i].className = 'part'; 
        piece[i].style.left = (i%4*100)+'px';
        piece[i].style.top = ( parseInt((i/4)*100))+'px';
        piece[i].style.backgroundPosition = '-'+ piece[i].style.left + ' ' + '-'+piece[i].style.top;
        //var shuf = getRandomInt(1,16);
       // console.log(shuf);
        console.log(piece[i]);
        //var num = (Math.random()*100)%4;
        //console.log(num);
        //var test = parseInt('300 px');
        //console.log(test);
       // var numWInt = parseInt(num);

        //console.log(numWInt);
        //shuffleParts();
        //piece[i].onclick = moveable(this.innerHTML);
    }
    //shuffledPieces = shuffle(shuffledPieces);
    console.log(" ");
    console.log("SHUFFLING...");
    console.log(" ");
    shuffledPieces = shuffle(piece);
    
    shuffleParts();
}
function shuffleParts(){
    //X = '300px';
    //Y = '300px';
    //for(var i = 0; i<; i++){

    //}
    //var shuf = getRandomInt(1,16);
    //var temp = shuf;
   /* shuffledPieces[0]=shuf;

    console.log("first entered " + shuffledPieces[0]);
    for(var i = 1; i<shuffledPieces.length;i++){
        shuf = getRandomInt(1,16); //get a new random number
        console.log("new " + (i+1) +" shuffle after entering for loop is " + shuf);
        temp = shuf;
        find = 1;
        do{

            shuffledPieces.find(function(element){ //check the array to see if the newly shfufled element is already in the array
                if(element == temp){ //if any elements == shuf, shuffle again
                    console.log("element match found in array, shuffling for new one, staying in the while...");
                    
                        temp = getRandomInt(1,16); 
        
                        console.log("new next shuffle is : " + temp);
                    
                    find = 1;
                    
                }else if(element!=temp){ //if the newly shuffled doesn't match any elements, exit loop with condition
                    shuf = temp;
                    console.log("found a new, unmatched number which is " + shuf + "! Exiting while!")
                    find = -1;
                };
                
            });
            
        }while(find != -1);

        shuffledPieces[i]=shuf;
    }*/


    for(var i = 0; i<shuffledPieces.length;i++){
        console.log(shuffledPieces[i]);
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
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
