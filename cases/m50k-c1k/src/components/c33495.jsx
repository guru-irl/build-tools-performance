import React from 'react';
const LABEL_33495 = 'component_33495';
export function Component33495({ value = 33495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33495, 'data-value': derived.doubled }, children);
}
export default Component33495;
