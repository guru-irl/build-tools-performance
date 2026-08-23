import React from 'react';
const LABEL_17794 = 'component_17794';
export function Component17794({ value = 17794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17794, 'data-value': derived.doubled }, children);
}
export default Component17794;
