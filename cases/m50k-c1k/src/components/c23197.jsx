import React from 'react';
const LABEL_23197 = 'component_23197';
export function Component23197({ value = 23197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23197, 'data-value': derived.doubled }, children);
}
export default Component23197;
