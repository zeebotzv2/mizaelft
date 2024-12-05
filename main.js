onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Tap Heree').split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    // 
    titleElement.innerHTML = '<a href="loveee2.html" id="clickable-title" style="text-decoration: none; color: inherit;"></a>';
    const clickableTitle = document.getElementById('clickable-title');

    function appendTitle() {
      if (index < titles.length) {
        clickableTitle.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 300ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
