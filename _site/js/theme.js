document.addEventListener('DOMContentLoaded', function() {
    const html  = document.querySelector('html');
    const themeEls = [
        document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]'),
        document.querySelector('meta[name="theme-color"]')
    ]

    function getTheme() { return html.dataset.theme }
    function setTheme(theme) { 
        themeEls.forEach(el=>el.content=html.dataset[`${theme}ThemeColor`]);
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
