import React from 'react';
const LABEL_22637 = 'component_22637';
export function Component22637({ value = 22637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22637, 'data-value': derived.doubled }, children);
}
export default Component22637;
