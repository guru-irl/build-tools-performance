import React from 'react';
const LABEL_39764 = 'component_39764';
export function Component39764({ value = 39764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39764, 'data-value': derived.doubled }, children);
}
export default Component39764;
