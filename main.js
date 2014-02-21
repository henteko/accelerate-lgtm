$(function() {
  var $closeButton = $('.js-comment-and-button');
  if($closeButton.size() > 0) {
    var $lgtmButton = $('<button/>').attr('class', "button lgtm-button").text('LGTM');
    $closeButton.before($lgtmButton);
    var $comment = $closeButton.parent().parent().parent().find('.comment-form-textarea');
    $lgtmButton.click(function() {
      var markdown = getLgtm(function(data) {
        var markdown = $(data).find('#markdown').text();
        $comment.text(markdown);
      });
      return false;
    });
  }
});

function getLgtm(func) {
  var url = "http://www.lgtm.in/g";
  $.get(url, func);
}
