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

function addNewlines(str) {
  var result = '';
  while (str.length > 0) {
    result += str.substring(0, 64) + '\n';
    str = str.substring(64);
  }
  return result;
};

function textPrint() {
  var guiKey = $('#gui_key_widget').text();
  var newStyleGUI = addNewlines(guiKey);
  $('#gui_key_widget').text(newStyleGUI);
  var printStyle = $('#print');
  var stylePrint = 'body { height: 100%; -ms-transform: none; -webkit-transform: none; transform: none; } .text-print-hide { display: none; } .wallet { border: none; } .qr-gui img, .qr-cli img, .qr-address img, .gui_key_widget, .cli_key_widget, .address-text-big, .address_widget, .gui-text-big, .cli-text-big, .gui-text, .cli-text { color: #000000 !important; -ms-transform: none; -webkit-transform: none; transform: none; } .logo-text { top: -45px; left: 700px; color: #086788 !important; } .cli_key_widget { top: 300px; left: 0px; width: 100%; font-weight: bold; } .gui_key_widget { top: 1200px; left: 0px; width: 100%; white-space: pre-line; font-size: 18px; font-weight: bold;} .gui-text-big { top:1092px; left: 0px; } .qr-gui { top: 1050px; left: 150px; } .cli-text-big { top: 742px; left: 0px; } .qr-cli { top: 700px; left: 150px; } .cli_key_widget { top: 850px; left: 0px; font-size: 18px; } .address_widget { top: 120px; left: 0px; width:100%; font-weight: bold; } .address-text-big { top: 25px; left: -20px; } .qr-address { right: 750px; top: 5px; } .notesText { left: 550px; font-size: 20px; height: 400px; width: 330px;}';
  printStyle.text(stylePrint);
  window.print();
  $('#gui_key_widget').text(guiKey);
};

function walletPrint() {
  var printStyle = $('#print');
  var stylePrint = 'body { height: 650px; -ms-transform: rotate(90deg); -webkit-transform: rotate(90deg); transform: rotate(90deg); } .wallet { border: 1px dotted #000000; } .gui_key_widget, .cli_key_widget, .qr-address img, .address_widget, .address-text-big, .gui-text-big, .cli-text-big { -ms-transform: rotate(90deg); -webkit-transform: rotate(90deg); transform: rotate(90deg); }';
  printStyle.text(stylePrint);
  window.print();
};

function getTheme(selectObject) {
  var selectedTheme = selectObject.value;

  if (selectedTheme === "standard"){
    document.getElementById("logo").src="b2bpaperfiles/media/logo.png";
    document.getElementById("theme-image").src="b2bpaperfiles/themes/themeB2Bstandard.png";
    $('#address-text-big, #gui-text-big, #cli-text-big, #instruction-text, #logo-text, #gui-text, #cli-text').css({"color":"#086788","text-shadow":"none"});
  }
  if (selectedTheme === "light"){
    document.getElementById("logo").src="b2bpaperfiles/media/logo.png";
    document.getElementById("theme-image").src="b2bpaperfiles/themes/themeB2Blight.png";
    $('#address-text-big, #gui-text-big, #cli-text-big, #instruction-text, #logo-text, #gui-text, #cli-text').css({"color":"#086788","text-shadow":"none"});
  }
  if (selectedTheme === "dark"){
    document.getElementById("logo").src="b2bpaperfiles/media/logo_white.png";
    document.getElementById("theme-image").src="b2bpaperfiles/themes/themeB2Bdark.png";
    $('#address-text-big, #gui-text-big, #cli-text-big, #instruction-text, #logo-text, #gui-text, #cli-text').css({"color":"#feffff","text-shadow":"none"});
  }
  if (selectedTheme === "halloween"){
    document.getElementById("logo").src="b2bpaperfiles/media/logo_halloween.png";
    document.getElementById("theme-image").src="b2bpaperfiles/themes/themeB2Bhalloween.jpg";
    $('#address-text-big, #gui-text-big, #cli-text-big, #instruction-text, #logo-text, #gui-text, #cli-text').css({"color":"#ee9b00","text-shadow":"1px 1px #ff0000"});
  }
};