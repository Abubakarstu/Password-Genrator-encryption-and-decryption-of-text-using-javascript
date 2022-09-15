const boxenc = document.getElementById('encri');

const btnenc = document.getElementById('btnencri');

btnenc.addEventListener('click', function handleClick() {
  if (boxenc.style.display === 'none') {
    boxenc.style.display = 'block';

    btnenc.textContent = 'Hide Text Encriptor';
  } else {
    boxenc.style.display = 'none';

    btnenc.textContent = 'Show Text Encriptor';
  }
});
function copyencri() {
  var copyText = document.getElementById("encrypted-result");
  copyText.select();
  document.execCommand("copy");  
}