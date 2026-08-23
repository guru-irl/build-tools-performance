import React from 'react';
const LABEL_3637 = 'component_3637';
export function Component3637({ value = 3637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3637, 'data-value': derived.doubled }, children);
}
export default Component3637;
