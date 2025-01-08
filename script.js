document.addEventListener("DOMContentLoaded", function () {
    const sections = ['profile', 'experience', 'education', 'courses', 'skills'];

    showSection('profile');
    changeTab(document.querySelector('nav ul li a[href="#profile"]'));

    function showSection(sectionId) {
        sections.forEach(id => {
            const section = document.getElementById(id);
            section.style.display = id === sectionId ? 'flex' : 'none';
            section.classList.toggle('active', id === sectionId);
        });
    }

    sections.forEach(id => {
        const tab = document.querySelector(`nav a[href="#${id}"]`);
        if (tab) {
            tab.addEventListener('click', function (event) {
                event.preventDefault();
                showSection(id);
                changeTab(this);
            });
        }
    });
});

function changeTab(selectedTab) {
    const tabs = document.querySelectorAll('nav ul li a');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    selectedTab.classList.add('active');

    // Update the body's background image
    const selectedSectionId = selectedTab.getAttribute('href').substring(1); // Remove the '#' from the href
    const selectedSection = document.getElementById(selectedSectionId);
    const backgroundImage = selectedSection.getAttribute('data-bg');
    document.body.style.backgroundImage = `url("${backgroundImage}")`;
}

function toggleContent(element) {
    const content = element.querySelector('.content');
    const toggleText = element.querySelector('.title span:last-child'); // Target the text span

    if (content.style.maxHeight) {
        content.style.maxHeight = null; // Collapse content
        toggleText.textContent = "(Click to Expand)"; // Update text
    } else {
        content.style.maxHeight = content.scrollHeight + "px"; // Expand content
        toggleText.textContent = "(Click to Minimize)"; // Update text
    }
}


