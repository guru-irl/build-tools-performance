import React from 'react';
const LABEL_3495 = 'component_3495';
export function Component3495({ value = 3495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3495, 'data-value': derived.doubled }, children);
}
export default Component3495;
