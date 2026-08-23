import React from 'react';
const LABEL_32709 = 'component_32709';
export function Component32709({ value = 32709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32709, 'data-value': derived.doubled }, children);
}
export default Component32709;
