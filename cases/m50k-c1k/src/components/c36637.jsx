import React from 'react';
const LABEL_36637 = 'component_36637';
export function Component36637({ value = 36637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36637, 'data-value': derived.doubled }, children);
}
export default Component36637;
