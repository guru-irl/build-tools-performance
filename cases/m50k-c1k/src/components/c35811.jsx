import React from 'react';
const LABEL_35811 = 'component_35811';
export function Component35811({ value = 35811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35811, 'data-value': derived.doubled }, children);
}
export default Component35811;
