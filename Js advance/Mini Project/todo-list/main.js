window.addEventListener("load", function(){
	todos = JSON.parse(localStorage.getItem("todos")) || [];

	const nameInput = document.querySelector("#name");
	const nameTodoForm = document.querySelector("#new-todo-form");

	const username = localStorage.getItem("username") || "";
	nameInput.value = username;

	nameInput.addEventListener("change", function(e){
		localStorage.setItem("username", e.target.value);
	});

	nameTodoForm.addEventListener("submit", function(e){
		e.preventDefault();

  		const todoObj = {
			content: document.querySelector("#content").value,
 			category: document.querySelector('input[name="category"]:checked')?.value,
		    done: false,
		    createdAt: new Date().getTime()
		};

		todos.push(todoObj);
		localStorage.setItem("todos",JSON.stringify(todos));

		nameTodoForm.reset();
		displayTodos();
 	});
 	displayTodos();
});


function displayTodos(){
	const todoList = document.querySelector("#todo-list");
	todoList.innerHTML = "";

	todos.forEach(function(eventTodo, index) {
		const todoItem = document.createElement('div');
		todoItem.classList.add('todo-item');

		const label = document.createElement('label');
		const input = document.createElement('input');
		input.type = 'checkbox';
		input.checked = eventTodo.done;

		const span = document.createElement('span');
		span.classList.add('bubble');
		if (eventTodo.category == 'personal') {
			span.classList.add('personal');
		} else {
			span.classList.add('business');
		}

		const content = document.createElement('div');
		content.classList.add('todo-content');
		content.innerHTML = `<input type="text" value="${eventTodo.content}" readonly>`;

		const actions = document.createElement('div');
		actions.classList.add('actions');

		const edit = document.createElement('button');
		edit.classList.add('edit');
		edit.innerHTML = 'Edit';

		const deleteButton = document.createElement('button');
		deleteButton.classList.add('delete');
		deleteButton.innerHTML = 'Delete';

		label.appendChild(input);
		label.appendChild(span);
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		todoItem.appendChild(label);
		todoItem.appendChild(content);
		todoItem.appendChild(actions);
		todoList.appendChild(todoItem);

		if (eventTodo.done) {
			todoItem.classList.add('done');
		}
		
		input.addEventListener('change', (e) => {
			eventTodo.done = e.target.checked;
			localStorage.setItem('todos', JSON.stringify(todos));

			if (eventTodo.done) {
				todoItem.classList.add('done');
			} else {
				todoItem.classList.remove('done');
			};
			displayTodos();
		});

		edit.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				eventTodo.content = e.target.value;
				localStorage.setItem('todos', JSON.stringify(todos));
				displayTodos();
			});
		});

		deleteButton.addEventListener('click', function(e) {
			todos.splice(index, 1);
			localStorage.setItem('todos', JSON.stringify(todos));
			displayTodos();
		});
	});
};





















