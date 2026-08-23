import React from 'react';
const LABEL_10658 = 'component_10658';
export function Component10658({ value = 10658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10658, 'data-value': derived.doubled }, children);
}
export default Component10658;
