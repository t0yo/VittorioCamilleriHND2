#pragma strict

var 		laser 				:Rigidbody;
static var 	health				:int=3;
static var	score				:int=0;
var			ShieldMesh			:Transform;
var			ShieldKeyInput		:KeyCode;
private var ShieldOn			:boolean = false;
static var	shotsfired			:int=0;
var			time				:int=20;
var			rand				:int=0;
static var	shotsmissed			:int=0;




//When ship is hit by alien laser reduce health by 1
function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "alienlaser")
	{
		health -= 1;
		Destroy(other.gameObject);
	}
	
}


function Start ()
{
   
}



function Update ()
{
	
	
	if (Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(laser,transform.position,transform.rotation);
	}
	
	if (ShieldController.ShieldHealth>1)
	{
		ShieldOn=true;
	}
	
	if (Input.GetKeyDown(ShieldKeyInput))
	{
		
		if(ShieldOn)
		{
			var clone = Instantiate(ShieldMesh,transform.position,transform.rotation);
			clone.transform.parent=gameObject.transform;
			ShieldOn = false;
		}
	}
		
	if(Input.GetKeyDown(KeyCode.Space))
	{
		shotsfired++;
	}
	
	shotsmissed = shotsfired-score;

	
	var border:float=1.0;
		if (transform.position.x < BordersCalculator.leftmost + border)
		{
			transform.position.x = BordersCalculator.leftmost + border;
		}
		
		if (transform.position.x > BordersCalculator.rightmost - border)
		{
			transform.position.x = BordersCalculator.rightmost - border;
		}
	
	
	
	var transH : float = Input.GetAxis("Horizontal") * 10 * Time.deltaTime;
		transform.Translate(transH,0,0);

}


