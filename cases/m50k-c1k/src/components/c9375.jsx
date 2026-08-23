import React from 'react';
const LABEL_9375 = 'component_9375';
export function Component9375({ value = 9375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9375, 'data-value': derived.doubled }, children);
}
export default Component9375;
