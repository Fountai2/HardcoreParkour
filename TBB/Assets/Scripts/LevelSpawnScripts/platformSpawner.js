#pragma strict
var platformMoveSpeed : float;
var speedIncreaseRate: float;
var platforms: GameObject[];



var SpawnPosition:Vector3;
var Create:boolean = true;
var numbers:int;
var RandNumb:int;

var showTime:float;
function Start () {

 numbers=platforms.Length;
 
 
}


function FixedUpdate () {
	SpawnPosition = Vector3(Random.Range(59,59),Random.Range(-1,1),0);
	if (Create==true){
		CreateObject();
		RandNumb = Random.Range(0,numbers);
		
	}
	if(showTime<3){
	Time.timeScale += .05*Time.deltaTime;
		showTime = Time.timeScale;
		}

}

function CreateObject(){
Create = false;
var waitTime : float = Random.Range(4,4);
 

   yield WaitForSeconds(waitTime);

   Instantiate(platforms[RandNumb],SpawnPosition,Quaternion.identity);
   Create = true;
}
