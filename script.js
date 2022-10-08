// const menu = document.getElementsByClassName('menu');
const menu = document.getElementById('menu');

menu.addEventListener('click', (event) => {
  if (event.target.localName === 'li') {
    menu.getElementsByClassName('menu-active')[0].className = '';
    event.target.className = 'menu-active';
  }
});
