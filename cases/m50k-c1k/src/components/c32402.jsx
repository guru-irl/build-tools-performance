import React from 'react';
const LABEL_32402 = 'component_32402';
export function Component32402({ value = 32402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32402, 'data-value': derived.doubled }, children);
}
export default Component32402;
