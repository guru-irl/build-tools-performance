import React from 'react';
const LABEL_37637 = 'component_37637';
export function Component37637({ value = 37637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37637, 'data-value': derived.doubled }, children);
}
export default Component37637;
