const buttonList = document.querySelector('.list');

buttonList.addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
  });