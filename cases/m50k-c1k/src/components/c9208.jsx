import React from 'react';
const LABEL_9208 = 'component_9208';
export function Component9208({ value = 9208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9208, 'data-value': derived.doubled }, children);
}
export default Component9208;
