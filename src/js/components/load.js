export const UseLoad = () => {
    async function loadHTML(url, elementId) {
        const response = await fetch(url);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    }
    
    loadHTML ('./html/components/header.html', 'header');
    loadHTML ('./html/sections/hero.html', 'hero');
    loadHTML ('./html/sections/about.html', 'about');
    loadHTML ('./html/sections/profit.html', 'profit');

}