import React from 'react';
const LABEL_637 = 'component_637';
export function Component637({ value = 637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_637, 'data-value': derived.doubled }, children);
}
export default Component637;
