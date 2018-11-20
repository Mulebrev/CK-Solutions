$(document).ready(function(){
	var scrollLink = $('.scroll');

	// smooth scrolling
	scrollLink.click(function(event) {
		event.preventDefault();
		$("body,html").animate({
			scrollTop: $(this.hash).offset().top
		}, 1000)
	});

	// active link highlighted
$(window).scroll(function(){
		var scrollLocation = $(this).scrollTop();
		

		scrollLink.each(function(){
			var sectionOffset = $(this).offset().top;
				console.log(sectionOffset)
			if( sectionOffset <= scrollLocation) {
				$(this).parent().addClass("active");
				$(this).parent().siblings().removeClass("active");
			}
		})
	})

});

