import React from 'react';
const LABEL_28533 = 'component_28533';
export function Component28533({ value = 28533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28533, 'data-value': derived.doubled }, children);
}
export default Component28533;
