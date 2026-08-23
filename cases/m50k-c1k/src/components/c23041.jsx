import React from 'react';
const LABEL_23041 = 'component_23041';
export function Component23041({ value = 23041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23041, 'data-value': derived.doubled }, children);
}
export default Component23041;
