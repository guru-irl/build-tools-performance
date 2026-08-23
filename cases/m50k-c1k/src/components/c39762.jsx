import React from 'react';
const LABEL_39762 = 'component_39762';
export function Component39762({ value = 39762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39762, 'data-value': derived.doubled }, children);
}
export default Component39762;
