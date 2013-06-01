var MenuSkin : GUISkin;

 

function OnGUI() 
{
		GUI.skin = MenuSkin;
	    GUI.Label(Rect(0,0,100,50),  	"Health: "+PlayerController.health);
	    GUI.Label(Rect(0,20,100,50), 	"Shield: "+ShieldController.ShieldHealth);
		GUI.Label(Rect(0,40,100,50), 	"Pilot: "+GameLoad.player);
		GUI.Label(Rect(0,60,100,50), 	"Level: "+GameController.levelsPlayed);
		GUI.Label(Rect(0,80,100,50),	"Missed:"+PlayerController.shotsmissed);
		GUI.Label(Rect(0,100,100,50),	"Score: "+PlayerController.score);
		GUI.Label(Rect(0,120,100,50),	"Shots: "+PlayerController.shotsfired);
		
		if(GameController.levelsPlayed==6)
		{
			GUI.color = Color.red;
			GUI.Label(Rect(600,0,100,50),  	"BOSS: "+BossController.bossHealth);
			
		}
		
		
    
}


	