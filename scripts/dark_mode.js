let darkTheme = false;
if (localStorage.getItem('darkTheme') === null) localStorage.setItem('darkTheme', darkTheme.toString());
else darkTheme = localStorage.getItem('darkTheme') === "true";

function enableDarkMode() {
    localStorage.setItem('darkTheme', darkTheme.toString());
    document.body.classList.toggle('dark-mode');

    const logos = document.getElementsByClassName('logo');
    for (let i = 0; i < logos.length; i++) logos.item(i).classList.toggle('inverted-colors');

    document.getElementById('dark-mode-toggle').classList.toggle('inverted-colors');
}

function toggleDarkMode() {
    darkTheme = !darkTheme;
    enableDarkMode();
    document.body.classList.add('body-transition');
}
