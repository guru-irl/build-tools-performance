import React from 'react';
const LABEL_17976 = 'component_17976';
export function Component17976({ value = 17976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17976, 'data-value': derived.doubled }, children);
}
export default Component17976;
