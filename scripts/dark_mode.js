let darkTheme = false;
if (localStorage.getItem('darkTheme') === null) localStorage.setItem('darkTheme', darkTheme.toString());
else darkTheme = localStorage.getItem('darkTheme') === "true";

function invertColors(className) {
    let items = document.getElementsByClassName(className);
    for (let i = 0; i < items.length; i++) items.item(i).classList.toggle('inverted-colors');
}

function enableDarkMode() {
    localStorage.setItem('darkTheme', darkTheme.toString());
    document.body.classList.toggle('dark-mode');

    invertColors('logo');
    invertColors('link');

    document.getElementById('dark-mode-toggle').classList.toggle('inverted-colors');
}

function toggleDarkMode() {
    darkTheme = !darkTheme;
    enableDarkMode();
    document.body.classList.add('body-transition');
}
