import React from 'react';
const LABEL_35990 = 'component_35990';
export function Component35990({ value = 35990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35990, 'data-value': derived.doubled }, children);
}
export default Component35990;
