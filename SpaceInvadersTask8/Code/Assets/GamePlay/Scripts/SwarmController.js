#pragma strict

var leftborder:float=-17.0;

var rightborder:float=17;

var touchedrightwall:boolean=false;
var touchedleftwall:boolean=false;

var alien:Rigidbody;



function moveDown()
{
	
	transform.position.y--;
}


function createAliens(rows:int,cols:int)
{
	if (GameController.levelsPlayed<6)
	{
		for(var row=0;row<rows;row++)
		{
			
			for(var counter=0;counter<cols;counter++)
			{	
				
				
					var tempAlien:Rigidbody;
					tempAlien = Instantiate(alien,Vector3(counter*2,transform.position.y-row,1),Quaternion.identity);
					tempAlien.transform.parent = this.transform;
				
			}
		}
	
	}	
}



function Start () {

	createAliens(GameController.rows,GameController.cols);
	
	for(var counter=0;counter<5;counter++)
	{
		yield WaitForSeconds(10);
		moveDown();
	}
	

	
}

function Update () {

	
	if (transform.position.x > rightborder)
	{
		touchedrightwall=true;
	}
	
	if (transform.position.x < leftborder)
	{
		touchedleftwall = true;
	}
	
	if (touchedrightwall == false)
	{
		
		touchedleftwall = false;
		transform.Translate(Vector3.right * 5 * Time.deltaTime);
	}
	
	if (touchedrightwall == true)
	{
		transform.Translate(Vector3.left * 5 * Time.deltaTime);
	}
	
	if (touchedleftwall == true)
	{
		touchedrightwall = false;
		transform.Translate(Vector3.right * 5 * Time.deltaTime);
	}
		

	
	
}