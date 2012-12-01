#pragma strict

var timerText : GUIText;
var distanceTotal : GUIText;
var timer : float;
var total : float;
var player : GameObject;
var PlayerisDead: boolean;
var backgroundDead:GUITexture;
//guiText.text = timer.ToString("F4");

function Start () {
PlayerPrefs.SetFloat("distanceTotal", 0);
Time.timeScale=1;
}

function Update () {
PlayerisDead = GameObject.Find("Bear_Animations").GetComponent(playerDeath).PlayerDead;
//set up the timer, making the "timer" variable read the clock
timer += Time.deltaTime*4;
timer = Mathf.Round(timer * 100) / 100;


//associate that timer text with the GUIText, must follow a string
timerText.text = timer+" meters";
//When the timer passes 20 seconds, for the game this if statement should just be a trigger condition,
//as soon as the event is triggered it will do the following
if( PlayerisDead==true){
//Grab the value of the timer to the variable "distanceTotal" (not the text)
PlayerPrefs.SetFloat("distanceTotal", timer);
//save the number
PlayerPrefs.Save();
//make the game over GUIText show up
distanceTotal.enabled = true;
backgroundDead.enabled=true;
//Attach the saved value from PlayerPref to the GUI Text and done!
distanceTotal.text = "Total Distance: "+PlayerPrefs.GetFloat("distanceTotal");
loadCredits();
}
}

function loadCredits(){
yield WaitForSeconds(4*Time.timeScale);
Application.LoadLevel("Credits");
}