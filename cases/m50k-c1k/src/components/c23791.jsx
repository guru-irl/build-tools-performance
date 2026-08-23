import React from 'react';
const LABEL_23791 = 'component_23791';
export function Component23791({ value = 23791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23791, 'data-value': derived.doubled }, children);
}
export default Component23791;
