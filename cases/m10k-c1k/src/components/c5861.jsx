import React from 'react';
const LABEL_5861 = 'component_5861';
export function Component5861({ value = 5861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5861, 'data-value': derived.doubled }, children);
}
export default Component5861;
