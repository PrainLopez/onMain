// 首页增量动效（仅首页加载，渐进增强）。
// 无 JS / JS 失败时三个效果都不出现，现有纯 CSS 动效照常兜底。
import { animate, stagger, svg, text } from "animejs";

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

// 首次进入视口时触发一次回调（content-visibility: auto 的离屏卡片 IO 正常工作）。
function onFirstVisible(el: Element, cb: () => void) {
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        io.unobserve(el);
        cb();
        break;
      }
    }
  });
  io.observe(el);
}

if (!reduced) {
  const cards = document.querySelectorAll<HTMLElement>(".label-panel");

  // 0. spine 底部 meta 逐行 scramble 揭示（无 JS 时静态显示）
  document.querySelectorAll(".spine-foot .scramble").forEach((el, i) => {
    animate(el, {
      innerHTML: text.scrambleText({
        chars: "A-Z0-9",
        revealRate: 10,
        revealDelay: 1500 + i * 500
      })
    });
  });

  // 1. 最新卡片签名 SVG 描边绘制
  const signature = document.querySelector<SVGPathElement>(".title-icon path");
  if (signature) {
    const panel = signature.closest(".label-panel") ?? signature;
    onFirstVisible(panel, () => {
      animate(svg.createDrawable(signature), {
        draw: "0 1",
        duration: 500,
        ease: "inOutSine"
      });
    });
  }

  cards.forEach((card) => {
    // 2. spec-grid 行交错入场（内联样式设初值，保证无 JS 时可见）
    const articles = card.querySelectorAll<HTMLElement>(".spec-grid article");
    articles.forEach((a) => {
      a.style.opacity = "0";
      a.style.transform = "translateY(12px)";
    });
    onFirstVisible(card, () => {
      animate(articles, {
        opacity: [0, 1],
        translateY: [12, 0],
        duration: 380,
        delay: stagger(45),
        ease: "outQuad"
      });
    });
  });

  // 3. p.eyebrow scramble 揭示
  const eyebrow = document.querySelector<HTMLElement>(".eyebrow");
  onFirstVisible(eyebrow, () => {
    animate(eyebrow, {
      innerHTML: text.scrambleText({
        text: eyebrow?.textContent ?? "",
        cursor: "█",
        override: " ",
        revealDelay: 500,
        revealRate: 20,
        settleDuration: 100
      })
    });
  });
}
