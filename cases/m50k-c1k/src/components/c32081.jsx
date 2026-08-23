import React from 'react';
const LABEL_32081 = 'component_32081';
export function Component32081({ value = 32081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32081, 'data-value': derived.doubled }, children);
}
export default Component32081;
