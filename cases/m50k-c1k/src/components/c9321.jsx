import React from 'react';
const LABEL_9321 = 'component_9321';
export function Component9321({ value = 9321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9321, 'data-value': derived.doubled }, children);
}
export default Component9321;
