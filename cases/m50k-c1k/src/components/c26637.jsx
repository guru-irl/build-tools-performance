import React from 'react';
const LABEL_26637 = 'component_26637';
export function Component26637({ value = 26637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26637, 'data-value': derived.doubled }, children);
}
export default Component26637;
