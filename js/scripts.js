var stopCondition = false;

function animateProgress()
{
	var timerId = setInterval(function() {

    if (stopCondition) {
        clearInterval(timerId);
        return;
    }
	
	var currentWidth = parseInt($(".progress-meter").css("width").replace("px","")) + 1;
	
	if(currentWidth == parseInt($(".progress").css("width").replace("px","")) - 1)
	{
		stopCondition = true;
		$(".num").text("$2,000.00");
		$(".num").css("color","green");
		$(".submitBtn").val("Thank You!");
		$(".submitBtn").css("background","green");
		$(".progress-meter").css("background","green");
	}

    $(".progress-meter").css("width",currentWidth+"px");

	}, 10);
}

$(function(){

	$(".submitBtn").click(function(){
		animateProgress();
	});

});