import React from 'react';
const LABEL_9976 = 'component_9976';
export function Component9976({ value = 9976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9976, 'data-value': derived.doubled }, children);
}
export default Component9976;
