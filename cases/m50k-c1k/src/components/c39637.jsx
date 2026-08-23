import React from 'react';
const LABEL_39637 = 'component_39637';
export function Component39637({ value = 39637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39637, 'data-value': derived.doubled }, children);
}
export default Component39637;
