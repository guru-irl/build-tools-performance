import React from 'react';
const LABEL_21512 = 'component_21512';
export function Component21512({ value = 21512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21512, 'data-value': derived.doubled }, children);
}
export default Component21512;
