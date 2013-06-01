var MenuSkin 			: GUISkin;
static var player	="";

function OnGUI()
{
	GUI.skin = MenuSkin;
	GUI.BeginGroup (Rect(Screen.width/2-50,Screen.height/2-50,300,300));
	
	
	if(GameController.levelsPlayed<=1)
	{	
		GUI.Box(Rect(0,0,200,120),"Controls");
		GUI.Label(Rect(30,20,200,120),"Space		:	Shoot");
		GUI.Label(Rect(30,40,200,120),"E				:	Shield");
		GUI.Label (Rect (30,60,200,120), "Pilot		:");
		player = GUI.TextField (Rect (110,60,60,20), player, 8);
		
		if (GUI.Button(Rect(40,80,100,30),"Start"))
		{
			Application.LoadLevel('GamePlay');
		}
	}
	
	else
	{	
		GUI.Box(Rect(0,0,200,120),"Stats");
		GUI.Label (Rect (30,20,200,120), "Name		:	"	+player);
		GUI.Label (Rect (30,40,200,120),"Level	"+GameController.levelsPlayed);
		
		if (GUI.Button(Rect(50,80,100,30),"Start"))
		{
			Application.LoadLevel('GamePlay');
		}
	
	}	
		
	GUI.EndGroup();
}

function Update()
{	
			
}

function Start()
{
}