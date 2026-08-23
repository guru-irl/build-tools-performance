import React from 'react';
const LABEL_20637 = 'component_20637';
export function Component20637({ value = 20637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20637, 'data-value': derived.doubled }, children);
}
export default Component20637;
