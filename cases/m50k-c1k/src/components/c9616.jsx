import React from 'react';
const LABEL_9616 = 'component_9616';
export function Component9616({ value = 9616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9616, 'data-value': derived.doubled }, children);
}
export default Component9616;
