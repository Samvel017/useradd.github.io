let btnMod = document.querySelector('#add');
let btnAdd = document.querySelector('#addEl');
let modal = document.querySelector('.modal-bg');
let modalBl = document.querySelector('.modal')
let users = document.querySelector('.user-add');
let inputs = document.querySelectorAll('input');
let actUs = document.querySelector('#actUs')


btnMod.addEventListener('click', () => {
  modal.style.display = 'grid';
});
let ind = 0;
modal.addEventListener('click', (el) => {
  el.stopPropagation();
  if (el.target == modal && el.target != modalBl) {
    modal.style.display = 'none'
  }
});

btnAdd.addEventListener('click', () => {
  let usName = document.querySelector('#name').value;
  let id = document.querySelector('#id').value;
  let age = document.querySelector('#age').value;

  let user = document.createElement('ul');
  user.setAttribute('class', 'user');

  let elUs = document.createElement('li');
  let elId = document.createElement('li');
  let date = document.createElement('li');
  let elAge = document.createElement('li');

  let delBut = document.createElement('button');
  delBut.setAttribute('id', 'delBut');
  delBut.innerHTML = 'Remove';
  elUs.innerHTML = usName;
  elId.innerHTML = id;
  date.innerHTML = '21 Oct 2021';
  elAge.innerHTML = age;

  user.append(elUs);
  user.append(elId);
  user.append(date);
  user.append(elAge);
  user.append(delBut);

  users.append(user);

  modal.style.display = 'none';

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
  activeUsersAdd()
  delBut.addEventListener('click', () => {
    delBut.parentElement.remove();
    activeUsersDel()
  });

});

let delBut = document.querySelector('#delBut');

function activeUsersAdd() {
  ind++
  actUs.innerHTML = ind
}
function activeUsersDel() {
  ind--
  actUs.innerHTML = ind
}