import React from 'react';
const LABEL_17148 = 'component_17148';
export function Component17148({ value = 17148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17148, 'data-value': derived.doubled }, children);
}
export default Component17148;
