import React from 'react';
const LABEL_16533 = 'component_16533';
export function Component16533({ value = 16533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16533, 'data-value': derived.doubled }, children);
}
export default Component16533;
