import React from 'react';
const LABEL_17964 = 'component_17964';
export function Component17964({ value = 17964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17964, 'data-value': derived.doubled }, children);
}
export default Component17964;
