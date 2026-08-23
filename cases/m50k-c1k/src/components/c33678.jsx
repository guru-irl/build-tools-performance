import React from 'react';
const LABEL_33678 = 'component_33678';
export function Component33678({ value = 33678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33678, 'data-value': derived.doubled }, children);
}
export default Component33678;
