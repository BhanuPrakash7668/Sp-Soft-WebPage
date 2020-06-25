


var alphcheck = /^[a-zA-Z]+$/;
var numcheck= /^\d{10}$/;
var emcheck=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function valFun()
{
	var em=document.getElementById('em');
	var mn=document.getElementById('mn');
	var ta=document.getElementById('ta');
	var nm=document.getElementById('nm');
	if(em.value.length==0 || mn.value.length==0 || ta.value.length==0 || nm.value.length==0)
	{
		alert("All fields are mandatory");
		nm.focus();
	}
	else if(!nm.value.match(alphcheck))
	{
		alert("For name use alphabets only");
		nm.focus();
	}
	else if(!em.value.match(emcheck))
	{
		alert("Enter valid email id");
		em.focus();
	}
	else if(!mn.value.match(numcheck))
	{
		alert("Enter valid mobile number");
		mn.focus();
	}
}