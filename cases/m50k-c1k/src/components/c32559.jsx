import React from 'react';
const LABEL_32559 = 'component_32559';
export function Component32559({ value = 32559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32559, 'data-value': derived.doubled }, children);
}
export default Component32559;
