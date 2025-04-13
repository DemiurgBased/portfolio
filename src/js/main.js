async function loadHTML(url, elementId) {
    const response = await fetch(url);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
}

loadHTML('./html/components/header', 'header');
loadHTML('./html/sections/hero.html', 'hero');