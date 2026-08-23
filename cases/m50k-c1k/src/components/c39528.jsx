import React from 'react';
const LABEL_39528 = 'component_39528';
export function Component39528({ value = 39528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39528, 'data-value': derived.doubled }, children);
}
export default Component39528;
