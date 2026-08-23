import React from 'react';
const LABEL_32170 = 'component_32170';
export function Component32170({ value = 32170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32170, 'data-value': derived.doubled }, children);
}
export default Component32170;
