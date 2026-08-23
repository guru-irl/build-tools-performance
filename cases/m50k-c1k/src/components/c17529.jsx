import React from 'react';
const LABEL_17529 = 'component_17529';
export function Component17529({ value = 17529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17529, 'data-value': derived.doubled }, children);
}
export default Component17529;
