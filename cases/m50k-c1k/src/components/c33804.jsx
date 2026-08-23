import React from 'react';
const LABEL_33804 = 'component_33804';
export function Component33804({ value = 33804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33804, 'data-value': derived.doubled }, children);
}
export default Component33804;
