import React from 'react';
const LABEL_25637 = 'component_25637';
export function Component25637({ value = 25637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25637, 'data-value': derived.doubled }, children);
}
export default Component25637;
