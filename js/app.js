var headerMain = document.querySelector('.page-header');
var headerButton = document.querySelector('.page-header__button');

headerMain.classList.remove('page-header--nojs');

headerButton.addEventListener('click', function() {
  if (headerMain.classList.contains('page-header--nav-closed')) {
    headerMain.classList.remove('page-header--nav-closed');
    headerMain.classList.add('page-header--nav-opened');
  } else {
    headerMain.classList.add('page-header--nav-closed');
    headerMain.classList.remove('page-header--nav-opened');
  }
});
