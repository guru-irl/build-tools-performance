import React from 'react';
const LABEL_28678 = 'component_28678';
export function Component28678({ value = 28678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28678, 'data-value': derived.doubled }, children);
}
export default Component28678;
