import React from 'react';
const LABEL_9037 = 'component_9037';
export function Component9037({ value = 9037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9037, 'data-value': derived.doubled }, children);
}
export default Component9037;
