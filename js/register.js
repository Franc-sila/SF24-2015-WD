$(document).ready(function()
{

	//Register Window 
	$('#signupbutton').click(function(){
		$('#registrationWindow').show();
	});
	
	//Cancel Button in Registration Form
	$('#regbtnCancel').click(function()
	{
		$('#registrationWindow').hide();
		//Upon Cancel registration window clear up fields
		$('#regFirstName').val("");
		$('#regLastName').val("");
		//Removing value,class and hiding emailMsg
		$('#regEmail').val("");
		$('#regEmail').removeClass("border-red");
		$('#regEmailMsg').hide();

		$('#regPassword').val("");
	});
	//Register Button in Registration Form
	$('#regbtnRegister').click(function()
	{
		if($('#regFirstName').val() == "" || $('#regLastName').val() == ""  || $('#regEmail').val() == ""  || $('#regPassword').val() == "" )
		{
			window.alert('Please fill up all fields before registration');
		}
		else
		{
			var user ={}
			user.first = $('#regFirstName').val();
			user.last = $('#regLastName').val();
			user.email = $('#regEmail').val();
			user.password = $('#regPassword').val();
			user.role= "user";
			users.push(user);
			window.alert("succesfully registrated!");
			$('#regFirstName').val("");
			$('#regLastName').val(""); 
			$('#regEmail').val("");
			$('#regPassword').val("");
			$('#registrationWindow').hide();
		}
	});
	//Validation for email when entering email for registration
	$('#regEmail').on("change paste keyup", function()
	{
		var valid=false;
		for (var i = 0; i < users.length; i++) 
		{
			console.log(users[i].email);
			console.log("this: " + $(this).val());
			if($(this).val() === users[i].email )
			{
				$(this).addClass("border-red");
				$('#regEmailMsg').show();
				valid=true;
				$('#regbtnRegister').attr("disabled", "disabled");
			}
		}
		if(!valid)
		{
			$('#regEmailMsg').hide();
			$(this).removeClass("border-red");
			$('#regbtnRegister').removeAttr("disabled");
		}

	});
});