const itemInput = document.getElementById('item');
const addItemButton = document.getElementById('add-item');
const list = document.getElementById('list');

addItemButton.addEventListener('click', addListItem);

function addListItem() {
  const item = itemInput.value;
  if (item !== '') {
    const li = document.createElement('li');
    li.textContent = item;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', removeListItem);
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', completeListItem);
    li.appendChild(removeButton);
    li.appendChild(completeButton);
    list.appendChild(li);
    itemInput.value = '';
  }
}

function removeListItem(event) {
  const li = event.target.parentNode;
  list.removeChild(li);
  li.classList('remove')
}

function completeListItem(event) {
  const li = event.target.parentNode;
  li.classList.toggle('completed')
  

}