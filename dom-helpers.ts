export function createToggleFlip(title: string, $content: HTMLElement): HTMLElement {
  const $el = el('', 'toggle-flip');
  const $name = txt(title, 'name');
  const $btn = btn('>', 'btn');
  const $slot = el('', 'content');

  $el.appendChild($btn);
  $el.appendChild($name);
  $slot.appendChild($content);
  $el.appendChild($slot);

  let open = false;

  $btn.addEventListener('click', e => {
    open = !open;

    $el.classList.toggle('open', open);
  });
  
  return $el;
}

export function el(text: string = '', classList: string = ''): HTMLElement {
  const $el = document.createElement('div');

  if (classList) {
    $el.classList.add(classList);
  }

  $el.innerText = text;

  return $el;
}

export function btn(text: string, classList: string = ''): HTMLElement {
  const $el = document.createElement('button');

  if (classList) {
    $el.classList.add(classList);
  }

  $el.innerText = text;

  return $el;
}

export function txt(text: string, classList: string = ''): HTMLElement {
  const $el = document.createElement('span');

  if (classList) {
    $el.classList.add(classList);
  }

  $el.innerText = text;

  return $el;
}