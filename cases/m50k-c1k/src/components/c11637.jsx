import React from 'react';
const LABEL_11637 = 'component_11637';
export function Component11637({ value = 11637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11637, 'data-value': derived.doubled }, children);
}
export default Component11637;
