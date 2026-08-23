import React from 'react';
const LABEL_14830 = 'component_14830';
export function Component14830({ value = 14830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14830, 'data-value': derived.doubled }, children);
}
export default Component14830;
