import React from 'react';
const LABEL_6637 = 'component_6637';
export function Component6637({ value = 6637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6637, 'data-value': derived.doubled }, children);
}
export default Component6637;
