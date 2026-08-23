import React from 'react';
const LABEL_39666 = 'component_39666';
export function Component39666({ value = 39666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39666, 'data-value': derived.doubled }, children);
}
export default Component39666;
