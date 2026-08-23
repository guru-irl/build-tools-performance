import React from 'react';
const LABEL_16399 = 'component_16399';
export function Component16399({ value = 16399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16399, 'data-value': derived.doubled }, children);
}
export default Component16399;
