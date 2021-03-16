function showIconCaption(iconName) {
    let values = {
        'github-logo': "GitHub",
        'about-me-icon': "O mnie"
    };
    for (let key in values)
        if (iconName === key) document.getElementById('icon-info').innerHTML = values[key];
}

const logos = document.getElementsByClassName('logo');
for (let i = 0; i < logos.length; i++)
    logos.item(i).addEventListener('mouseover', () => showIconCaption(logos.item(i).id));
