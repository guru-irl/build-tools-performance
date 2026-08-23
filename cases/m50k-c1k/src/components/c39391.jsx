import React from 'react';
const LABEL_39391 = 'component_39391';
export function Component39391({ value = 39391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39391, 'data-value': derived.doubled }, children);
}
export default Component39391;
