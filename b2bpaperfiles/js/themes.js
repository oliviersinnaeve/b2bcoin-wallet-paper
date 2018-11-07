$(document).ready(function () {
  $('textarea[data-limit-rows=true]')
    .on('keypress', function (event) {
        var textarea = $(this),
            text = textarea.val(),
            numberOfLines = (text.match(/\n/g) || []).length + 1,
            maxRows = parseInt(textarea.attr('rows'));

        if (event.which === 13 && numberOfLines === maxRows ) {
          return false;
        }
    });
});
function addNoteText(textInput){
	var elementValue = textInput.value;
	document.getElementById("notesText").innerHTML = elementValue;
};

function getTheme(selectObject) {
  var selectedTheme = selectObject.value;

  if (selectedTheme === "standard"){
    document.getElementById("theme-image").src="b2bpaperfiles/themes/themeB2Bstandard.png";
  }
  if (selectedTheme === "light"){
    document.getElementById("theme-image").src="b2bpaperfiles/themes/themeB2Blight.png";
  }
  if (selectedTheme === "dark"){
    document.getElementById("theme-image").src="b2bpaperfiles/themes/themeB2Bdark.png";
  }
  if (selectedTheme === "halloween"){
    document.getElementById("theme-image").src="b2bpaperfiles/themes/themeB2Bhalloween.jpg";
    $('#address-text-big, #gui-text-big, #cli-text-big, #instruction-text, #logo-text, #gui-text, #cli-text').css({"color":"#ee9b00","text-shadow":"1px 1px #ff0000"});
  }
};