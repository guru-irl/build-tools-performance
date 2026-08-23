import React from 'react';
const LABEL_17389 = 'component_17389';
export function Component17389({ value = 17389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17389, 'data-value': derived.doubled }, children);
}
export default Component17389;
