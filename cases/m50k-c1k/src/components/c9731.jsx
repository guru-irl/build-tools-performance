import React from 'react';
const LABEL_9731 = 'component_9731';
export function Component9731({ value = 9731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9731, 'data-value': derived.doubled }, children);
}
export default Component9731;
