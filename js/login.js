var users=[{"first":"Marko", "last": "Francuski", "email": "asd@gmail.com", "password":"asd", "role":"admin", "avatar": "avatar/avatar3.png", "date": "30.01.1996","videos":[1,5]}, {"first":"Stefan", "last": "Berbakov", "email": "berbi@gmail.com", "password":"berbi", "role": "moderator", "avatar": "avatar/avatar2.png", "date": "30.01.1997", "videos":[2, 3]} ]

$(document).ready(function()
{
	$('#registrationWindow').hide();
	$('#loginWindow').hide();
	$('#profile-info').hide();
	$('#loginEmailError').hide();
	$('#loginPasswordError').hide();

	$("button[id='user-delete']").hide();

	//Login Button Window
	$('#loginbutton').click(function()
	{
		$('#loginWindow').show();
	});
	//Login Cancel
	$('#loginbtncancel').click(function()
	{
		$('#loginEmailError').hide();
		$('#loginPasswordError').hide();
		$('#loginWindow').hide();
		$('#loginEmail').val("");
		$('#loginPassword').val("");
		$('#loginEmail').removeClass("border-red");
		$('#loginPassword').removeClass("border-red");
	});
	//Login Button
	$('#loginbtn').click(function()
	{
		if($('#loginEmail').val() === "" || $('#loginPassword').val() === "")
		{
			window.alert("Please fill up all fields before login!");
		}
		else
		{
			var valid = false;
			for (var i = 0; i < users.length; i++) 
			{
				if(users[i].email === $('#loginEmail').val() && users[i].password === $('#loginPassword').val())
				{
					window.alert("Succesfully Logged In!");
					$('#login-signup-div').hide();
					$('#profile-info').show();
					$('#loginEmail').val("");
					$('#loginPassword').val("");
					$('#loginWindow').hide();
					$('#profile-info-fullname').html(users[i].first + " " + users[i].last);
					$('nav ul').append("<li> <a href='user.html'> Profile </a> </li>");
					if(users[i].role === "admin")
					{
						$('nav ul').append("<li> <a href='users.html'> Users </a> </li>");
						$("button[id='user-delete']").show();
					}
					$('#addcommentsection').show();
					localStorage.setItem("loggedUser",users[i]);
				}
				else
				{
					$('#loginPasswordError').show();
				}
			}
		}
	});
	$('#loginPassword').on("change paste keyup", function()
	{
		if($(this).val() === "")
		{
			$('#loginPasswordError').hide();
		}
	});
	$('#loginEmail').on("change paste keyup", function()
	{
		var valid = false;
		for (var i = 0; i < users.length; i++) 
		{
			if(users[i].email != $(this).val())
			{
				$(this).addClass("border-red");
				$('#loginEmailError').show();
			}
			else
			{
				valid=true
			}
		}
		if(valid)
		{
			$(this).removeClass("border-red");
			$('#loginEmailError').hide();
		}
	});

	
});