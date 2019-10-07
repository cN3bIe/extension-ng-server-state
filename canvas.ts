import {el, btn} from './dom-helpers';

export function createCanvas(): HTMLElement {
  const $resizeLine = el('', 'resize-line');
  const $wrp = el('', 'wrp-transfer-state');
  const styles = el();

  styles.innerHTML = `
  <style>
  .wrp-transfer-state * {
    box-sizing: border-box;
  }
  .wrp-transfer-state {
    box-sizing: border-box;
    display: block;
    position: fixed;
    padding: 20px;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 3px #004c40;
    overflow: auto;
  }
  .wrp-transfer-state .close-btn {
    position: absolute;
    right: 0;
    top: 0; 
  }
  .wrp-transfer-state .resize-line {
    height: 4px;
    border-top: 2px solid #004c40;
    margin-bottom: -2px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    cursor: grabbing;
  }
  .toggle-flip {
    
  }
  .toggle-flip .name {
    margin-right: 5px;
  }
  .toggle-flip .btn {

  }
  .toggle-flip .content {
    display: none;
    padding-left: 20px;
    border-left: 2px solid #00796b;
    // background: #48a999;
  }
  .toggle-flip.open>.content {
    display: block;
  }

  .test-size-window {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  </style>
  `;


  const close = btn('x', 'close-btn');
  close.addEventListener('click', e => {
    $wrp.parentElement.removeChild($wrp)
  });

  $wrp.appendChild(close);
  
  const $size = el('', 'test-size-window');
  document.body.appendChild($size);

  let windowHeight = $size.clientHeight;
  setTimeout(() => {
    windowHeight = $size.clientHeight;
    $size.parentElement.removeChild($size);
  });

  $wrp.appendChild($resizeLine);
  $wrp.appendChild(styles);

  let hasResize = false;

  $resizeLine.addEventListener('mousedown', e => {
    hasResize = true;
  });
  document.addEventListener('mouseup', e => {
    hasResize = false;
  });
  document.addEventListener('mousemove', e => {
    if (hasResize) {
      $wrp.style.height = (windowHeight - e.clientY) + 'px';
    }
  })

  return $wrp;
}