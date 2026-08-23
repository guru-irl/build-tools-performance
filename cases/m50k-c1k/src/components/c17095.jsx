import React from 'react';
const LABEL_17095 = 'component_17095';
export function Component17095({ value = 17095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17095, 'data-value': derived.doubled }, children);
}
export default Component17095;
