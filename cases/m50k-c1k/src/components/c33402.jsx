import React from 'react';
const LABEL_33402 = 'component_33402';
export function Component33402({ value = 33402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33402, 'data-value': derived.doubled }, children);
}
export default Component33402;
