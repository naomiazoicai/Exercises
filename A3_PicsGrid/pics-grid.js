async function fetchPhotos() {
    const response = await fetch('https://picsum.photos/v2/list');
    const photos = await response.json();
    displayPhotos(photos);
    populateAuthorFilter(photos);
}

function displayPhotos(photos) {
    const photoGrid = document.getElementById('photo-grid');
    photoGrid.innerHTML = '';

    photos.forEach(photo => {
        const photoCard = document.createElement('div');
        photoCard.classList.add('photo-card');

        photoCard.innerHTML = `
            <img src="${photo.download_url}" alt="Photo by ${photo.author}">
            <h3>${photo.author}</h3>
            <p>nice description</p>
        `;
        photoGrid.appendChild(photoCard);
    });
}

function populateAuthorFilter(photos) {
    const authorFilter = document.getElementById('authorFilter');
    const authors = [...new Set(photos.map(photo => photo.author))];

    authors.forEach(author => {
        const option = document.createElement('option');
        option.value = author;
        option.textContent = author;
        authorFilter.appendChild(option);
    });
}

function filterPhotos() {
    const selectedAuthor = document.getElementById('authorFilter').value;

    fetch('https://picsum.photos/v2/list')
        .then(response => response.json())
        .then(photos => {
            const filteredPhotos = selectedAuthor === 'all' ? photos : photos.filter(photo => photo.author === selectedAuthor);
            displayPhotos(filteredPhotos);
        });
}

fetchPhotos();
