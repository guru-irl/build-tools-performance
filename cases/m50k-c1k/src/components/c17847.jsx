import React from 'react';
const LABEL_17847 = 'component_17847';
export function Component17847({ value = 17847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17847, 'data-value': derived.doubled }, children);
}
export default Component17847;
