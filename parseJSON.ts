import {createToggleFlip, el} from './dom-helpers';

export function parseJSON(json: object): HTMLElement {
  const $list = Object.keys(json).map(key => {
    const val = json[key];

    if (Array.isArray(val)) {
      if (val.length) {
        return createToggleFlip(`${key} (array) - `, val.reduce((accum, v, index) => {
          accum.appendChild(createToggleFlip('' + index, parseJSON(v)));

          return accum;
        }, el()));
      } else {
        return el(`${key} (array) - []`);
      }
    } 
    if (val == null) {
      return el(`${key} (${val}) - ${val}`);
    }

    switch (typeof val) {
      case 'object': return createToggleFlip(`${key} (object)`, parseJSON(val));
      case 'string': return el(`${key} (string) - ${val}`);
      case 'number': return el(`${key} (number) - ${val}`);
      default: return el(`${key} (${typeof val}) - ${val}`);
    }
  });
  
  return $list.reduce((accum, el) => {
    accum.appendChild(el);

    return accum;
  }, el());
}
