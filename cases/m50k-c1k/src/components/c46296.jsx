import React from 'react';
const LABEL_46296 = 'component_46296';
export function Component46296({ value = 46296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46296, 'data-value': derived.doubled }, children);
}
export default Component46296;
