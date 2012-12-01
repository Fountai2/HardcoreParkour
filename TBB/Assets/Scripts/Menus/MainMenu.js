#pragma strict
var pointer : Texture;
var menuBackground : Texture;
var titleImage : GUIStyle;
var playButton : GUIStyle;
var creditButton : GUIStyle;
var exitButton : GUIStyle;
var title : String;
var instructions : String;
var instructionsImage : GUIStyle;

var cursorColor : Color = Color.green;

function Start () 
{
Screen.showCursor = true;
}

function OnGUI () {

	GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height), menuBackground);		
	if(GUI.Button(Rect(Screen.width /16,Screen.height/2-250,417,225), "Play",playButton)) {
		Application.LoadLevel("runningTest");
		}
	if(GUI.Button(Rect(Screen.width -467,Screen.height/2-250,417,225), "Credits",creditButton)) {
		Application.LoadLevel("Credits");
		}
	//if(GUI.Button(Rect(Screen.width / 2 - 85,Screen.height / 2 + 150,180,65), "Exit",exitButton)) {
	//	Application.Quit();
//	}
	
	GUI.Label (Rect (Screen.width*0.21,250,700,100), title,titleImage);
	GUI.Label (Rect (Screen.width*0.25,Screen.height - 75,700,100), instructions,instructionsImage);



}