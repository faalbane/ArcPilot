#pragma strict

var ballSpeed : float = 70;

function Start () {
	yield WaitForSeconds(2);
	GoBall();
}

function OnCollisionEnter2D (colInfo : Collision2D) {
	var randomNumber1 = Random.Range(1, 4);
	var randomNumber2 = Random.Range(1, 4);

	if (colInfo.collider.tag == "Player") {
		//GetComponent.<Rigidbody2D>().velocity.y = GetComponent.<Rigidbody2D>().velocity.y/2 + colInfo.collider.GetComponent.<Rigidbody2D>().velocity.y/3;
		
		//Using 'randomNumber2' variable adds randomness to the game
		GetComponent.<Rigidbody2D>().velocity.y = GetComponent.<Rigidbody2D>().velocity.y/randomNumber1 + colInfo.collider.GetComponent.<Rigidbody2D>().velocity.y/randomNumber2;
		//Debug.Log(randomNumber1);
		//Debug.Log(randomNumber2);
		
		GetComponent.<AudioSource>().pitch = Random.Range(0.9f, 1.1f);
		GetComponent.<AudioSource>().Play();
	}
}

function ResetBall () {
	GetComponent.<Rigidbody2D>().velocity.y = 0;
	GetComponent.<Rigidbody2D>().velocity.x = 0;
	transform.position.x = 0;
	transform.position.y = 0;
	
	yield WaitForSeconds (0.5);
	GoBall();
}

function GoBall () {
	var randomNumber = Random.Range(0, 2);
	if (randomNumber <= 0.5){
		GetComponent.<Rigidbody2D>().AddForce (new Vector2 (ballSpeed, 10));
	}
	else {
		GetComponent.<Rigidbody2D>().AddForce (new Vector2 (-ballSpeed, -10));
	}
}