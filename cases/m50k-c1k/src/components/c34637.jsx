import React from 'react';
const LABEL_34637 = 'component_34637';
export function Component34637({ value = 34637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34637, 'data-value': derived.doubled }, children);
}
export default Component34637;
