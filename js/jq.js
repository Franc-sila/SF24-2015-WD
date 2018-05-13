var clickedUser;
var videos=[{"id":1,"name":"video1","likes": 1000, "dislikes": 120, "views": 987654321, "date": "27.10.2017", "publisher": "Marko Francuski", "img":"img/img.png", "description":"This is a video description"}, {"id":2,"name":"video2","likes": 1400, "dislikes": 540, "views": 1400, "date": "03.14.2019", "publisher": "Stefan Berbakov", "img":"img/video.png", "description":"This is a video description for video 2"}, {"id":3,"name":"promocija minaqua vode","likes": 0, "dislikes": 540, "views": 439900, "date": "11.24.2017", "publisher": "Stefan Berbakov", "img":"img/img.png", "description":"This is the place where i put my video description"} , {"id":4,"name":"Name of your video","likes": 3000, "dislikes": 143, "views": 23486, "date": "10.01.2009", "publisher": "YTgaming", "img":"img/video.png", "description":"123213"},{"id":5,"name":"Video test1","likes": 14, "dislikes": 1, "views": 1233, "date": "09.03.2009", "publisher": "Marko Francuski", "img":"img/img.png", "description":"aaaaaaaaaaaaaaaaaaa"} ]
/*
Video Structure:
{
	"name": "Video Name1",
	"likes": 1440,
	"dislikes": 1 ,
	"views": 124123,
	"date": "24.10.1004",
	"publisher": "Marko Francuski",
	"img": "img/img.png"

}
Maybe add type of video(Public/Private/)
*/
var users=[{"first":"Marko", "last": "Francuski", "email": "asd@gmail.com", "password":"asd", "role":"admin", "avatar": "avatar/avatar3.png", "date": "30.01.1996","videos":[1,5]}, {"first":"Stefan", "last": "Berbakov", "email": "berbi@gmail.com", "password":"berbi", "role": "moderator", "avatar": "avatar/avatar2.png", "date": "30.01.1997", "videos":[2, 3]} ]


