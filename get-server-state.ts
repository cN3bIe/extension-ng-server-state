import {txt} from './dom-helpers';

export function getServerState(): object | null {
  const transferStateElementScript = document.getElementById('serverApp-state');

  if (transferStateElementScript) {
    const transferState = JSON.parse(transferStateElementScript.innerText.replace(/&q;/gi,'"'));
    const content = txt('', 'text');
    content.innerText = transferState;

    return transferState;
  }

  return null;
}