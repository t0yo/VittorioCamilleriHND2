#pragma strict

var shootingup:boolean;
var bomb:Rigidbody;

function Start () 
{
}

function Update () 
{
	if(shootingup)
	{
		transform.Translate(Vector3.up * 30 * Time.deltaTime);
	}
	else
	{
		transform.Translate(Vector3.up * -10 * Time.deltaTime);
	}
}


function OnTriggerEnter(other:Collider)
{
	if(shootingup == true)
	{
		if (other.gameObject.tag == "enemy")
		{	PlayerController.score++;
			var PlayerControllerScript:PlayerController;
			PlayerControllerScript = GameObject.FindGameObjectWithTag("player").GetComponent(PlayerController);
			Instantiate(bomb,transform.position,transform.rotation);
			
		}
		
		
	}
}


