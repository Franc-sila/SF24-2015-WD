var comments =[{"publisher": "Marko Francuski", "content": "Lorem ipsum dolor sit amet, nemore torquatos cu.", "like": 1344, "dislike" : 12, "date": "27.01.2015"},{"publisher": "SF24-2015", "content": "Lorem ipsum dolor sit amet, nemore torquatos cu.Lorem ipsum dolor sit amet, nemore torquatos cu.Lorem ipsum dolor sit amet, nemore torquatos cu.Lorem ipsum dolor sit amet, nemore torquatos cu.", "like": 150, "dislike" : 5698, "date":"30.07.2011"}, {"publisher": "Radovan Silaski", "content": "Lorem ipsum dolor sit amet, nemore torquatos cu.aaaaaad askhra kasrah ardhra.f astasda ", "like": 1500, "dislike" : 0, "date":"14.12.2007"} ];



$(document).ready(function()
{
	$("button[id^='sort']").addClass("sort-comments");

	for (var i = 0; i < comments.length; i++) 
	{
		$('#comment-section').append("<div class='comment'><img src='img/avatar.png' class='avatar'><div class='comment-info'><p><a href='#user.html' class='red'>"+comments[i].publisher+"</a></p><p class='commentContent'>"+comments[i].content+"</p><div class='comment-rating'><div class='comment-rating-container'><img src='img/like.png' width='15px' height='15px'><p id='comment-like'>"+comments[i].like+"</p></div><div class='comment-rating-container'><img src='img/dislike.png' width='15px' height='15px'><p id='comment-dislike'>"+comments[i].dislike+"</p></div><div class='comment-rating-date'><p id='date-created'>"+comments[i].date+"</p></div></div></div></div>");
	}

	$('#video-play').click(function()
	{
		$('#video').get(0).play();
	});

	$('#video-stop').click(function()
	{
		$('#video').get(0).pause();
	});

	$('#sort-comment-like-Ascending').click(function()
	{
		comments.sort( (a,b) => a.like - b.like);
		$('#comment-section').empty();
		for (var i = 0; i < comments.length; i++) 
		{
			$('#comment-section').append("<div class='comment'><img src='img/avatar.png' class='avatar'><div class='comment-info'><p><a href='#user.html' class='red'>"+comments[i].publisher+"</a></p><p class='commentContent'>"+comments[i].content+"</p><div class='comment-rating'><div class='comment-rating-container'><img src='img/like.png' width='15px' height='15px'><p id='comment-like'>"+comments[i].like+"</p></div><div class='comment-rating-container'><img src='img/dislike.png' width='15px' height='15px'><p id='comment-dislike'>"+comments[i].dislike+"</p></div><div class='comment-rating-date'><p id='date-created'>"+comments[i].date+"</p></div></div></div></div>");
		}
	});
		$('#sort-comment-like-Descending').click(function()
	{
		comments.sort( (a,b) => b.like - a.like);
		$('#comment-section').empty();
		for (var i = 0; i < comments.length; i++) 
		{
			$('#comment-section').append("<div class='comment'><img src='img/avatar.png' class='avatar'><div class='comment-info'><p><a href='#user.html' class='red'>"+comments[i].publisher+"</a></p><p class='commentContent'>"+comments[i].content+"</p><div class='comment-rating'><div class='comment-rating-container'><img src='img/like.png' width='15px' height='15px'><p id='comment-like'>"+comments[i].like+"</p></div><div class='comment-rating-container'><img src='img/dislike.png' width='15px' height='15px'><p id='comment-dislike'>"+comments[i].dislike+"</p></div><div class='comment-rating-date'><p id='date-created'>"+comments[i].date+"</p></div></div></div></div>");
		}
	});

	$('#sort-comment-dislike-Ascending').click(function()
	{
		comments.sort( (a,b) => a.dislike - b.dislike);
		$('#comment-section').empty();
		for (var i = 0; i < comments.length; i++) 
		{
			$('#comment-section').append("<div class='comment'><img src='img/avatar.png' class='avatar'><div class='comment-info'><p><a href='#user.html' class='red'>"+comments[i].publisher+"</a></p><p class='commentContent'>"+comments[i].content+"</p><div class='comment-rating'><div class='comment-rating-container'><img src='img/like.png' width='15px' height='15px'><p id='comment-like'>"+comments[i].like+"</p></div><div class='comment-rating-container'><img src='img/dislike.png' width='15px' height='15px'><p id='comment-dislike'>"+comments[i].dislike+"</p></div><div class='comment-rating-date'><p id='date-created'>"+comments[i].date+"</p></div></div></div></div>");
		}
	});
	$('#sort-comment-dislike-Descending').click(function()
	{
		comments.sort( (a,b) => b.dislike - a.dislike);
		$('#comment-section').empty();
		for (var i = 0; i < comments.length; i++) 
		{
			$('#comment-section').append("<div class='comment'><img src='img/avatar.png' class='avatar'><div class='comment-info'><p><a href='#user.html' class='red'>"+comments[i].publisher+"</a></p><p class='commentContent'>"+comments[i].content+"</p><div class='comment-rating'><div class='comment-rating-container'><img src='img/like.png' width='15px' height='15px'><p id='comment-like'>"+comments[i].like+"</p></div><div class='comment-rating-container'><img src='img/dislike.png' width='15px' height='15px'><p id='comment-dislike'>"+comments[i].dislike+"</p></div><div class='comment-rating-date'><p id='date-created'>"+comments[i].date+"</p></div></div></div></div>");
		}
	});

	//Adding comment
	$("#addcomment").click(function()
	{
		loggedUser = localStorage.getItem("loggedUser");
		window.alert("clicked on subbmit comment");
		if($("#commentcontent").val() != "" && localStorage.getItem("loggedUser") != null)
		{
			$("#comment-section").append("<div class='comment'> <img class='avatar' src='img/avatar.png'> <div class='comment-info'> <p class='red'> "+loggedUser.first + " "+ loggedUser.last +" </p> <p class='commentContent'> "+ $('#commentcontent').val() +" </p> </div>  </div>");
			$("#commentcontent").val("");
		}
		else{
			window.alert("Comment Content is empty");
		}

	});
});