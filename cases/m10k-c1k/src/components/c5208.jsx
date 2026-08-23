import React from 'react';
const LABEL_5208 = 'component_5208';
export function Component5208({ value = 5208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5208, 'data-value': derived.doubled }, children);
}
export default Component5208;
