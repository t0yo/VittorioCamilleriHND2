#pragma strict

static var rows				:int		=3;
static var cols				:int		=5;
static var levelsPlayed			:int	=1;
var boss : Rigidbody;


function Awake()
{
	if(GameObject.FindGameObjectsWithTag("GameController").Length > 1)
	{
		Destroy(this);
	}
}


function BossIn()
{
	if(levelsPlayed==6)
	{
		Instantiate(boss);					
	}
	
}

function Start () 
{
	BossIn();
	MyUpdate ();	
	
					
}


function MyUpdate () 
{
while(true)
	{

		var numberOfAliens:int;
		if (levelsPlayed<6)
		{	
		numberOfAliens = GameObject.FindGameObjectsWithTag("enemy").Length;
		
			if (numberOfAliens <=0)
			{
				PlayerPrefs.SetInt("score",PlayerController.score);
				levelsPlayed++;
				rows++;
				Application.LoadLevel("GameLoad");
			}
			
		
		}
		
		
		if (PlayerController.health <=0)
		{
			Application.LoadLevel("GameOver");
			Destroy(this);
			PlayerController.health=3;
			PlayerController.score=0;
			ShieldController.ShieldHealth=3;
			PlayerController.shotsfired=0;
			PlayerController.shotsmissed=0;
			levelsPlayed = 1;
			rows=3;
			cols=5;
		}
		
		if (BossController.bossHealth<=0)
		{
			yield WaitForSeconds (5);
			Application.LoadLevel("GameWin");
			Destroy(this);
			PlayerController.health=3;
			PlayerController.score=0;
			ShieldController.ShieldHealth=3;
			PlayerController.shotsfired=0;
			PlayerController.shotsmissed=0;
			levelsPlayed = 1;
			rows=3;
			cols=5;
			
		}	

		
		
		yield;
	  }

}


		