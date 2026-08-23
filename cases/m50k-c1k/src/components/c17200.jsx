import React from 'react';
const LABEL_17200 = 'component_17200';
export function Component17200({ value = 17200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17200, 'data-value': derived.doubled }, children);
}
export default Component17200;
