import React from 'react';
const LABEL_17795 = 'component_17795';
export function Component17795({ value = 17795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17795, 'data-value': derived.doubled }, children);
}
export default Component17795;
