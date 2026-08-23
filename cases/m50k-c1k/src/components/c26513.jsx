import React from 'react';
const LABEL_26513 = 'component_26513';
export function Component26513({ value = 26513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26513, 'data-value': derived.doubled }, children);
}
export default Component26513;
