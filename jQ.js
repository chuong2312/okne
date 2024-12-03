// Thêm hiệu ứng đổ bóng cho thanh điều hướng khi cuộn
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.boxShadow = window.scrollY > 50 ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none';
  });
  const btn = document.querySelectorAll()