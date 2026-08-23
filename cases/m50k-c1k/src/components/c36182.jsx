import React from 'react';
const LABEL_36182 = 'component_36182';
export function Component36182({ value = 36182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36182, 'data-value': derived.doubled }, children);
}
export default Component36182;
