#pragma strict

var isFalling : boolean=true;
var jumpForce:float;

 

function Update(){

    if(Input.GetKeyDown("space") && !isFalling){

        rigidbody.velocity.y=jumpForce;
 isFalling=true;
    }


   


}

 

function OnCollisionStay(collisionInfo : Collision) {

    //we are on something
    isFalling=false;

}

