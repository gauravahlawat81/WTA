function validate()
{
	let email=document.getElementById("email").value
	if(email.length===0)
	{
		alert("Email cannot be empty, please try again");
		email="";
	}
	let password=document.getElementById("password").value
	if(password.length===0)
	{
		alert("password cannot be empty, please try again");
		password=""
	}
	let repeat=document.getElementById("repeat").value;
	if(repeat!==password)
	{
		alert("Passowrds do not match,try again")
		password="";
		document.getElementById("repeat").value="";
		document.getElementById("password").value="";
	}
	if(email.length!==0 && password.length!==0 && repeat===password)
	{
		window.location="index.html"
	}
}