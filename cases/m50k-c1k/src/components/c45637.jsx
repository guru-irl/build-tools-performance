import React from 'react';
const LABEL_45637 = 'component_45637';
export function Component45637({ value = 45637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45637, 'data-value': derived.doubled }, children);
}
export default Component45637;
