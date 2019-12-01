var piece; 
var notify;
var timer;
var emptyY;
var emptyX;

window.onload = function(){
    var puzzleArea = document.getElementById('main');
    piece = puzzleArea.getElementsByTagName('div');
    for (var i=0; i<piece.length; i++) //applies features to each puzzle piece 

	{

	 piece[i].className = 'puzzlepiece'; //setting up the puzzle piece code

	 piece[i].style.left = (i%4*100)+'px'; //calculates the position for puzzle pieces from the left of the screen

	 piece[i].style.top = (parseInt(i/4)*100) + 'px'; //calculates the position for puzzle pieces from the top of the screen

	 piece[i].style.backgroundPosition= '-' + piece[i].style.left + ' ' + '-' + piece[i].style.top; 
		//calculates the position of the background picture so in moves in relation to the puzzle pieces


	/* piece[i].onmouseover = function() //aplies features when mouse moves over puzzle pieces

		{
			if (checkMove(parseInt(this.innerHTML))) //checks whenever a move is made

			{

				/*this.style.border = "3px solid red"; //changes to red when a puzzle piece is near an empty empty

				this.style.color = "#006600"; //text color changes to green when a puzzle piece is near an empty empty

                this.style.textDecoration = "underline"; //underlines the number of the puzzle piece piece
                

                this.style.backgroundImage="url('star.jpg')"; 
                //sets the image for the puzzle's background 

			}

		};*/


	/* piece[i].onmouseout = function() //activates whenever mouse moves out of puzzle piece

		{

			this.style.border = "2px solid black"; //reverts to its original size border 

			this.style.color = "#000000"; //reverts to original text color

			this.style.textDecoration = "none"; //reverts to original text state

		};*/



	 piece[i].onclick = function() //activates when mouse clicks on a puzzle piece
		{
			if (checkMove(parseInt(this.innerHTML))) //checks whether or not the puzzle piece can move into an empty empty
			{
				swap(this.innerHTML-1); //moves into an empty empty if true
				if (finish()) //checks when the all the 15 pieces are in its right empty
				{
					//win(); //alerts the player that they have won the game
				}
				return;
			}
		};
	}
	var shuffle = document.getElementById('shufflebutton'); //initializes the shuffle button
	emptyX = '300px'; 
	emptyY = '300px';
	shuffle.onclick = function() //activates whenever the shuffle button is clicked
	{
		for (var i=0; i<300; i++) 
		{
			var rand = parseInt(Math.random()* 100) %4; //generates a random number for shuffling each piece
			if (rand == 0)
			{
				var temp = up(emptyX, emptyY); 
				if ( temp != -1)
				{
					swap(temp);
				}
			}
			if (rand == 1)
			{
				var temp = down(emptyX, emptyY);
				if ( temp != -1) 
				{
					swap(temp);
				}
			}
			if (rand == 2)
			{
				var temp = left(emptyX, emptyY);
				if ( temp != -1)
				{
					swap(temp);
				}
			}
			if (rand == 3)
			{
				var temp = right(emptyX, emptyY);
				if (temp != -1)
				{
					swap(temp);
				}
			}
		}
	};
};
function checkMove(position) // returns true whenever a piece can be moved into an empty empty
{
	if (left(emptyX, emptyY) == (position-1))
	{
		return true;
	}
	if (down(emptyX, emptyY) == (position-1))
	{
		return true;
	}
	if (up(emptyX, emptyY) == (position-1))
	{
		return true;
	}
	if (right(emptyX, emptyY) == (position-1))
	{
		return true;
	}
}

function win() //notifies user that they have won

{

	

}


function finish() //checks when the game reaches its end

{

	var flag = true;

	for (var i = 0; i < piece.length; i++) //for each puzzle piece 
	{

		var top = parseInt(piece[i].style.top);

		var left = parseInt(piece[i].style.left);


		if (left != (i%4*100) || top != parseInt(i/4)*100) //checks if each piece matches its left and top position

		{

			flag = false;

			break;

		}

	}

	return flag;

}



function left(x, y) //calculates how far to the left a puzzlepiece should position

{
	var cordX = parseInt(x);
	var cordY = parseInt(y);
	if (cordX > 0)
	{
		for (var i = 0; i < piece.length; i++) 
		{
			if (parseInt(piece[i].style.left) + 100 == cordX && parseInt(piece[i].style.top) == cordY)
			{
				return i;
			} 
		}
	}
	else 
	{
		return -1;
	}
}
function right (x, y) //calculates how far to the right a puzzlepiece should position
{
	var cordX = parseInt(x);
	var cordY = parseInt(y);
	if (cordX < 300)
	{
		for (var i =0; i<piece.length; i++){
			if (parseInt(piece[i].style.left) - 100 == cordX && parseInt(piece[i].style.top) == cordY) 
			{
				return i;
			}
		}
	}
	else
	{
		return -1;
	} 
}



function up(x, y) //calculates how far up a puzzlepiece should position
{
	var cordX = parseInt(x);
	var cordY = parseInt(y);
	if (cordY > 0)
	{
		for (var i=0; i<piece.length; i++)
		{
			if (parseInt(piece[i].style.top) + 100 == cordY && parseInt(piece[i].style.left) == cordX) 
			{
				return i;
			}
		} 
	}
	else 
	{
		return -1;
	}
}
function down (x, y) //calculates how far down a puzzlepiece should position
{
	var cordX = parseInt(x);
	var cordY = parseInt(y);
	if (cordY < 300)
	{
		for (var i=0; i<piece.length; i++)
		{
			if (parseInt(piece[i].style.top) - 100 == cordY && parseInt(piece[i].style.left) == cordX) 
			{
				return i;
			}
		}
	}
	else
	{
		return -1;
	} 
}
function swap (position) //moves the puzzle piece by switching position with an empty empty
{
	var temp = piece[position].style.top;
 piece[position].style.top = emptyY;
	emptyY = temp;
	temp = piece[position].style.left;
 piece[position].style.left = emptyX;
	emptyX = temp;
}

