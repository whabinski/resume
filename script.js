document.addEventListener("DOMContentLoaded", function () {
    const sections = ['bio', 'experience', 'education', 'courses', 'skills'];

    showSection('bio');
    changeTab(document.querySelector('nav ul li a[href="#bio"]'));

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
    var content = element.querySelector('.content');
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

