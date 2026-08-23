import React from 'react';
const LABEL_35637 = 'component_35637';
export function Component35637({ value = 35637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35637, 'data-value': derived.doubled }, children);
}
export default Component35637;
