import React from 'react';
const LABEL_2637 = 'component_2637';
export function Component2637({ value = 2637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2637, 'data-value': derived.doubled }, children);
}
export default Component2637;
