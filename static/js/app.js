var inputText = new Array;
var wordCounter = 0;
$('#status').hide();


$( document ).ready(function() {

});


$('#translateButton').on('click',function(){
	inputText = null;
	inputText = $('#sourceInput').val().split(' ');
	console.log(JSON.stringify(inputText));
	$('#translationOutput').html("");
	wordCounter = 0;
	var wordTimer=setInterval(function () {wordStep(wordTimer)}, 300);
});


function wordStep(timer){
	
	if (wordCounter < inputText.length) {
		var newText = "";
		var freq = $('#frequencyInput').val();
		if(wordCounter%freq == freq-1){
			newText = '<u>' + inputText[wordCounter] + '</u>';
			blinkAPI();
		}
		else {
			newText = inputText[wordCounter];
		}

		$('#translationOutput').append(newText+" ");
		var wordsRemaining = inputText.length - wordCounter;
		$('#status').text('Translating ' + wordsRemaining + ' words.');
		$('#status').fadeIn();
		wordCounter++;
	}
	else {
		clearInterval(timer);
		$('#status').text('Finished translation.');
		wordCounter = 0;
	}
}

function blinkAPI() {
    $('#statusAPI').removeClass().addClass('flash' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
  };
