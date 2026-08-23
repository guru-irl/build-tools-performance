import React from 'react';
const LABEL_9145 = 'component_9145';
export function Component9145({ value = 9145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9145, 'data-value': derived.doubled }, children);
}
export default Component9145;
