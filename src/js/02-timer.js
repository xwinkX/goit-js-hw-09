document.getElementsByClassName('timer')[0].style.display = 'flex';
document.getElementsByClassName('timer')[0].style.marginTop = '20px';
for (let i = 0; i <= 4; i += 1) {
  document.getElementsByClassName('field')[i].style.display = 'flex';
  document.getElementsByClassName('field')[i].style.flexDirection = 'column';
  document.getElementsByClassName('field')[i].style.marginRight = '10px';
  document.getElementsByClassName('value')[i].style.fontSize = '45px';
  document.getElementsByClassName('value')[i].style.textAlign = 'center';
  document.getElementsByClassName('label')[i].style.fontSize = '25px';
}
