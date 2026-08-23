import React from 'react';
const LABEL_8637 = 'component_8637';
export function Component8637({ value = 8637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8637, 'data-value': derived.doubled }, children);
}
export default Component8637;
