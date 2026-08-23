import React from 'react';
const LABEL_9928 = 'component_9928';
export function Component9928({ value = 9928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9928, 'data-value': derived.doubled }, children);
}
export default Component9928;
