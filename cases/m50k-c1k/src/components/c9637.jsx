import React from 'react';
const LABEL_9637 = 'component_9637';
export function Component9637({ value = 9637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9637, 'data-value': derived.doubled }, children);
}
export default Component9637;
