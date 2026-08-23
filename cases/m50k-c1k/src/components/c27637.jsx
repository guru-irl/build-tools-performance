import React from 'react';
const LABEL_27637 = 'component_27637';
export function Component27637({ value = 27637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27637, 'data-value': derived.doubled }, children);
}
export default Component27637;
