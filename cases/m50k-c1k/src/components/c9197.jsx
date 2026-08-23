import React from 'react';
const LABEL_9197 = 'component_9197';
export function Component9197({ value = 9197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9197, 'data-value': derived.doubled }, children);
}
export default Component9197;
