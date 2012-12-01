#pragma strict

function Start () {

}

function Update () {
this.gameObject.transform.position.x -= .1;
if(this.gameObject.transform.position.x <= -103.8844){
this.gameObject.transform.position.x = 155.8205;
}
}