import React from 'react';
const LABEL_18637 = 'component_18637';
export function Component18637({ value = 18637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18637, 'data-value': derived.doubled }, children);
}
export default Component18637;
