import React from 'react';
const LABEL_9271 = 'component_9271';
export function Component9271({ value = 9271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9271, 'data-value': derived.doubled }, children);
}
export default Component9271;
