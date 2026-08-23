import React from 'react';
const LABEL_17809 = 'component_17809';
export function Component17809({ value = 17809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17809, 'data-value': derived.doubled }, children);
}
export default Component17809;
