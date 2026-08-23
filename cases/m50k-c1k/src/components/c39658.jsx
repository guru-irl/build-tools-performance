import React from 'react';
const LABEL_39658 = 'component_39658';
export function Component39658({ value = 39658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39658, 'data-value': derived.doubled }, children);
}
export default Component39658;
