import React from 'react';
const LABEL_17045 = 'component_17045';
export function Component17045({ value = 17045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17045, 'data-value': derived.doubled }, children);
}
export default Component17045;
