// Main application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Navigation handling
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.dashboard-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show target section
            document.getElementById(targetSection).style.display = 'block';
            
            // Update active nav link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Search functionality
    const searchButton = document.getElementById('searchButton');
    const schoolSearch = document.getElementById('schoolSearch');
    
    searchButton.addEventListener('click', function() {
        const searchTerm = schoolSearch.value.toLowerCase();
        // Implement search functionality here
        console.log('Searching for:', searchTerm);
    });

    // Filter functionality
    const regionFilter = document.getElementById('regionFilter');
    const yearFilter = document.getElementById('yearFilter');
    
    regionFilter.addEventListener('change', updateFilters);
    yearFilter.addEventListener('change', updateFilters);
    
    function updateFilters() {
        const region = regionFilter.value;
        const year = yearFilter.value;
        // Implement filter functionality here
        console.log('Filters updated:', { region, year });
    }

    // Initialize the overview section as visible
    document.getElementById('overview').style.display = 'block';
}); 