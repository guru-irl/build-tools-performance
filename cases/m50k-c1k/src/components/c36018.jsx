import React from 'react';
const LABEL_36018 = 'component_36018';
export function Component36018({ value = 36018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36018, 'data-value': derived.doubled }, children);
}
export default Component36018;
