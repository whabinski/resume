document.addEventListener("DOMContentLoaded", function () {
    const sections = ['bio', 'experience', 'education', 'skills'];

    showSection('bio');
    changeTab

    function showSection(sectionId) {
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    sections.forEach(id => {
        const tab = document.querySelector(`nav a[href="#${id}"]`);
        if (tab) {
            tab.addEventListener('click', function (event) {
                event.preventDefault();
                showSection(id);
            });
        }
    });
});

function changeTab(selectedTab) {
    var tabs = document.querySelectorAll('nav ul li a');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    selectedTab.classList.add('active');
}
