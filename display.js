const list = document.getElementById('list');
const addNew = document.getElementById('form');
const contact = document.getElementById('contact');
const listLink = document.getElementById('list-link');
const formLink = document.getElementById('form-link');
const contactLink = document.getElementById('contact-link');

listLink.addEventListener('click', () => {
  if (!addNew.classList.contains('hidden')) {
    addNew.classList.add('hidden');
  }

  if (!contact.classList.contains('hidden')) {
    contact.classList.add('hidden');
  }

  if (list.classList.contains('hidden')) {
    list.classList.remove('hidden');
  }
});

formLink.addEventListener('click', () => {
  if (!list.classList.contains('hidden')) {
    list.classList.add('hidden');
  }

  if (!contact.classList.contains('hidden')) {
    contact.classList.add('hidden');
  }

  if (addNew.classList.contains('hidden')) {
    addNew.classList.remove('hidden');
  }
});

contactLink.addEventListener('click', () => {
  if (!list.classList.contains('hidden')) {
    list.classList.add('hidden');
  }

  if (!addNew.classList.contains('hidden')) {
    addNew.classList.add('hidden');
  }

  if (contact.classList.contains('hidden')) {
    contact.classList.remove('hidden');
  }
});

const date = new Date();
const currentTime = document.getElementById('get-time');

currentTime.innerHTML = date;
