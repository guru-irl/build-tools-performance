import React from 'react';
const LABEL_20496 = 'component_20496';
export function Component20496({ value = 20496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20496, 'data-value': derived.doubled }, children);
}
export default Component20496;
