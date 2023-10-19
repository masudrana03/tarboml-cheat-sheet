// Define a function to add search functionality to a select element
function addSearchToSelect(selectElement) {
    // Create a search input element
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';

    // Add an event listener to the search input
    searchInput.addEventListener('input', function () {
        const searchText = this.value.toLowerCase();

        // Loop through options and show/hide based on search text
        Array.from(selectElement.options).forEach(option => {
            const optionText = option.textContent.toLowerCase();
            option.style.display = optionText.includes(searchText) ? 'block' : 'none';
        });
    });

    // Insert the search input before the select element
    selectElement.parentNode.insertBefore(searchInput, selectElement);
}

// Get all select elements on the page
const selectElements = document.querySelectorAll('select');

// Add search functionality to each select element
selectElements.forEach(addSearchToSelect);
