import React from 'react';
const LABEL_42637 = 'component_42637';
export function Component42637({ value = 42637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42637, 'data-value': derived.doubled }, children);
}
export default Component42637;
