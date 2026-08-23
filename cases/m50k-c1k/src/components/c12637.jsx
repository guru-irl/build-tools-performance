import React from 'react';
const LABEL_12637 = 'component_12637';
export function Component12637({ value = 12637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12637, 'data-value': derived.doubled }, children);
}
export default Component12637;
