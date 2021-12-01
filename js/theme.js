document.addEventListener('DOMContentLoaded', function() {
    const html  = document.querySelector('html');

    function getTheme() { return html.dataset.theme }
    function setTheme(theme) { 
        html.dataset.theme = theme 
        saveTheme(theme);
    }

    function isLightTheme() { return getTheme()==="light" }
    function isDarkTheme() { return getTheme()==="dark" }
    function loadTheme() { setTheme( LSgetItem('theme', 'light') ) }
    function saveTheme(theme) { LSsetItem('theme', theme||getTheme()) }

    
    function toggleTheme() {
        setTheme( isLightTheme()?'dark':'light' );
    }

    loadTheme();
    document.querySelectorAll('.themeBtn').forEach(el=>el.addEventListener('click', toggleTheme));
})
