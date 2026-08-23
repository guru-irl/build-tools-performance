import React from 'react';
const LABEL_33637 = 'component_33637';
export function Component33637({ value = 33637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33637, 'data-value': derived.doubled }, children);
}
export default Component33637;
