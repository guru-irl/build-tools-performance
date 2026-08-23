import React from 'react';
const LABEL_23163 = 'component_23163';
export function Component23163({ value = 23163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23163, 'data-value': derived.doubled }, children);
}
export default Component23163;
