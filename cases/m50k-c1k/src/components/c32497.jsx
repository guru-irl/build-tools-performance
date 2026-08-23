import React from 'react';
const LABEL_32497 = 'component_32497';
export function Component32497({ value = 32497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32497, 'data-value': derived.doubled }, children);
}
export default Component32497;
