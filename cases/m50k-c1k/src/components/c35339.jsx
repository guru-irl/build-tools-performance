import React from 'react';
const LABEL_35339 = 'component_35339';
export function Component35339({ value = 35339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35339, 'data-value': derived.doubled }, children);
}
export default Component35339;
