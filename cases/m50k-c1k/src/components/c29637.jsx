import React from 'react';
const LABEL_29637 = 'component_29637';
export function Component29637({ value = 29637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29637, 'data-value': derived.doubled }, children);
}
export default Component29637;
