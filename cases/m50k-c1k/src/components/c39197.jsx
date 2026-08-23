import React from 'react';
const LABEL_39197 = 'component_39197';
export function Component39197({ value = 39197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39197, 'data-value': derived.doubled }, children);
}
export default Component39197;
