import React from 'react';
const LABEL_39859 = 'component_39859';
export function Component39859({ value = 39859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39859, 'data-value': derived.doubled }, children);
}
export default Component39859;
