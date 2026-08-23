import React from 'react';
const LABEL_32957 = 'component_32957';
export function Component32957({ value = 32957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32957, 'data-value': derived.doubled }, children);
}
export default Component32957;
