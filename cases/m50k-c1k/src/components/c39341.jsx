import React from 'react';
const LABEL_39341 = 'component_39341';
export function Component39341({ value = 39341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39341, 'data-value': derived.doubled }, children);
}
export default Component39341;
