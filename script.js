const btns = document.querySelectorAll('.tab-btn');
const pages = document.querySelectorAll('.page');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    // 切换按钮高亮
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 切换页面
    const target = btn.dataset.target;
    pages.forEach(page => {
      page.classList.remove('active');
      if (page.id === target) {
        page.classList.add('active');
      }
    });
  });
});
