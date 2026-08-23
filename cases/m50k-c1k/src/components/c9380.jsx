import React from 'react';
const LABEL_9380 = 'component_9380';
export function Component9380({ value = 9380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9380, 'data-value': derived.doubled }, children);
}
export default Component9380;
