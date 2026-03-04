function addTask() {
  var input = document.getElementById('taskInput');
  var author = document.getElementById('authorInput');

  if (input.value === '') {
    alert('Introduceti un task!');
    return;
  }

  var li = document.createElement('li');
  li.textContent = input.value + ' (adaugat de: ' + author.value + ')';
  document.getElementById('taskList').appendChild(li);

  input.value = '';
  author.value = '';
}