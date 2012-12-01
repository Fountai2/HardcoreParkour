var totalTime = 0.0;
var TimerStyle:GUIStyle;
var TimerLabelStyle:GUIStyle;

private var textMeshComponent;

// store the text component so that GetComponent isn't called every frame
function Start() {
 
  textMeshComponent = GetComponent("TextMesh");
}


// update is called every frame
function Update() {
  
  
  // add amount of time since last frame to the totalTime
  totalTime += Time.deltaTime; 

// use substring to get a shorter numerical value so you don't have 50 decimal places
textMeshComponent.text = totalTime.ToString().Substring(0,4);

}

function OnGUI () {
	// Make a background box
	GUI.Box (Rect (10,10,100,90), "Distance",TimerLabelStyle);

	//display the timer
	GUI.Label (Rect (20,40,80,60), textMeshComponent.text, TimerStyle);
		
	
}