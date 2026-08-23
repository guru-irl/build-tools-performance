import React from 'react';
const LABEL_39677 = 'component_39677';
export function Component39677({ value = 39677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39677, 'data-value': derived.doubled }, children);
}
export default Component39677;
