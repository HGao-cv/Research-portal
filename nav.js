// 加载CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://hgao-cv.github.io/Research-portal/nav.css';
document.head.appendChild(link);

// 插入导航栏
const navHTML = `
<div class="global-nav">
  <a href="https://hgao-cv.github.io/Research-portal/">🏠 Home</a>
  <a href="https://hgao-cv.github.io/RAD/">RAD</a>
  <a href="https://hgao-cv.github.io/RAD2/">RAD2</a>
</div>
`;

// 把导航加到页面最顶部
document.body.insertAdjacentHTML('afterbegin', navHTML);
