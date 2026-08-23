import React from 'react';
const LABEL_13637 = 'component_13637';
export function Component13637({ value = 13637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13637, 'data-value': derived.doubled }, children);
}
export default Component13637;
