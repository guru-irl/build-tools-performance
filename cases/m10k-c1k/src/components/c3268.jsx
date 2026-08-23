import React from 'react';
const LABEL_3268 = 'component_3268';
export function Component3268({ value = 3268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3268, 'data-value': derived.doubled }, children);
}
export default Component3268;
