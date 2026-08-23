import React from 'react';
const LABEL_28617 = 'component_28617';
export function Component28617({ value = 28617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28617, 'data-value': derived.doubled }, children);
}
export default Component28617;
