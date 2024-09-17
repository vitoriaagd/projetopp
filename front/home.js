const formContainer = document.getElementById('form-container');
const toggleFormButton = document.getElementById('toggle-form');
const recipeForm = document.getElementById('recipe-form');
const feed = document.getElementById('feed');

toggleFormButton.addEventListener('click', () => {
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
});

recipeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('recipe-title').value;
    const content = document.getElementById('recipe-content').value;

    const feedItem = document.createElement('div');
    feedItem.classList.add('feed-item');
    feedItem.innerHTML = `<h3>${title}</h3><p>${content}</p>`;

    feed.appendChild(feedItem);

    recipeForm.reset();
    formContainer.style.display = 'none';
});


