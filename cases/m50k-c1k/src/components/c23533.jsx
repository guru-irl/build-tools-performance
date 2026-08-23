import React from 'react';
const LABEL_23533 = 'component_23533';
export function Component23533({ value = 23533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23533, 'data-value': derived.doubled }, children);
}
export default Component23533;
