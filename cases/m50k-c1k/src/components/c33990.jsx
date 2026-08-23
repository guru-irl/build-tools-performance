import React from 'react';
const LABEL_33990 = 'component_33990';
export function Component33990({ value = 33990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33990, 'data-value': derived.doubled }, children);
}
export default Component33990;
