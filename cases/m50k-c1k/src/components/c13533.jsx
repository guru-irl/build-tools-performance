import React from 'react';
const LABEL_13533 = 'component_13533';
export function Component13533({ value = 13533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13533, 'data-value': derived.doubled }, children);
}
export default Component13533;
