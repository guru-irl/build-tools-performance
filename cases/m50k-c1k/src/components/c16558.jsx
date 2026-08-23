import React from 'react';
const LABEL_16558 = 'component_16558';
export function Component16558({ value = 16558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16558, 'data-value': derived.doubled }, children);
}
export default Component16558;
