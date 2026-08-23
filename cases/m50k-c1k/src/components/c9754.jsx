import React from 'react';
const LABEL_9754 = 'component_9754';
export function Component9754({ value = 9754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9754, 'data-value': derived.doubled }, children);
}
export default Component9754;
