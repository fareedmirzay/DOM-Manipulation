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






  // Part 2: Creating a Menu Bar for DOM-Manipulation
  
  // 1. Select and cache the <nav id="top-menu"> element
  const topMenuEl = document.querySelector('#top-menu');
  console.log('Selected <nav id="top-menu"> element:', topMenuEl);

  // 2. Set the height of topMenuEl to 100%
  topMenuEl.style.height = '100%';
  console.log('Height of <nav id="top-menu"> set to:', topMenuEl.style.height);

  // 3. Set the background color of topMenuEl
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  console.log('Background color of <nav id="top-menu"> set to:', getComputedStyle(topMenuEl).backgroundColor);

  // 4. Add a class of flex-around to topMenuEl
  topMenuEl.classList.add('flex-around');
  console.log('Class list of <nav id="top-menu">:', topMenuEl.classList.value);
});
