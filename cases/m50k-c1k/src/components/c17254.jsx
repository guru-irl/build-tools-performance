import React from 'react';
const LABEL_17254 = 'component_17254';
export function Component17254({ value = 17254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17254, 'data-value': derived.doubled }, children);
}
export default Component17254;
