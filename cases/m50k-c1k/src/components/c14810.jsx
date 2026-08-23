import React from 'react';
const LABEL_14810 = 'component_14810';
export function Component14810({ value = 14810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14810, 'data-value': derived.doubled }, children);
}
export default Component14810;
