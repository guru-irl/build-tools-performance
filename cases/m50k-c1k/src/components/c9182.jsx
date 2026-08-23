import React from 'react';
const LABEL_9182 = 'component_9182';
export function Component9182({ value = 9182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9182, 'data-value': derived.doubled }, children);
}
export default Component9182;
