let notes = [];
let editingNoteId = null;

function loadNotes() {
  return JSON.parse(localStorage.getItem('quickNotes')) || [];
};

function generateId() {
    return Date.now().toString();
};

function saveNotes() {
    localStorage.setItem('quickNotes', JSON.stringify(notes));
};

function saveNote(event) {
  event.preventDefault(); 

	const title = document.getElementById('noteTitle').value.trim();
  const content = document.getElementById('noteContent').value.trim();

    if (!title && !content) return;

    if(editingNoteId) {
      // Update existing Note
      const noteIndex = notes.findIndex(note => note.id === editingNoteId);
      notes[noteIndex] = {
        ...notes[noteIndex],
        title: title,
        content: content
      }
    } else {
      // Add New Note
      notes.unshift({
        id: generateId(),
        title: title,
        content: content
      })
    }

  	saveNotes();
  	closeNoteDialog()
  	renderNotes();
};

function deleteNote(noteId) {
  notes = notes.filter(function(note){
    return note.id != noteId
  });
  saveNotes()
  renderNotes()
}

function renderNotes() {
  const notesContainer = document.getElementById('notesContainer');
  notesContainer.innerHTML = '';

  if(notes.length === 0) {
    // show some fall back elements
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.innerHTML = `
      <h2>No notes yet</h2>
      <p>Create your first note to get started!</p>
      <button class="add-note-btn" id="addBtn">+ Add Your First Note</button>
    `;
    notesContainer.appendChild(emptyState);
    return;
  };

  notes.forEach(function(note){
    const card = document.createElement('div');
    card.className = 'note-card';

    const titleEl = document.createElement('h3');
    titleEl.className = 'note-title';
    titleEl.textContent = note.title;

    const contentEl = document.createElement('p');
    contentEl.className = 'note-content';
    contentEl.textContent = note.content;

    const actionsEl = document.createElement('div');
    actionsEl.className = 'note-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.title = 'Edit Note';
    editBtn.innerHTML = `<img src="icons/edit.svg" />`;

    editBtn.addEventListener('click', () => openNoteDialog(note.id));

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.title = 'Delete Note';
    deleteBtn.innerHTML = `<img src="icons/close.svg" />`;

    deleteBtn.addEventListener('click', () => deleteNote(note.id));

    // Append buttons
    actionsEl.appendChild(editBtn);
    actionsEl.appendChild(deleteBtn);

    // Build card
    card.appendChild(titleEl);
    card.appendChild(contentEl);
    card.appendChild(actionsEl);

    notesContainer.appendChild(card);
  });
};

// Open DIalog Box
function openNoteDialog(noteId = null) {
  	const dialog = document.getElementById('noteDialog');
  	const titleInput = document.getElementById('noteTitle');
  	const contentInput = document.getElementById('noteContent');

    if(noteId) {
      // Edit Mode
      const noteToEdit = notes.find(function(note) {
        return note.id === noteId;
      });

      editingNoteId = noteId;
      document.getElementById('dialogTitle').textContent = 'Edit Note';
      titleInput.value = noteToEdit.title;
      contentInput.value = noteToEdit.content;
    }
    else {
      // Add Mode
      editingNoteId = null
      document.getElementById('dialogTitle').textContent = 'Add New Note';
      titleInput.value = '';
      contentInput.value = '';
    }

  	dialog.showModal();
  	titleInput.focus();
};

// Close Dialog
document.querySelectorAll(".close-btn, .cancel-btn").forEach(function(el){
	el.addEventListener("click", closeNoteDialog);
});
function closeNoteDialog(){
	document.getElementById('noteDialog').close();
};

function toggleTheme(){
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.getElementById('themeToggleBtn').innerHTML = isDark ? `<img src="icons/sun.svg">` : `<img src="icons/moon.svg">`
};

// Store Theme Color
function applyStoredTheme(){
  if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark-theme');
    document.getElementById('themeToggleBtn').innerHTML = `<img src="icons/sun.svg"/>`;
  };
};

// Close Dialog Outside Click/
document.addEventListener('DOMContentLoaded', function() {
  applyStoredTheme();
	notes = loadNotes();
  renderNotes();

  document.getElementById('noteForm').addEventListener('submit', saveNote);

  const staticAddNoteBtn = document.getElementById('addNoteBtn');
  if(staticAddNoteBtn) {
    staticAddNoteBtn.addEventListener('click', function() {
      openNoteDialog();
    });
  };

  const addBtn = document.getElementById('addBtn');
  if(addBtn) {
    addBtn.addEventListener('click', function() {
      openNoteDialog();
    });
  };

  document.getElementById('noteDialog').addEventListener('click', function(event) {
    if(event.target === this) {
      closeNoteDialog();
    };
  });

  document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
});