$(document).ready(function()
{
	$("input[placeholder^='Search']").hide();
	$('#users').hide();
	$('#addcommentsection').hide();

	$('#registrationWindow').hide();
	$('#regEmailMsg').hide();

	$('#loginWindow').hide();
	$('#loginEmailError').hide();
	$('#loginPasswordError').hide();

	$('#profile-info').hide();

	//Filling up video container with videos
	for (var i = 0; i < videos.length; i++) 
	{
		$(".main-content").append("<article class='video-wrapper'> <div class='video-container'> <div class='videoTop'> <a href='video.html'> <img src='"+ videos[i].img +"' alt='"+videos[i].name +"'></a> </div> <div class='videoBottom'> <div class='videoBottom-videoInfo'> <div class='videobottom-videoInfo-name'><p> <strong>"+ videos[i].name+"</strong></p></div><div class='videoBottom-videoInfo-rating'> <div class='like-container'> <span> <img src='img/like.png' style='height:15px;'> </span> <p id='likes'>"+ videos[i].likes +" </p> </div> <div class='dislike-container'> <span> <img src='img/dislike.png' style='height:15px;'> </span> <p id='dislikes'>"+videos[i].dislikes+"</p> </div> </div>  <div class='videobottom-videoInfo-views'> <p> Views <span class='red'>"+ videos[i].views+" </span> </p> <p> Date created <span class='red'>"+ videos[i].date +" </span> </p> </div> </div> <div class='videoBottom-videoPublisher'> <p> Publisher <a href='user.html' class='red'>" + videos[i].publisher+"  </a> </p> </div </div> </div></article>");
	}

	$(window).resize(function()
	{
		if ($(window).width() < 537) 
		{
			console.log('Window less then 537px');
		}
	});

	//Passing information about on which user we clicked
	$("a[href='user.html']").click(function(){
		clickedUser = $(this).html();
		console.log("clicked user:" + clickedUser);
		
		for (var i = 0; i < users.length; i++) 
		{
			var u = users[i].first + " " + users[i].last;
			if (u.trim() === clickedUser.trim()) 
			{
				console.log("jeste");
				console.log(users[i]);
				localStorage.setItem("user", users[i]);
				localStorage.setItem("u", u);
			}
		}
	});

	// Storing Name of Video that we click on
	$(".videoTop").click(function()
	{
		//window.alert("click");
		var videoname = $(this).siblings(".videoBottom").find(".videobottom-videoInfo-name").find("strong").html();
		localStorage.setItem("videoname", videoname);
	});



	// SORT FUNCTIONS
	//Sort by video name
	$('#sortvideonameAscending').click(function()
	{
		videos.sort((a,b) => a.name.localeCompare(b.name));
		//console.log(videos);
		$('.video-wrapper').remove();
		for (var i = 0; i < videos.length; i++) 
		{
			$(".main-content").append("<article class='video-wrapper'> <div class='video-container'> <div class='videoTop'> <a href='video.html'> <img src='"+ videos[i].img +"' alt='video Image'></a> </div> <div class='videoBottom'> <div class='videoBottom-videoInfo'> <div class='videobottom-videoInfo-name'><p> <strong>"+ videos[i].name+"</strong></p></div><div class='videoBottom-videoInfo-rating'> <div class='like-container'> <span> <img src='img/like.png' style='height:15px;'> </span> <p id='likes'>"+ videos[i].likes +" </p> </div> <div class='dislike-container'> <span> <img src='img/dislike.png' style='height:15px;'> </span> <p id='dislikes'>"+videos[i].dislikes+"</p> </div> </div>  <div class='videobottom-videoInfo-views'> <p> Views <span class='red'>"+ videos[i].views+" </span> </p> <p> Date created <span class='red'>"+ videos[i].date +" </span> </p> </div> </div> <div class='videoBottom-videoPublisher'> <p> Publisher <a href='user.html' class='red'>" + videos[i].publisher+"  </a> </p> </div </div> </div></article>");
		}
	});
	$('#sortvideonameDescending').click(function()
	{
		videos.sort((a,b) => b.name.localeCompare(a.name));
		//console.log(videos);
		$('.video-wrapper').remove();
		for (var i = 0; i < videos.length; i++) 
		{
			$(".main-content").append("<article class='video-wrapper'> <div class='video-container'> <div class='videoTop'> <a href='video.html'> <img src='"+ videos[i].img +"' alt='video Image'></a> </div> <div class='videoBottom'> <div class='videoBottom-videoInfo'> <div class='videobottom-videoInfo-name'><p> <strong>"+ videos[i].name+"</strong></p></div><div class='videoBottom-videoInfo-rating'> <div class='like-container'> <span> <img src='img/like.png' style='height:15px;'> </span> <p id='likes'>"+ videos[i].likes +" </p> </div> <div class='dislike-container'> <span> <img src='img/dislike.png' style='height:15px;'> </span> <p id='dislikes'>"+videos[i].dislikes+"</p> </div> </div>  <div class='videobottom-videoInfo-views'> <p> Views <span class='red'>"+ videos[i].views+" </span> </p> <p> Date created <span class='red'>"+ videos[i].date +" </span> </p> </div> </div> <div class='videoBottom-videoPublisher'> <p> Publisher <a href='user.html' class='red'>" + videos[i].publisher+"  </a> </p> </div </div> </div></article>");
		}
	});
	//Sort by Views
	$('#sortvideoviewAscending').click(function()
	{
		videos.sort((a,b) => a.views - b.views);
		//console.log(videos);
		$('.video-wrapper').remove();
		for (var i = 0; i < videos.length; i++) 
		{
			$(".main-content").append("<article class='video-wrapper'> <div class='video-container'> <div class='videoTop'> <a href='video.html'> <img src='"+ videos[i].img +"' alt='video Image'></a> </div> <div class='videoBottom'> <div class='videoBottom-videoInfo'> <div class='videobottom-videoInfo-name'><p> <strong>"+ videos[i].name+"</strong></p></div><div class='videoBottom-videoInfo-rating'> <div class='like-container'> <span> <img src='img/like.png' style='height:15px;'> </span> <p id='likes'>"+ videos[i].likes +" </p> </div> <div class='dislike-container'> <span> <img src='img/dislike.png' style='height:15px;'> </span> <p id='dislikes'>"+videos[i].dislikes+"</p> </div> </div>  <div class='videobottom-videoInfo-views'> <p> Views <span class='red'>"+ videos[i].views+" </span> </p> <p> Date created <span class='red'>"+ videos[i].date +" </span> </p> </div> </div> <div class='videoBottom-videoPublisher'> <p> Publisher <a href='user.html' class='red'>" + videos[i].publisher+"  </a> </p> </div </div> </div></article>");
		}
	});
	$('#sortvideoviewDescending').click(function()
	{
		videos.sort((a,b) => b.views - a.views);
		//console.log(videos);
		$('.video-wrapper').remove();
		for (var i = 0; i < videos.length; i++) 
		{
			$(".main-content").append("<article class='video-wrapper'> <div class='video-container'> <div class='videoTop'> <a href='video.html'> <img src='"+ videos[i].img +"' alt='video Image'></a> </div> <div class='videoBottom'> <div class='videoBottom-videoInfo'> <div class='videobottom-videoInfo-name'><p> <strong>"+ videos[i].name+"</strong></p></div><div class='videoBottom-videoInfo-rating'> <div class='like-container'> <span> <img src='img/like.png' style='height:15px;'> </span> <p id='likes'>"+ videos[i].likes +" </p> </div> <div class='dislike-container'> <span> <img src='img/dislike.png' style='height:15px;'> </span> <p id='dislikes'>"+videos[i].dislikes+"</p> </div> </div>  <div class='videobottom-videoInfo-views'> <p> Views <span class='red'>"+ videos[i].views+" </span> </p> <p> Date created <span class='red'>"+ videos[i].date +" </span> </p> </div> </div> <div class='videoBottom-videoPublisher'> <p> Publisher <a href='user.html' class='red'>" + videos[i].publisher+"  </a> </p> </div </div> </div></article>");
		}
	});
	//Sort by publisher
	$('#sortvideopublisherAscending').click(function()
	{
		videos.sort((a,b) => a.publisher.localeCompare(b.publisher));
		//console.log(videos);	
		$('.video-wrapper').remove();
		for (var i = 0; i < videos.length; i++) 
		{
			$(".main-content").append("<article class='video-wrapper'> <div class='video-container'> <div class='videoTop'> <a href='video.html'> <img src='"+ videos[i].img +"' alt='video Image'></a> </div> <div class='videoBottom'> <div class='videoBottom-videoInfo'> <div class='videobottom-videoInfo-name'><p> <strong>"+ videos[i].name+"</strong></p></div><div class='videoBottom-videoInfo-rating'> <div class='like-container'> <span> <img src='img/like.png' style='height:15px;'> </span> <p id='likes'>"+ videos[i].likes +" </p> </div> <div class='dislike-container'> <span> <img src='img/dislike.png' style='height:15px;'> </span> <p id='dislikes'>"+videos[i].dislikes+"</p> </div> </div>  <div class='videobottom-videoInfo-views'> <p> Views <span class='red'>"+ videos[i].views+" </span> </p> <p> Date created <span class='red'>"+ videos[i].date +" </span> </p> </div> </div> <div class='videoBottom-videoPublisher'> <p> Publisher <a href='user.html' class='red'>" + videos[i].publisher+"  </a> </p> </div </div> </div></article>");
		}	
	});
	$('#sortvideopublisherDescending').click(function()
	{
		videos.sort((a,b) => b.publisher.localeCompare(a.publisher));
		$('.video-wrapper').remove();
		for (var i = 0; i < videos.length; i++) 
		{
			$(".main-content").append("<article class='video-wrapper'> <div class='video-container'> <div class='videoTop'> <a href='video.html'> <img src='"+ videos[i].img +"' alt='video Image'></a> </div> <div class='videoBottom'> <div class='videoBottom-videoInfo'> <div class='videobottom-videoInfo-name'><p> <strong>"+ videos[i].name+"</strong></p></div><div class='videoBottom-videoInfo-rating'> <div class='like-container'> <span> <img src='img/like.png' style='height:15px;'> </span> <p id='likes'>"+ videos[i].likes +" </p> </div> <div class='dislike-container'> <span> <img src='img/dislike.png' style='height:15px;'> </span> <p id='dislikes'>"+videos[i].dislikes+"</p> </div> </div>  <div class='videobottom-videoInfo-views'> <p> Views <span class='red'>"+ videos[i].views+" </span> </p> <p> Date created <span class='red'>"+ videos[i].date +" </span> </p> </div> </div> <div class='videoBottom-videoPublisher'> <p> Publisher <a href='user.html' class='red'>" + videos[i].publisher+"  </a> </p> </div </div> </div></article>");
		}
	});
	// Sort by likes
	$('#sortvideolikeAscending').click(function()
	{
		videos.sort((a,b) => a.likes - b.likes);
		//console.log(videos);
		$('.video-wrapper').remove();
		for (var i = 0; i < videos.length; i++) 
		{
			$(".main-content").append("<article class='video-wrapper'> <div class='video-container'> <div class='videoTop'> <a href='video.html'> <img src='"+ videos[i].img +"' alt='video Image'></a> </div> <div class='videoBottom'> <div class='videoBottom-videoInfo'> <div class='videobottom-videoInfo-name'><p> <strong>"+ videos[i].name+"</strong></p></div><div class='videoBottom-videoInfo-rating'> <div class='like-container'> <span> <img src='img/like.png' style='height:15px;'> </span> <p id='likes'>"+ videos[i].likes +" </p> </div> <div class='dislike-container'> <span> <img src='img/dislike.png' style='height:15px;'> </span> <p id='dislikes'>"+videos[i].dislikes+"</p> </div> </div>  <div class='videobottom-videoInfo-views'> <p> Views <span class='red'>"+ videos[i].views+" </span> </p> <p> Date created <span class='red'>"+ videos[i].date +" </span> </p> </div> </div> <div class='videoBottom-videoPublisher'> <p> Publisher <a href='user.html' class='red'>" + videos[i].publisher+"  </a> </p> </div </div> </div></article>");
		}
	});
	$('#sortvideolikeDescending').click(function()
	{
		videos.sort((a,b) => b.likes - a.likes);
		//console.log(videos);
		$('.video-wrapper').remove();
		for (var i = 0; i < videos.length; i++) 
		{
			$(".main-content").append("<article class='video-wrapper'> <div class='video-container'> <div class='videoTop'> <a href='video.html'> <img src='"+ videos[i].img +"' alt='video Image'></a> </div> <div class='videoBottom'> <div class='videoBottom-videoInfo'> <div class='videobottom-videoInfo-name'><p> <strong>"+ videos[i].name+"</strong></p></div><div class='videoBottom-videoInfo-rating'> <div class='like-container'> <span> <img src='img/like.png' style='height:15px;'> </span> <p id='likes'>"+ videos[i].likes +" </p> </div> <div class='dislike-container'> <span> <img src='img/dislike.png' style='height:15px;'> </span> <p id='dislikes'>"+videos[i].dislikes+"</p> </div> </div>  <div class='videobottom-videoInfo-views'> <p> Views <span class='red'>"+ videos[i].views+" </span> </p> <p> Date created <span class='red'>"+ videos[i].date +" </span> </p> </div> </div> <div class='videoBottom-videoPublisher'> <p> Publisher <a href='user.html' class='red'>" + videos[i].publisher+"  </a> </p> </div </div> </div></article>");
		}
	});




});