var getStringWords = function(string) {
  return string.replace(/^\s*(.*)\s*$/, '$1').replace(/\s+/, ' ').split(' ');
};

var genkeys = function(additional_entropy, lang) {
  var seed = cnUtil.sc_reduce32(poor_mans_kdf(additional_entropy + cnUtil.rand_32()));
  var keys = cnUtil.create_address(seed);
  var passPhrase = mn_encode(seed, lang);
  return {
    keys: keys,
    mnemonic: passPhrase
  }
};

var restore_keys = function(lang) {
  var seed_phrase = document.getElementById("seed_phrase").value;
  var seed = mn_decode(seed_phrase);
  var keys = cnUtil.create_address(seed);
   
  address_widget.innerHTML = keys.public_addr;
  //mnemonic_widget.innerHTML = seed_phrase;
  gui_key_widget.innerHTML = keys.spend.sec;
  cli_key_widget.innerHTML = keys.view.sec;
};

var genwallet = function(lang) {
  var gui_key_widget = document.getElementById("gui_key_widget");
  var cli_key_widget = document.getElementById("cli_key_widget");
  var address_widget = document.getElementById("address_widget");
  //var address_qr_widget = document.getElementById("qrcodeADDRESS");
  var user_entropy_widget = Math.floor(100000000 + Math.random() * 900000000);

  var res = genkeys(user_entropy_widget.value, lang);
  var keys = res.keys;
  var mnemonic = res.mnemonic;

  address_widget.innerHTML = keys.public_addr;
  //mnemonic_widget.innerHTML = mnemonic;
  gui_key_widget.innerHTML = keys.spend.pub + keys.view.pub + keys.spend.sec + keys.view.sec;
  cli_key_widget.innerHTML = "Secret Spend Key: " + keys.spend.sec + "\n\nSecret View Key: " + keys.view.sec;

  var typeNumber = 0;
  var errorCorrectionLevel = 'L';


  var qr = qrcode(typeNumber, errorCorrectionLevel);
  qr.addData(keys.public_addr);
  qr.make();
  document.getElementById('qrcodeADDRESS').innerHTML = qr.createImgTag();

  var gui = keys.spend.pub + keys.view.pub + keys.spend.sec + keys.view.sec;
  var qr = qrcode(10, errorCorrectionLevel);
  qr.addData(gui);
  qr.make();
  document.getElementById('qrcodeGUI').innerHTML = qr.createImgTag();

  var cli = "Secret Spend Key: " + keys.spend.sec + "\n\nSecret View Key: " + keys.view.sec;
  var qr = qrcode(10, errorCorrectionLevel);
  qr.addData(cli);
  qr.make();
  document.getElementById('qrcodeCLI').innerHTML = qr.createImgTag();


};
