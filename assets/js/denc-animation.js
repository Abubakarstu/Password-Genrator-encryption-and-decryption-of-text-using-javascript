const boxdenc = document.getElementById('dencri');

const btndenc = document.getElementById('btndencri');

btndenc.addEventListener('click', function handleClick() {
  if (boxdenc.style.display === 'none') {
    boxdenc.style.display = 'block';

    btndenc.textContent = 'Hide Text Encriptor';
  } else {
    boxdenc.style.display = 'none';

    btndenc.textContent = 'Show Text Encriptor';
  }
});