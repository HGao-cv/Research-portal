// 加载侧边栏CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://hgao-cv.github.io/Research-portal/nav.css';
document.head.appendChild(link);

// 插入侧边导航栏HTML
const navHTML = `
<div class="side-nav">
  <a href="https://hgao-cv.github.io/Research-portal/">🏠 Home</a>
  <a href="https://hgao-cv.github.io/RAD/">RAD</a>
  <a href="https://hgao-cv.github.io/RAD2/">RAD2</a>
</div>
`;

// 把导航加到页面最顶部
document.body.insertAdjacentHTML('afterbegin', navHTML);
