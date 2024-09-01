function contact(){
let name=document.getElementById('name').value;
let email= document.getElementById('abc').value;
let number=document.getElementById('number').value;
if(name && email && number){
    alert('Thanks');
}
else{
    alert('please fill all fields')
}
};
function registration(){
    let name=document.getElementById('r_name').value;
    let lastname=document.getElementById('l_name').value;
let email= document.getElementById('r_email').value;
let number=document.getElementById('r_number').value;
let age=document.getElementById('r_age').value;

if(name && email && number && age && lastname){
    alert('Thanks for your registration');
}
else{
    alert('please fill all fields')
}
}