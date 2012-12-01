/// This script moves the character controller forward 
/// and sideways based on the arrow keys.
/// It also jumps when pressing space.
/// Make sure to attach a character controller to the same game object.
/// It is recommended that you make only one call to Move or SimpleMove per frame.    

//how high can we jump
var jumpHeight : float = 5;

//store player controller into a variable
var controller : CharacterController;


//create moveDirection variable and set it to 0

private var moveDirection : Vector3 = Vector3.zero;

function Update() {
    if (controller.isGrounded) {
        // We are grounded, so recalculate
        // move direction directly from axes
       // moveDirection = Vector3(0, 0,0);
       // moveDirection = transform.TransformDirection(moveDirection);
      //  moveDirection *= speed;
        
    //if the player jumps, animate the jump
		if (Input.GetButton ("Jump")) {
            iTween.MoveBy(gameObject, iTween.Hash("y", jumpHeight, "easeType", "none", "loopType", "none", "delay", 0));
        //player falls by gravity set in Controller script, not animated or rigidbody
        }
          
        
        
        
    }
    
   

    
    // This was from another script to Move the controller forward, backward, up, down ,not really used here
  // controller.Move(moveDirection * Time.deltaTime);
}
