import React from 'react';
const LABEL_9318 = 'component_9318';
export function Component9318({ value = 9318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9318, 'data-value': derived.doubled }, children);
}
export default Component9318;
