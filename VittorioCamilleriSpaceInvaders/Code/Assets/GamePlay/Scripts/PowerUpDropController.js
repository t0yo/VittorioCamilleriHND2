#pragma strict

static var ShieldTrigger:boolean;
var percentDrop : float=50f;

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "player")
	{
		var rand : float = Random.Range (0f, 100f); 
		Destroy(this.gameObject);
	    if (rand < percentDrop)
	    {	
	    	ShieldController.ShieldHealth +=3;
		}
		else
		{
			PlayerController.health +=3;
		}
	}

}	

function Update () 
{
	transform.Translate(Vector3.up * -10 * Time.deltaTime);
	
	 
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
	
}

