import React from 'react';
const LABEL_10637 = 'component_10637';
export function Component10637({ value = 10637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10637, 'data-value': derived.doubled }, children);
}
export default Component10637;
