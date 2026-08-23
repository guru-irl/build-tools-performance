import React from 'react';
const LABEL_36208 = 'component_36208';
export function Component36208({ value = 36208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36208, 'data-value': derived.doubled }, children);
}
export default Component36208;
