// ========================================
// Intersection Observer: スクロールアニメーション
// ========================================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // リスト系は順番にフェードイン
        const siblings = entry.target.parentElement.querySelectorAll(
          '.pain-item, .flow-step'
        );
        siblings.forEach((el, idx) => {
          setTimeout(() => el.classList.add('visible'), idx * 100);
        });
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.pain-item, .flow-step').forEach((el) => {
  observer.observe(el);
});

// ========================================
// ヘッダー: スクロールでシャドウ追加
// ========================================
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.10)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ========================================
// スムーススクロール（href="#..." のリンク）
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const offset = 70; // ヘッダー高さ分
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ========================================
// 料金プラン: ホバー強調
// ========================================
document.querySelectorAll('.plan').forEach((plan) => {
  plan.addEventListener('mouseenter', () => {
    plan.style.transform = 'translateY(-6px)';
    plan.style.transition = 'transform .25s';
  });
  plan.addEventListener('mouseleave', () => {
    plan.style.transform = 'translateY(0)';
  });
});

// ========================================
// CTAボタン: クリック時の軽いフィードバック
// ========================================
document.querySelectorAll('.btn-primary').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.style.transform = 'scale(.96)';
    setTimeout(() => { btn.style.transform = ''; }, 150);
  });
});
