import React from 'react';
const LABEL_18512 = 'component_18512';
export function Component18512({ value = 18512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18512, 'data-value': derived.doubled }, children);
}
export default Component18512;
