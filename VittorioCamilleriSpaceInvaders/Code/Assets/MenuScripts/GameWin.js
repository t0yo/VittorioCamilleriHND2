var MenuSkin : GUISkin;


function OnGUI()
	{
	GUI.skin = MenuSkin;
	GUI.BeginGroup (Rect(Screen.width/2-50,Screen.height/2-50,100,150));
	GUI.Box(Rect(0,0,100,120),"You Won!");
	
	
		if(GUI.Button(Rect(10,30,80,30), "Main Menu"))
		{
			Application.LoadLevel("GameMenu");
			
			var menuMusic : GameObject = GameObject.Find("MenuMusic");
		    if (menuMusic) 
		    {
        		 Destroy(menuMusic);
   			}
		 
		}
		
		
		if(GUI.Button(Rect(10,70,80,30), "Exit"))
		{
			Application.Quit();
		}
		
		
		
	GUI.EndGroup();
	}