import React from 'react';
const LABEL_13053 = 'component_13053';
export function Component13053({ value = 13053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13053, 'data-value': derived.doubled }, children);
}
export default Component13053;
