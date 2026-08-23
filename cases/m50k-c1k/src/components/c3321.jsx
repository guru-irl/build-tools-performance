import React from 'react';
const LABEL_3321 = 'component_3321';
export function Component3321({ value = 3321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3321, 'data-value': derived.doubled }, children);
}
export default Component3321;
