import React from 'react';
const LABEL_43637 = 'component_43637';
export function Component43637({ value = 43637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43637, 'data-value': derived.doubled }, children);
}
export default Component43637;
