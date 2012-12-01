#pragma strict
var deathParticles: Transform;
var location:Transform;
var PlayerDead:boolean = false;
function Start () {

}

function Update () {
}

function OnTriggerEnter (other:Collider){
Debug.Log("sex");
if(other.gameObject.tag =="death"){
Instantiate (deathParticles, location.transform.position, Quaternion.identity);
PlayerDead = true;
yield WaitForSeconds(.01);
PlayerDead = false;
Destroy (gameObject);


Debug.Log("you died");
}
}