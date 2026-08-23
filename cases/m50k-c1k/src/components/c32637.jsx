import React from 'react';
const LABEL_32637 = 'component_32637';
export function Component32637({ value = 32637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32637, 'data-value': derived.doubled }, children);
}
export default Component32637;
