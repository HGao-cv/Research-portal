// 加载样式
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://hgao-cv.github.io/Research-portal/nav.css';
document.head.appendChild(link);

// 导航结构（可折叠）
const navHTML = `
<button class="nav-toggle" id="navToggle">☰</button>
<div class="side-nav collapsed" id="sideMenu">
  <a href="https://hgao-cv.github.io/Research-portal/">🏠 Home</a>
  <a href="https://hgao-cv.github.io/VADv2/">VADv2</a>
  <a href="https://hgao-cv.github.io/RAD/">RAD</a>
  <a href="https://hgao-cv.github.io/RAD-2/">RAD2</a>
</div>
`;

document.body.insertAdjacentHTML('afterbegin', navHTML);

// 折叠/展开逻辑
const toggleBtn = document.getElementById('navToggle');
const sideMenu = document.getElementById('sideMenu');

toggleBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('collapsed');
  toggleBtn.classList.toggle('expanded');
});
