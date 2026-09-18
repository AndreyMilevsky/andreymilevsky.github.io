import { scramble } from 'https://esm.sh/@scrambl/core'

const items = [
  { el: document.querySelector('#crypto1'), label: 'bitcoin', address: 'bc1qtj5qajzyv80ajqs64kutlhn8lp2dqmj7rcy9u0', duration: 1000,  },
  { el: document.querySelector('#crypto2'), label: 'ethereum', address: '0x05C195F46Af73fA1D7D97C4d6cB45bab5c2cD02d', duration: 1500,  },
  { el: document.querySelector('#crypto3'), label: 'solana', address: 'FNXqcWP1FAQEFHtYEZZx37QzniS8AqCNGxQVHKwZMTc4', duration: 1200, }
];

function animateText(el, text) {
  scramble(el, {
    text,
    chars: 'symbols',
    from: 'center',
  });
}

items.forEach((item) => {
  let open = false;

  animateText(item.el, item.label);

  item.el.addEventListener('click', () => {
    open = !open;
    animateText(item.el, open ? item.address : item.label);
  });
});