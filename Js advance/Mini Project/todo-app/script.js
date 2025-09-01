const wrapper = document.querySelector(".wrapper");
const menuBtn = document.querySelector(".menu-btn");
const backBtn = document.querySelector(".back-btn");

const toggleScreen = () => {
	wrapper.classList.toggle("show-category");
}

menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);

// Add Form toggle
const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector(".add-task");
const blackBackdrop = document.querySelector(".black-backdrop");

const toggleAddTaskForm = () => {
	addTaskForm.classList.toggle("active");
	blackBackdrop.classList.toggle("active");
	addTaskBtn.classList.toggle("active");
}

addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackdrop.addEventListener("click", toggleAddTaskForm);

// Categories
let categoriesObj = [
	{
	    title: "Personal",
	    img: "images/boy.png",
	},
	{
	    title: "Work",
	    img: "images/briefcase.png",
	},
	{
	    title: "Shopping",
	    img: "images/shopping.png",
	},
	{
	    title: "Coding",
	    img: "images/web-design.png",
	},
	{
	    title: "Health",
	    img: "images/healthcare.png",
	},
	{
	    title: "Fitness",
	    img: "images/dumbbell.png",
	},
	{
	    title: "Education",
	    img: "images/education.png",
	},
	{
	    title: "Finance",
	    img: "images/saving.png",
	}
];

// Tasks
let tasksObj = [
  {
    id: 1,
    task: "Go to market",
    category: "Shopping",
    completed: false,
  },
  {
    id: 2,
    task: "Read a chapter of a book",
    category: "Personal",
    completed: false,
  },
  {
    id: 3,
    task: "Prepare presentation for meeting",
    category: "Work",
    completed: false,
  },
  {
    id: 4,
    task: "Complete coding challenge",
    category: "Coding",
    completed: false,
  },
  {
    id: 5,
    task: "Take a 30-minute walk",
    category: "Health",
    completed: false,
  },
  {
    id: 6,
    task: "Do a 20-minute HIIT workout",
    category: "Fitness",
    completed: false,
  },
  {
    id: 7,
    task: "Watch an educational video online",
    category: "Education",
    completed: false,
  },
  {
    id: 8,
    task: "Review monthly budget",
    category: "Finance",
    completed: false,
  },
  {
    id: 9,
    task: "Buy groceries for the week",
    category: "Shopping",
    completed: false,
  },
  {
    id: 10,
    task: "Write in a journal",
    category: "Personal",
    completed: false,
  },
  {
    id: 11,
    task: "Send follow-up emails",
    category: "Work",
    completed: false,
  },
  {
    id: 12,
    task: "Work on a coding side project",
    category: "Coding",
    completed: false,
  },
  {
    id: 13,
    task: "Try a new healthy recipe",
    category: "Health",
    completed: false,
  },
  {
    id: 14,
    task: "Attend a yoga class",
    category: "Fitness",
    completed: false,
  },
  {
    id: 15,
    task: "Read an article about a new topic",
    category: "Education",
    completed: false,
  },
  {
    id: 16,
    task: "Set up automatic bill payments",
    category: "Finance",
    completed: false,
  },
  {
    id: 17,
    task: "Buy new clothes",
    category: "Shopping",
    completed: false,
  },
  {
    id: 18,
    task: "Meditate for 10 minutes",
    category: "Personal",
    completed: false,
  },
  {
    id: 19,
    task: "Prepare agenda for team meeting",
    category: "Personal",
    completed: false,
	}
];

let selectedCategory = categoriesObj[0];

const categoryContainer = document.querySelector(".categories");
const totalTask = document.querySelector(".total-task");
const categoryImage = document.querySelector("#category-img");
const categoryTaskTotal = document.querySelector(".category-task");
const categoryTitle = document.querySelector(".category-title");
const taskContainer = document.querySelector(".tasks");
const categorySelect = document.querySelector("#category-select");
const taskInput = document.querySelector("#task-input");
const cancelBtn = document.querySelector(".cancel-btn");
const addBtn = document.querySelector(".add-btn");

// Total Tasks
const totalTasks = () => {
	const filteredyTask = tasksObj.filter(function(eventTask){
		return eventTask.category.toLowerCase() === selectedCategory.title.toLowerCase();
	});
	categoryTaskTotal.innerHTML = filteredyTask.length + " " + "Tasks";
	totalTask.innerText = tasksObj.length;
};

