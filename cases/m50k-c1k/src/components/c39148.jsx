import React from 'react';
const LABEL_39148 = 'component_39148';
export function Component39148({ value = 39148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39148, 'data-value': derived.doubled }, children);
}
export default Component39148;
