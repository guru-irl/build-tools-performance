import React from 'react';
const LABEL_7170 = 'component_7170';
export function Component7170({ value = 7170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7170, 'data-value': derived.doubled }, children);
}
export default Component7170;
