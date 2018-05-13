$(document).ready(function()
{
	$("#banUserbtn").hide();

	//Retriving information on which user we clicked.
	var u = localStorage.getItem("u");
	var user = {};

	//Finding user that we clicked and storing his information.
	for (var i = 0; i < users.length; i++) 
	{
		var uu = users[i].first + " " + users[i].last;
		if (u.trim() ===  uu.trim())
		{
			user = users[i];
		}
	}

	//Filling up the HTML page with information of user
	$("#user-name-container").append("<p id='user-name'>"+ user.first + " "+ user.last +" </p>");
	$("#user-avatar-container").append("<img src='"+ user.avatar+"' class='avatar' alt='"+ user.avatar +"'>");
	$("#db").append("<td id='user-dateBirth'>"+ user.date+"</td>");
	$("#email").append("<td id='user-email'>"+ user.email+"</td>");

	if(user.role === "admin")
	{
		$("#user-info-role-div").append("<img src='img/admin.png' alt='img/admin.png'>");
	}
	else
	{
		if(user.role === "moderator")
		{
		$("#user-info-role-div").append("<img src='img/moderator.png' alt='img/moderator.png'>");
		}
	}
	//console.log(videos);
	//console.log(user.videos);

	for (var i = 0; i < videos.length; i++) 
	{
		for (var j = 0; j < user.videos.length; j++) 
		{
			if(videos[i].id === user.videos[j]) 
			{
				//console.log("jeste");
				//console.log("videos[i].id: "+videos[i].id);
				//console.log("user.videos[j]: "+user.videos[j]);
				$("#user-videos").append("<article class='video-wrapper'><div class='video-container'><div class='videoTop'> <a href='video.html'> <img src='"+ videos[i].img +"'></a></div><div class='videoBottom'> <div class='videoBottom-videoInfo'> <div class='videobottom-videoInfo-name'> <p> <strong>"+ videos[i].name+" </strong> </p> </div> <div class='videoBottom-videoInfo-rating'> <div class='like-container'> <span> <img src='img/like.png' style='height: 15px;'> </span> <p id='likes'>"+ videos[i].likes+"</p></div> <div class='dislike-container'><span> <img src='img/dislike.png' style='height: 15px;'></span> <p id='dislikes'>"+ videos[i].dislikes+" </p> </div></div> <div class='videobottom-videoInfo-views'> <p>Views <span class='red'>"+videos[i].views+"</span></p><p>Date Created <span class='red'>"+videos[i].date+"</span></p></div></div><div class='videoBottom-videoPublisher'><p>Publisher <a href='user.html' class='red'>"+videos[i].publisher+"</a></p></div></div></div></article>");
			}
		}
	}
	
	
	
});