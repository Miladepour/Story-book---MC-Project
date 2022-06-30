var B1, B2, B3, MeatMenu, V1, VegMenu, V2, V3, VoucherNo, QrCode;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


B1 = 'https://cynoco.co.uk/wp-content/uploads/2022/06/IMG_792544.png';
B2 = 'https://cynoco.co.uk/wp-content/uploads/2022/06/IMG_792224.png';
B3 = 'https://cynoco.co.uk/wp-content/uploads/2022/06/IMG_79261.png';
MeatMenu = [B1, B2, B3];
V1 = 'https://cynoco.co.uk/wp-content/uploads/2022/06/IMG_792223.png';
V2 = 'https://cynoco.co.uk/wp-content/uploads/2022/06/133322.png';
V3 = 'https://cynoco.co.uk/wp-content/uploads/2022/06/IMG_792221.png';
VegMenu = [V1, V2, V3];
VoucherNo = ['**MC20022**', '**MC20023**', '**MC20024**', '**MC20025**', '**MC20026**'];
QrCode = 'https://cynoco.co.uk/wp-content/uploads/2022/06/CLICK-TO-PLAY-1.gif';


document.getElementById('button').addEventListener('click', (event) => {
  event.target.style.backgroundColor = '#ff0000';
  let element_img = document.getElementById('img');
  if (getNumberOrString(document.getElementById('text').value) == 'meat') {
    while (MeatMenu) {
      if(--window.LoopTrap <= 0) throw "Infinite loop.";
      element_img.setAttribute("src", randomMember(MeatMenu));
      let element_voucher = document.getElementById('voucher');
      element_voucher.innerText = randomMember(VoucherNo);
      let element_qrcode = document.getElementById('qrcode');
      element_qrcode.setAttribute("src", QrCode);
      let element_note = document.getElementById('note');
      element_note.innerText = 'Please take a screenshot and save it. Thank you for choosing mcdonald\'s';
      let element_story = document.getElementById('story');
      element_story.replaceChildren();
    }
  } else if (getNumberOrString(document.getElementById('text').value) == 'veg') {
    while (VegMenu) {
      if(--window.LoopTrap <= 0) throw "Infinite loop.";
      element_img.setAttribute("src", randomMember(VegMenu));
      let element_voucher2 = document.getElementById('voucher');
      element_voucher2.innerText = randomMember(VoucherNo);
      let element_qrcode2 = document.getElementById('qrcode');
      element_qrcode2.setAttribute("src", QrCode);
      let element_note2 = document.getElementById('note');
      element_note2.innerText = 'Please take a screenshot and save it. Thank you for choosing mcdonald\'s';
      let element_story2 = document.getElementById('story');
      element_story2.replaceChildren();
    }
  }

});