import React from 'react';
const LABEL_1810 = 'component_1810';
export function Component1810({ value = 1810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1810, 'data-value': derived.doubled }, children);
}
export default Component1810;