// categories Get
const categories = () => {
	categoryContainer.innerHTML = "";
	categoriesObj.forEach(function(eventCategory){

		const categoryTask = tasksObj.filter(function(eventTask){
			return eventTask.category.toLowerCase() === eventCategory.title.toLowerCase();
				// console.log(eventTask.category);
		});

		const category = document.createElement("div");
		category.classList.add("category");
		category.addEventListener("click", function(){
			wrapper.classList.add("show-category");
			selectedCategory = eventCategory;
			categoryImage.src = eventCategory.img; 
			categoryTitle.innerText = eventCategory.title;
			totalTasks();
			renderTasks();
		});

		const left = document.createElement("div");
		left.classList.add("left");

		const img = document.createElement("img");
		img.src = eventCategory.img;

		const content =document.createElement("div");
		content.classList.add("content");

		const h1 = document.createElement("h1");
		h1.innerText = eventCategory.title;

		const p = document.createElement("p");
		p.innerText = categoryTask.length;

		const span = document.createElement("span");
		span.innerText = " Task";

		const options = document.createElement("div");
		options.classList.add("options");

		const toggleBtn = document.createElement("div");
		toggleBtn.classList.add("toggle-btn");

		const faSolid = document.createElement("i");
		faSolid.classList.add("fa-solid","fa-ellipsis-vertical");

		p.appendChild(span);
		content.append(h1, p);
		left.append(img, content);
		toggleBtn.append(faSolid);
		options.append(toggleBtn);
		category.append(left, options);
		categoryContainer.append(category);
	});
};

// Tasks Get
const renderTasks = () => {
	taskContainer.innerHTML = "";
	const selectedTasks = tasksObj.filter(function(eventTask){
		return eventTask.category.toLowerCase() === selectedCategory.title.toLowerCase();
	});

	if(selectedTasks.length === 0){
		taskContainer.innerHTML = `<p class"no-task">No tasks added for this category</p>`;
	}else{
		selectedTasks.forEach(function(taskList){
			const taskDiv = document.createElement("div");
			taskDiv.classList.add("task-wrapper");

			const label = document.createElement("label");
			label.classList.add("task");
			label.setAttribute("for", taskList.id);

			const checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.id = taskList.id;
			checkbox.name = taskList.name;
      		checkbox.checked = taskList.completed;

      		checkbox.addEventListener("change", () => {
        		const index = tasksObj.findIndex((t) => t.id === taskList.id);
        		if (index !== -1) {
					tasksObj[index].completed = checkbox.checked;
					saveLocal();
				};
      		});

      		const checkMark = document.createElement("span");
      		checkMark.classList.add("checkmark");

      		const checkIcon = document.createElement("i");
      		checkIcon.classList = "fa-solid fa-check";

      		const taskp = document.createElement("p");
      		taskp.innerText = taskList.task;

      		const taskDelete = document.createElement("div");
      		taskDelete.classList.add("delete");

      		const deleteIcon = document.createElement("i");
      		deleteIcon.classList = "fa-solid fa-trash";

      		label.appendChild(checkbox);
					label.appendChild(checkMark);
					label.appendChild(taskp);
					checkMark.appendChild(checkIcon);
      		taskDelete.appendChild(deleteIcon);
      		taskDiv.appendChild(label);
					taskDiv.appendChild(taskDelete);
					taskContainer.appendChild(taskDiv);

					taskDelete.addEventListener("click", () => {
			    const deleteIndex = tasksObj.findIndex((t) => t.id === taskList.id);
			    tasksObj.splice(deleteIndex, 1);
			    saveLocal();
			    renderTasks();
			});
		});
		categories();
		totalTasks();
	};
};

// Store localStorage
const saveLocal = () => {
	localStorage.setItem("tasks", JSON.stringify(tasksObj));
};

// Get localStorage
const getLocal = () => {
	const localTasks = JSON.parse(localStorage.getItem("tasks"));
	if(localTasks){
		tasksObj = localTasks;
	};
};

// Cancel form
cancelBtn.addEventListener("click", toggleAddTaskForm);

// Add Data form
addBtn.addEventListener("click", function(){
	const taskName = taskInput.value;
	const categoryName = categorySelect.value;
	if (taskName === "") {
		showPopup();
	}else{
		const newTask = {
			id: tasksObj.length + 1,
			task: taskName,
			category: categoryName,
			completed: false
		};
		tasksObj.push(newTask);
		taskInput.value = "";
		saveLocal();
		toggleAddTaskForm();
		renderTasks();
	};
});

// select get
categoriesObj.forEach((category) => {
  	const option = document.createElement("option");
  	option.value = category.title.toLowerCase();
  	option.textContent = category.title;
  	categorySelect.appendChild(option);
});

// Error Message Popup
function showPopup() {
	const popupBackdrop = document.querySelector(".popup-backdrop");
	const popup = document.getElementById("popupMessage");
	const closeButton = popup.querySelector(".popup-close");

	popup.classList.remove("hidden");
	popupBackdrop.classList.toggle("active");

	closeButton.onclick = function () {
		popup.classList.add("hidden");
		popupBackdrop.classList.toggle("active");
	};
};

getLocal();
totalTasks();
renderTasks();








