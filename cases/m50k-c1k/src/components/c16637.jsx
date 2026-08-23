import React from 'react';
const LABEL_16637 = 'component_16637';
export function Component16637({ value = 16637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16637, 'data-value': derived.doubled }, children);
}
export default Component16637;
