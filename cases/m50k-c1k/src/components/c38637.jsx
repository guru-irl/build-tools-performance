import React from 'react';
const LABEL_38637 = 'component_38637';
export function Component38637({ value = 38637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38637, 'data-value': derived.doubled }, children);
}
export default Component38637;
