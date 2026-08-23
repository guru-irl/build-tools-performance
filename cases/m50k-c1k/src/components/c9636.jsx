import React from 'react';
const LABEL_9636 = 'component_9636';
export function Component9636({ value = 9636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9636, 'data-value': derived.doubled }, children);
}
export default Component9636;
