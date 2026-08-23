import React from 'react';
const LABEL_39810 = 'component_39810';
export function Component39810({ value = 39810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39810, 'data-value': derived.doubled }, children);
}
export default Component39810;
