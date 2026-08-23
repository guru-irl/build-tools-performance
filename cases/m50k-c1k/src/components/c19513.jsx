import React from 'react';
const LABEL_19513 = 'component_19513';
export function Component19513({ value = 19513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19513, 'data-value': derived.doubled }, children);
}
export default Component19513;
