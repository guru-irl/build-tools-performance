import React from 'react';
const LABEL_34208 = 'component_34208';
export function Component34208({ value = 34208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34208, 'data-value': derived.doubled }, children);
}
export default Component34208;
