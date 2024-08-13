document.addEventListener('DOMContentLoaded', () => {
  // 1. Select and cache the <main> element
  const mainEl = document.querySelector('main');
  console.log('Selected <main> element:', mainEl);

  // 2. Set the background color of mainEl
  mainEl.style.backgroundColor = 'var(--main-bg)';
  console.log('Background color set to:', getComputedStyle(mainEl).backgroundColor);

  // 3. Set the content of mainEl
  mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
  console.log('Content of <main> element:', mainEl.innerHTML);

  // 4. Add a class of flex-ctr to mainEl
  mainEl.classList.add('flex-ctr');
  console.log('Class list of <main> element:', mainEl.classList.value);
});
