import React from 'react';
const LABEL_21658 = 'component_21658';
export function Component21658({ value = 21658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21658, 'data-value': derived.doubled }, children);
}
export default Component21658;
