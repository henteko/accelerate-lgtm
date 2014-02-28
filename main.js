$(function() {
  var $newComment = $('#js-new-comment-form-actions');
  if($newComment.size() > 0) {
    var $lgtmButton = $('<button/>').attr('class', "button lgtm-button").text('LGTM');
    $newComment.prepend($lgtmButton);
    var $comment = $newComment.parent().parent().parent().find('.comment-form-textarea');
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
