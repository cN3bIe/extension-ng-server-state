import {parseJSON} from './parseJSON';
import {el, btn, txt} from './dom-helpers';
import {createCanvas} from './canvas';
import {getServerState} from './get-server-state';


export function initShlyapa () {
  const $wrp = createCanvas();

  document.body.appendChild($wrp);

  const json = getServerState();
  
  if (json) {
    $wrp.appendChild(parseJSON(json));
  }
}


