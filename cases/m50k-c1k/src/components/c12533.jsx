import React from 'react';
const LABEL_12533 = 'component_12533';
export function Component12533({ value = 12533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12533, 'data-value': derived.doubled }, children);
}
export default Component12533;
