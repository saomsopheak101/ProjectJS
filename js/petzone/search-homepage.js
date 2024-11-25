
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

const items = [
    { name: 'Pet Day Care', link: './pages/petDayCare.html' },
    { name: 'Pet Grooming', link: './pages/petGrooming.html' },
    { name: 'Pet Consulting', link: './pages/petConsult.html' },
    { name: 'Pet Training', link: 'pages/petTraining.html' },
    { name: 'FAQ', link: 'pages/faq.html' },
    { name: 'Profile', link: 'pages/profile.html' }
];

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    searchResults.innerHTML = ''; // Clear previous results

    if (query) {
        const filteredItems = items.filter(item => 
            item.name.toLowerCase().includes(query)
        );

        filteredItems.forEach(item => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.style.cursor = 'pointer';

            const link = document.createElement('a');
            link.href = item.link; // Set the link
            link.textContent = item.name; // Set the display text
            link.className = 'nav-link'; // Add Bootstrap link class

            li.appendChild(link);
            searchResults.appendChild(li);
        });

        // Show results if there are any
        if (filteredItems.length > 0) {
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none'; // Hide if no matches
        }
    } else {
        searchResults.style.display = 'none'; // Hide if input is empty
    }
});

// Hide results when clicking outside
document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = 'none'; // Hide results
    }
});