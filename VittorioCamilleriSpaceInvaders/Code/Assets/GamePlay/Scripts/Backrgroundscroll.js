#pragma strict
var speed: float=0.0;
var backgroundgeneral:Material[];


function Start ()
{
	if (GameController.levelsPlayed==1) 
	{
		renderer.sharedMaterial=backgroundgeneral[0];
	}
	
	if (GameController.levelsPlayed==2) 
	{
		renderer.sharedMaterial=backgroundgeneral[1];
	}
	
	if (GameController.levelsPlayed==3)
	{
		renderer.sharedMaterial=backgroundgeneral[2];
	}
	
	if (GameController.levelsPlayed==4)
	{
		renderer.sharedMaterial=backgroundgeneral[3];
	}
	
	if (GameController.levelsPlayed==5)
	{
		renderer.sharedMaterial=backgroundgeneral[4];
	}
	
	if (GameController.levelsPlayed==6)
	{
		renderer.sharedMaterial=backgroundgeneral[5];
	}
}

function Update () 
{
	var	bgmove : float;
	bgmove = speed * Time.deltaTime;
	transform.Translate(Vector3.down * bgmove, Space.World);
	
	if (transform.position.y <-19.3)
	{
		transform.position = Vector3(transform.position.x, 1f, transform.position.z);
	}	
	
	
}