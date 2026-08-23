import React from 'react';
const LABEL_15637 = 'component_15637';
export function Component15637({ value = 15637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15637, 'data-value': derived.doubled }, children);
}
export default Component15637;
