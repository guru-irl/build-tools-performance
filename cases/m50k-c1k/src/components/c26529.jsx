import React from 'react';
const LABEL_26529 = 'component_26529';
export function Component26529({ value = 26529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26529, 'data-value': derived.doubled }, children);
}
export default Component26529;
