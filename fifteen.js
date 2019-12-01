var piece; 
var notify;
var timer;
var emptyY;
var emptyX;
var mario = document.getElementById("myAudio");
var bg = false;
var y = document.getElementById("winnerAudio");
function playAudio(){
    mario.play();
}
function win()
{ 
    mario.pause();
    y.play();
    document.getElementById("winner").src ="win.gif";
}
window.onload = function(){
    var puzzleArea = document.getElementById('main');
    piece = puzzleArea.getElementsByTagName('div');
    for (var i=0; i<piece.length; i++)
	{
	 piece[i].className = 'piece';

	 piece[i].style.left = (i%4*100)+'px'; 
	 piece[i].style.top = (parseInt(i/4)*100) + 'px'; 

	 piece[i].style.backgroundPosition= '-' + piece[i].style.left + ' ' + '-' + piece[i].style.top; 
		
	 piece[i].onclick = function() 
		{
			if (checkMove(parseInt(this.innerHTML))) 
			{
				swap(this.innerHTML-1); 
				if (finish()) 
				{
					win(); 
				}
				return;
			}
		};
    }
    
    var change = document.getElementById('changeBG');
    change.onclick = function(){
        bg = !bg;
        for(var i=0; i<piece.length; i++){
            if(bg){
                piece[i].style.backgroundImage = "url('super-mario.jpg')";
            }else{
                piece[i].style.backgroundImage = "url('star.jpg')";
            }
            
        }
       
    };
	var shuffle = document.getElementById('shufflebutton'); 
	emptyX = '300px'; 
    emptyY = '300px';
    
	shuffle.onclick = function() 
	{
        

        playAudio();
        for (var i=0; i<300; i++) 
		{
            var rand = parseInt(Math.random()* 100)%4; 
            var holdX = parseInt(emptyX);
            var holdY= parseInt(emptyY);
           
            var goup =holdY > 0;
            var godown = holdY < 300;
            var goleft = holdX > 0;
            var goright = holdX <300; 
            //console.log(emptyY + " and " + emptyX);
			if (rand == 0)
			{
                var temp = moveable(holdY,holdX,  100, 0, goup); 
                //x++;
                console.log(temp);
				if ( temp != -1)
				{
					swap(temp);
				}
			}
			if (rand == 1)
			{
                var temp = moveable(holdY,holdX, -100,0, godown);
                //x++;
                console.log(temp);
				if ( temp != -1) 
				{
					swap(temp);
				}
			}
			if (rand == 2)
			{
                var temp = moveable(holdY,holdX, 0,100, goleft);
                //x++;
                console.log(temp);
				if ( temp != -1)
				{
					swap(temp);
				}
			}
			if (rand == 3)
			{
                var temp = moveable(holdY,holdX, 0, -100, goright);
                //x++;
                console.log(temp);
				if (temp != -1)
				{
					swap(temp);
				}
			}
        }
		      

    };

    var cheat = document.getElementById('cheatbutton');
    cheat.onclick = function(){

        var resetArea = document.getElementById('main');
        place = resetArea.getElementsByTagName('div');
        for (var i=0; i<place.length; i++) 
    
        {
    
            place[i].className = 'place'; 
    
            place[i].style.left = (i%4*100)+'px'; 
    
            place[i].style.top = (parseInt(i/4)*100) + 'px'; 
    
            place[i].style.backgroundPosition= '-' + place[i].style.left + ' ' + '-' + place[i].style.top; 
        }
        win(); 

    };
};
function checkMove(coordinate) 
{
    coordinate = coordinate-1;
    var up = (parseInt(piece[coordinate].style.top))+100;
    var down= (parseInt(piece[coordinate].style.top))-100;
    var left = (parseInt(piece[coordinate].style.left))+100;
    var right = (parseInt(piece[coordinate].style.left))-100;
    
    
    var pieceX = parseInt(piece[coordinate].style.left);
    var pieceY =  parseInt(piece[coordinate].style.top);
    var holdX = parseInt(emptyX);
            var holdY= parseInt(emptyY);
            var goup =holdY > 0;
            var godown = holdY < 300;
            var goleft = holdX > 0;
            var goright = holdX <300; 
    
        if((moveable(up, pieceX, 100, 0, goup))==(coordinate)){
            console.log("hit, empty will be moving up");
            //x--;
            return true;
        }
        if((moveable( down,  pieceX, -100,0, godown ))==(coordinate)){
            console.log("hit, empty will be moving down");
            //x--;
            return true;
        }
        if((moveable(pieceY, left, 0,100, goleft))==(coordinate)){
            console.log("hit, empty will be moving left");
            //x--;
            return true;
        }
        if((moveable( pieceY, right,0, -100, goright))==(coordinate)){
            console.log("hit, empty will be moving right");
            //x--;
            return true;
        }
    console.log(coordinate);
    console.log("in moveable compare to" + piece[coordinate].style.left + " and " + piece[coordinate].style.top);
    console.log("in moveable empty " + emptyX + " and " + emptyY);


}
function moveable(spaceToCheckY, spaceToCheckX, adjY, adjX, cond){
    var checkX = parseInt(emptyX);
    var checkY = parseInt(emptyY);

    console.log("in moveable empty " + checkX + " and " + checkY);

    //console.log("piece location is Y " + spaceToCheckY + " and X " + spaceToCheckX );
     //console.log("in moveable " + checkX + " and " + checkY + " and " + spaceToCheckX + " and " + spaceToCheckY);

    
    if( (spaceToCheckY == checkY) && (spaceToCheckX == checkX) ){ 
        console.log("there was a match for the empty!");
        console.log("condition needs to be " + parseInt(cond) + " and the empty is " + checkX + " and " +checkY);
        if(cond){

            console.log("condition passed go " + cond);
            for(var i =0; i<piece.length; i++){
                // console.log(" "); 
                // console.log("give back " + i);
                 //console.log("piece Y at "+ i + " is " +piece[i].style.top + " X " + piece[i].style.left);
                 var compX = parseInt(piece[i].style.left);
                 var compY = parseInt(piece[i].style.top); 
                 console.log("in moveable compare to" + piece[i].style.left + " and " + piece[i].style.top);
                 console.log("in moveable empty " + checkX + " and " + checkY);
                 if((( compY+adjY)==checkY) && ((compX+adjX)==checkX)){
                     x =  parseInt(piece[i].innerHTML);
                     x--;
                     console.log("returning " + x);
                     return (x);
                 }
             }

             console.log("in moveable empty " + compX + " and " + compY);
        }else{
            console.log("problematic");
            return -1;
        }
        
    }
}

function swap (coordinate)
{
    //console.log("given coor" + coordinate);
	var temp = piece[coordinate].style.top;
    piece[coordinate].style.top = emptyY;
	emptyY = temp;
	temp = piece[coordinate].style.left;
    piece[coordinate].style.left = emptyX;
    emptyX = temp;
    
}
function finish() 

{

	var flag = true;

	for (var i = 0; i < piece.length; i++) 
	{

		var top = parseInt(piece[i].style.top);

		var left = parseInt(piece[i].style.left);


		if (left != (i%4*100) || top != parseInt(i/4)*100) 

		{

			flag = false;

			break;

		}

	}

	return flag;

}



