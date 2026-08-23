import React from 'react';
const LABEL_17637 = 'component_17637';
export function Component17637({ value = 17637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17637, 'data-value': derived.doubled }, children);
}
export default Component17637;
