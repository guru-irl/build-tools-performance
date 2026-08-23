import React from 'react';
const LABEL_9485 = 'component_9485';
export function Component9485({ value = 9485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9485, 'data-value': derived.doubled }, children);
}
export default Component9485;
