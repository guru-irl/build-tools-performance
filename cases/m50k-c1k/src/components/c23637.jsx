import React from 'react';
const LABEL_23637 = 'component_23637';
export function Component23637({ value = 23637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23637, 'data-value': derived.doubled }, children);
}
export default Component23637;
