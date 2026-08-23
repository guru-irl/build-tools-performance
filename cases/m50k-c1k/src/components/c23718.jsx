import React from 'react';
const LABEL_23718 = 'component_23718';
export function Component23718({ value = 23718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23718, 'data-value': derived.doubled }, children);
}
export default Component23718;
