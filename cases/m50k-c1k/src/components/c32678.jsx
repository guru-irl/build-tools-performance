import React from 'react';
const LABEL_32678 = 'component_32678';
export function Component32678({ value = 32678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32678, 'data-value': derived.doubled }, children);
}
export default Component32678;
