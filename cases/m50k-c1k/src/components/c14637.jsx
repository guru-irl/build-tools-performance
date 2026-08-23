import React from 'react';
const LABEL_14637 = 'component_14637';
export function Component14637({ value = 14637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14637, 'data-value': derived.doubled }, children);
}
export default Component14637;
