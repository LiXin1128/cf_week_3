var works = [
	{
		title: "First Project",
		pic: "img/w_1.jpg"
	},
	{
		title: "Second Project",
		pic: "img/w_2.jpg"
	},
	{
		title: "Third Project",
		pic: "img/w_3.jpg"
	},
	{
		title: "Fourth Project",
		pic: "img/w_4.jpg"
	},
	{
		title: "Fifth Project",
		pic: "img/w_5.jpg"
	},
	{
		title: "Sixth Project",
		pic: "img/w_6.jpg"
	},
	{
		title: "Seventh Project",
		pic: "img/w_7.jpg"
	},
	{
		title: "Eighth Project",
		pic: "img/w_8.jpg"
	}
];
//work section
//console.log(works);
// work section
for(var i = 0; i < works.length; ++i ) {
  $("#work").append("\
    <div class='col-md-3 col-xs-6'>\
    	<a href='#' class='work-img'>\
      		<img class='img-responsive' src='" + works[i].pic + "'>\
      		<span class='info'><p class='proj-title'>Title:</p>"+ works[i].title+"</span>\
      	</a>\
    </div>\
  ");

  $(".work-img").mouseenter(function(){
  	$(".info", this).show();
  }).mouseleave(function(){
  	$(".info", this).hide();
  });

  var images = $("#work img");
  if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  };
};
