import React from 'react';
const LABEL_2658 = 'component_2658';
export function Component2658({ value = 2658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2658, 'data-value': derived.doubled }, children);
}
export default Component2658;
