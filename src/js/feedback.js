$(document).ready(function () {
	$('a').on('click', function(){
		$('.wfDescContent').html('');
		$('.wfDescContent').html(getMetadata($(this).attr('metadata'))).animate({left: '350px'}, "fast").animate({left:'50px'}, "slow");
	});
	displayFeedback();
	$('#submitComment').on('click', function(){
		var feedbackRecord={};
		feedbackRecord.name=$('input[name=field1]').val();
		feedbackRecord.email=$('input[name=field2]').val();
		feedbackRecord.phone1=$('input[name=tel_no_1]').val();
		feedbackRecord.phone2=$('input[name=tel_no_2]').val();
		feedbackRecord.phone3=$('input[name=tel_no_3]').val();
		feedbackRecord.context=$('select[name=field4]').val();
		feedbackRecord.message=$('textarea[name=field5]').val();
		var feedback=window.localStorage.feedback?JSON.parse(window.localStorage.feedback):[];
		feedback.push(feedbackRecord);
		window.localStorage.feedback=JSON.stringify(feedback);
		displayFeedback();
	});
	
});

function displayFeedback(){
	if(window.localStorage.feedback){
		JSON.parse(window.localStorage.feedback).forEach(function(feedback){
			thisComment='<div class="comment"><div class="commentHeader"><div class="commentName">'+feedback.name+'</div><div class="commentEmail">'+feedback.email+'</div><div class="commentPhone">'+feedback.phone1+'-'+feedback.phone2+'-'+feedback.phone3+'</div><div class="commentRegarding">'+feedback.context+'</div></div><div class="commentContent">'+feedback.message+'</div></div>';
			$('.comments').html($('.comments').html()+thisComment);
		});
	}
}
function getMetadata(key){
	return {	'commit':'A change is detected in the GitHub repo that is monitored by the Jenkins job',
				'grunt':'Grunt tasks configured in the Jenkins job are executed. These may include JS Concatination, minification, SASS-CSS conversion, etc',
				'test':'Jasmine Scripts are executed against the JS files',
				'coverage':'Karma/Istanbul scripts are executed against the changes made',
				'image':'Kraken.io and other image optimization tools are invoked',
				'cq':'Jenkins plugins are configured to push the JS and CSS files to CQ',
				'performace':'Sitespeed/Phantomas scripts are executed to do performance tests',
				'visual':'PhantomCSS, BackstopJS scripts are triggered for visual regression'}[key];
}
function knockKnock(){
	return "Who's there?";
}