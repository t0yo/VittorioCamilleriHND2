#pragma strict

var leftborder					:float		=-10.0;			
var rightborder					:float		=10;			
var touchedrightwall			:boolean	=false;
var touchedleftwall				:boolean	=false;
var alienlaser					:Rigidbody;
static var bossHealth			:int		=100;
var bigbomb:Rigidbody;


function moveDown()											
{
	transform.position.y--;
}


function OnTriggerEnter (other:Collider)
{
	if(other.gameObject.tag == "playerlaser")
	{
		Destroy(other.gameObject);
		bossHealth -= 5; 	
		
	}
}	



function Start()
{
	
	var shootdelay:float=0;

	shootdelay = Random.Range(0.1,1.0);						
	InvokeRepeating("shootlaser",shootdelay,shootdelay);	
	
	for(var counter=0;counter<5;counter++)					
	{
		yield WaitForSeconds(5);							
		moveDown();											
	}
	
	
	
}

function shootlaser()										
{
	Instantiate(alienlaser,transform.position,transform.rotation);
}

function Update ()
{
 	if (bossHealth<=0)
		{	
			Instantiate(bigbomb,transform.position,transform.rotation);
			Destroy(this.gameObject);
			Destroy(this);
		}		
 
 	
	
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
		transform.Translate(Vector3.right * 10 * Time.deltaTime);
	}

	if (touchedrightwall == true)
	{
		transform.Translate(Vector3.left * 10 * Time.deltaTime);
	}
	
	if (touchedleftwall == true)
	{
		touchedrightwall = false;
		transform.Translate(Vector3.right * 10 * Time.deltaTime);
	}

}