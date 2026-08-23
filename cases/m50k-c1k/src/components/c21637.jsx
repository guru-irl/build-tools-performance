import React from 'react';
const LABEL_21637 = 'component_21637';
export function Component21637({ value = 21637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21637, 'data-value': derived.doubled }, children);
}
export default Component21637;
