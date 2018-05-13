function login()
{
	var email;
	var password;

	email = document.getElementById('emaillogin').value;
	password = document.getElementById('passwordlogin').value;
//	window.alert( 'Email: ' + email + ' Password: ' + password);
	if(email =='markof' && password=='asd')
	{
		window.alert('succesfull login');
	}
	else
	{
		window.alert('invalid credentials');
	}

}

function sortByNameAsc()
{
	var list
	list = document.getElementsByClassName('video-container');

	console.log(list)
	var videos = []
	// Empty the video container, 
/*	mainContent= document.getElementsByClassName('main-content')[0];
	while(mainContent.firstChild)
	{
		mainContent.removeChild(mainContent.firstChild)
	}
*/
	for (var i = 0; i < list.length ; i++) 
	{
		var video =
		{
			publisher: list[i].children[1].children[1].children[0].children[0].innerHTML,
			name: list[i].children[1].children[0].children[0].children[0].children[0].innerHTML,
			likes: list[i].children[1].children[0].children[1].children[0].innerHTML,
			dislikes: list[i].children[1].children[0].children[1].children[1].innerHTML,
			views: list[i].children[1].children[0].children[2].children[0].children[0].innerHTML,
			datecrated: list[i].children[1].children[0].children[2].children[1].children[0].innerHTML
		}
		videos.push(video);
		
	}
	console.log(videos);
	// Sorting videos

	videos.sort(function (a,b)
	{
		if(a["publisher"] < b["publisher"] )
		{
			return -1
		}
		if(a["publisher"]  > b["publisher"] )
		{
			return 1;
		}
		return 0;
	});

	console.log(videos);


}