import React from 'react';
const LABEL_9990 = 'component_9990';
export function Component9990({ value = 9990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9990, 'data-value': derived.doubled }, children);
}
export default Component9990;
