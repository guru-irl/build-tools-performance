import React from 'react';
const LABEL_17508 = 'component_17508';
export function Component17508({ value = 17508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17508, 'data-value': derived.doubled }, children);
}
export default Component17508;
