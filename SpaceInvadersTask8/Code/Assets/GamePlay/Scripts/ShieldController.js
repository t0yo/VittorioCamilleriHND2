#pragma strict
static var ShieldHealth: int = 3;
var enemylaser:Rigidbody;

function OnTriggerEnter(other:Collider)
{
	if(other.tag=="alienlaser")
	{
		
		Destroy(other.gameObject);
		PlayerController.health++;
	}
}

function Start () {

}

function Update () 
{
	
}

